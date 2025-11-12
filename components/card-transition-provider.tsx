"use client"

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface CardTransitionState {
  isTransitioning: boolean
  cardData: {
    slug: string
    name: string
    image: string
    color: string
    bounds: DOMRect | null
  } | null
}

interface CardTransitionContextType {
  startTransition: (data: CardTransitionState["cardData"]) => void
  endTransition: () => void
  transitionState: CardTransitionState
}

const CardTransitionContext = createContext<CardTransitionContextType | undefined>(undefined)

export function CardTransitionProvider({ children }: { children: ReactNode }) {
  const [transitionState, setTransitionState] = useState<CardTransitionState>({
    isTransitioning: false,
    cardData: null,
  })
  const animationRef = useRef<number | null>(null)

  const startTransition = useCallback((data: CardTransitionState["cardData"]) => {
    console.log("[v0] Starting card transition from bounds:", data?.bounds)

    setTransitionState({
      isTransitioning: true,
      cardData: data,
    })

    // End transition after animation completes
    animationRef.current = window.setTimeout(() => {
      setTransitionState((prev) => ({
        ...prev,
        isTransitioning: false,
      }))
    }, 520)
  }, [])

  const endTransition = useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current)
    }
    setTransitionState({
      isTransitioning: false,
      cardData: null,
    })
  }, [])

  const getTransformValues = () => {
    if (!transitionState.cardData?.bounds) return null

    const from = transitionState.cardData.bounds

    // Destination bounds - full viewport width, 80vh height starting from top
    const to = {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight * 0.8,
    }

    // Calculate scale factors
    const scaleX = to.width / from.width
    const scaleY = to.height / from.height

    // Calculate translation needed (from card position to destination)
    const translateX = to.left - from.left
    const translateY = to.top - from.top

    console.log("[v0] Transform values:", { from, to, scaleX, scaleY, translateX, translateY })

    return {
      initial: {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      },
      animate: {
        x: translateX,
        y: translateY,
        scaleX,
        scaleY,
      },
      startPosition: {
        left: from.left,
        top: from.top,
        width: from.width,
        height: from.height,
      },
    }
  }

  const transformValues = transitionState.isTransitioning ? getTransformValues() : null

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [])

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <CardTransitionContext.Provider value={{ startTransition, endTransition, transitionState }}>
      {children}
      <AnimatePresence>
        {transitionState.isTransitioning && transitionState.cardData && transformValues && (
          <>
            {/* Background dimming */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
              className="fixed inset-0 bg-black/20 z-40"
              style={{ pointerEvents: "none" }}
            />

            <motion.div
              className="fixed z-50 overflow-hidden"
              initial={{
                ...transformValues.initial,
                borderRadius: "1.5rem",
              }}
              animate={{
                ...transformValues.animate,
                borderRadius: "0rem",
              }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                left: `${transformValues.startPosition.left}px`,
                top: `${transformValues.startPosition.top}px`,
                width: `${transformValues.startPosition.width}px`,
                height: `${transformValues.startPosition.height}px`,
                transformOrigin: "top left", // Critical for correct scaling origin
                pointerEvents: "none",
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={transitionState.cardData.image || "/placeholder.svg"}
                alt={transitionState.cardData.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

              {/* Card title that fades out during expansion */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.2, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white">{transitionState.cardData.name}</h3>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </CardTransitionContext.Provider>
  )
}

export function useCardTransition() {
  const context = useContext(CardTransitionContext)
  if (context === undefined) {
    throw new Error("useCardTransition must be used within a CardTransitionProvider")
  }
  return context
}
