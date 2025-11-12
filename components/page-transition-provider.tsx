"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { AnimatePresence } from "framer-motion"

interface TransitionState {
  isTransitioning: boolean
  sourceRect: DOMRect | null
  targetSlug: string | null
  destinationData: any
}

interface TransitionContextType {
  transitionState: TransitionState
  startTransition: (rect: DOMRect, slug: string, data: any) => void
  endTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [transitionState, setTransitionState] = useState<TransitionState>({
    isTransitioning: false,
    sourceRect: null,
    targetSlug: null,
    destinationData: null,
  })

  const startTransition = useCallback((rect: DOMRect, slug: string, data: any) => {
    setTransitionState({
      isTransitioning: true,
      sourceRect: rect,
      targetSlug: slug,
      destinationData: data,
    })
  }, [])

  const endTransition = useCallback(() => {
    setTransitionState({
      isTransitioning: false,
      sourceRect: null,
      targetSlug: null,
      destinationData: null,
    })
  }, [])

  return (
    <TransitionContext.Provider value={{ transitionState, startTransition, endTransition }}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </TransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider")
  }
  return context
}
