"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, type PanInfo } from "framer-motion"
import Image from "next/image"

interface CardData {
  id: number
  title: string
  description: string
  image: string
  color: string
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Thailand",
    description: "Land of smiles with stunning temples and tropical beaches",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    color: "#E91E63",
  },
  {
    id: 2,
    title: "Singapore",
    description: "Modern city-state with diverse cultures and cuisines",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2352&auto=format&fit=crop",
    color: "#00BCD4",
  },
  {
    id: 3,
    title: "Malaysia",
    description: "Cultural melting pot with rainforests and islands",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2364&auto=format&fit=crop",
    color: "#9C27B0",
  },
  {
    id: 4,
    title: "Maldives",
    description: "Paradise of overwater bungalows and turquoise waters",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2365&auto=format&fit=crop",
    color: "#00BCD4",
  },
  {
    id: 5,
    title: "Bali",
    description: "Island of the Gods with lush jungles and pristine beaches",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    color: "#9C27B0",
  },
  {
    id: 6,
    title: "Sri Lanka",
    description: "Pearl of the Indian Ocean with ancient temples and wildlife",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    color: "#4CAF50",
  },
  {
    id: 7,
    title: "Nepal",
    description: "Home of the Himalayas and spiritual experiences",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2370&auto=format&fit=crop",
    color: "#F44336",
  },
  {
    id: 8,
    title: "Dubai",
    description: "Futuristic skylines and desert adventures",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    color: "#FF9800",
  },
]

function useViewport() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    const detectTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0,
      )
    }

    handleResize()
    detectTouch()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { width, height, isTouchDevice }
}

const AbstractArt = ({ colors }: { colors: string[] }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: colors[3] }}></div>

      <div
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[0]}99 60%, transparent 100%)`,
          boxShadow: `0 0 40px ${colors[0]}80`,
        }}
      ></div>

      <div
        className="absolute top-[20%] right-[-20%] w-[80%] h-[70%] rounded-full transform rotate-45"
        style={{
          background: `linear-gradient(45deg, ${colors[2]} 0%, ${colors[1]} 100%)`,
          boxShadow: `0 0 30px ${colors[1]}80`,
        }}
      ></div>

      <div
        className="absolute bottom-[-10%] left-[20%] w-[70%] h-[60%] rounded-full transform -rotate-12"
        style={{
          background: `linear-gradient(135deg, ${colors[2]} 0%, ${colors[0]} 100%)`,
          boxShadow: `0 0 25px ${colors[0]}80`,
        }}
      ></div>

      <div className="absolute bottom-[10%] right-[10%] flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              backgroundColor: colors[2],
              width: `${3 + Math.random() * 2}px`,
              height: `${3 + Math.random() * 2}px`,
              marginLeft: `${5 + Math.random() * 10}px`,
              marginTop: `${5 + Math.random() * 10}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  card: CardData
  index: number
  position: number
  activeIndex: number
  setActiveIndex: (index: number) => void
  totalCards: number
  viewport: { width: number; height: number; isTouchDevice: boolean }
}

const Card = ({ card, index, position, activeIndex, setActiveIndex, totalCards, viewport }: CardProps) => {
  const isDragging = useRef(false)
  const wasJustSelected = useRef(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = viewport.isTouchDevice
    ? {
        stiffness: 400,
        damping: 40,
        mass: 0.3,
      }
    : {
        stiffness: 150,
        damping: 30,
        mass: 0.8,
      }

  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const tiltAmount = viewport.isTouchDevice ? 8 : 15
  const rotateX = useTransform(springY, [-200, 200], [tiltAmount, -tiltAmount])
  const rotateY = useTransform(springX, [-200, 200], [-tiltAmount, tiltAmount])

  const scaleMultiplier = viewport.isTouchDevice ? 0.6 : 1.2
  const scale = useTransform([springX, springY], ([latestX, latestY]) => {
    const distance = Math.sqrt(latestX * latestX + latestY * latestY)
    return 1 - Math.min(distance, 150) / (800 / scaleMultiplier)
  })

  const distanceFromCenter = index - activeIndex
  const isCenter = distanceFromCenter === 0

  const getCardDimensions = () => {
    const aspectRatio = 1209 / 1716
    let height, width

    if (viewport.width < 640) {
      height = Math.min(viewport.height * 0.45, 280)
    } else if (viewport.width < 768) {
      height = Math.min(viewport.height * 0.6, 400)
    } else if (viewport.width < 1024) {
      height = Math.min(viewport.height * 0.5, 400)
    } else {
      height = 400
    }

    width = height * aspectRatio

    return { width, height }
  }

  const { width: cardWidth, height: cardHeight } = getCardDimensions()

  const getBaseXPosition = () => {
    if (viewport.width < 640) return 0

    if (distanceFromCenter === 0) return 0

    const direction = distanceFromCenter < 0 ? -1 : 1
    const distance = Math.abs(distanceFromCenter)

    let baseSpacing, additionalSpacing

    if (viewport.width < 768) {
      baseSpacing = 50
      additionalSpacing = 20
    } else if (viewport.width < 1024) {
      baseSpacing = 70
      additionalSpacing = 25
    } else {
      baseSpacing = 100
      additionalSpacing = 35
    }

    return direction * (baseSpacing + (distance - 1) * additionalSpacing)
  }

  const getBaseYPosition = () => {
    if (viewport.width >= 640) return 0

    if (distanceFromCenter === 0) return 0

    const direction = distanceFromCenter < 0 ? -1 : 1
    const distance = Math.abs(distanceFromCenter)

    const baseSpacing = 15
    const additionalSpacing = 8

    return direction * (baseSpacing + (distance - 1) * additionalSpacing)
  }

  const getRotation = () => {
    if (distanceFromCenter === 0) return 0

    const direction = distanceFromCenter < 0 ? 1 : -1

    let baseRotation = 4

    if (viewport.width < 640) {
      baseRotation = 1.5
    } else if (viewport.width < 1024) {
      baseRotation = 3
    }

    return (direction * baseRotation * Math.min(Math.abs(distanceFromCenter), 3)) / 3
  }

  const getZIndex = () => {
    if (wasJustSelected.current) return totalCards + 3
    if (isDragging.current) return totalCards + 2
    if (distanceFromCenter === 0) return totalCards + 1
    return totalCards - Math.abs(distanceFromCenter)
  }

  const getOpacity = () => {
    return 1
  }

  const getCardScale = () => {
    if (distanceFromCenter === 0) {
      return isHovered ? 1.05 : 1
    }

    let minScale = 0.8
    if (viewport.width < 640) {
      minScale = 0.85
    }

    const scaleStep = (1 - minScale) / 4

    return Math.max(minScale, 1 - Math.abs(distanceFromCenter) * scaleStep)
  }

  const getBorderRadius = () => {
    const proportion = 150 / 1716
    return `${cardHeight * proportion}px`
  }

  const getBorderWidth = () => {
    const proportion = 9 / 1716
    return `${cardHeight * proportion}px`
  }

  const handleCardClick = () => {
    if (index !== activeIndex) {
      wasJustSelected.current = true
      setActiveIndex(index)

      setTimeout(() => {
        wasJustSelected.current = false
      }, 500)
    }
  }

  const handleDragStart = () => {
    isDragging.current = true
  }

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    x.set(info.offset.x)
    y.set(info.offset.y)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = false

    const threshold = viewport.isTouchDevice ? 15 : 30
    const dragOffset = viewport.width < 640 ? info.offset.y : info.offset.x
    const velocityThreshold = viewport.isTouchDevice ? 100 : 200
    const velocity = viewport.width < 640 ? Math.abs(info.velocity.y) : Math.abs(info.velocity.x)

    if (Math.abs(dragOffset) > threshold || velocity > velocityThreshold) {
      const direction = dragOffset < 0 ? 1 : -1
      const newIndex = (activeIndex + direction + totalCards) % totalCards

      wasJustSelected.current = true
      setActiveIndex(newIndex)

      setTimeout(() => {
        wasJustSelected.current = false
      }, 500)
    }

    const velocityFactor = 0.05
    springX.set(0, true)
    springY.set(0, true)
  }

  const [isActive, setIsActive] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      className="absolute touch-none"
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        scale,
        zIndex: getZIndex(),
        width: cardWidth,
        height: cardHeight,
        opacity: getOpacity(),
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        cursor: isActive ? "grabbing" : "grab",
      }}
      initial={{
        x: getBaseXPosition(),
        y: getBaseYPosition(),
        rotate: getRotation(),
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        x: isDragging.current ? undefined : getBaseXPosition(),
        y: isDragging.current ? undefined : getBaseYPosition(),
        rotate: getRotation(),
        opacity: getOpacity(),
        scale: getCardScale(),
        transition: {
          type: "spring",
          stiffness: viewport.isTouchDevice ? 400 : 150,
          damping: viewport.isTouchDevice ? 40 : 30,
          mass: viewport.isTouchDevice ? 0.3 : 0.8,
        },
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={viewport.isTouchDevice ? 0.2 : 0.06}
      dragTransition={{
        power: viewport.isTouchDevice ? 0.03 : 0.12,
        timeConstant: viewport.isTouchDevice ? 200 : 650,
      }}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onTapStart={() => setIsActive(true)}
      onTap={() => {
        setIsActive(false)
        handleCardClick()
      }}
      onTapCancel={() => setIsActive(false)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: getBorderRadius(),
          border: `${getBorderWidth()} solid white`,
          boxShadow: isCenter
            ? "0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)"
            : isActive
              ? "0 20px 40px -12px rgba(0, 0, 0, 0.35)"
              : "0 12px 35px -18px rgba(0, 0, 0, 0.25)",
        }}
        animate={{
          boxShadow:
            isHovered && isCenter
              ? "0 35px 70px -15px rgba(0, 0, 0, 0.45), 0 0 40px rgba(255, 255, 255, 0.15)"
              : undefined,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="h-2/3 relative overflow-hidden">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700"
              style={{
                transform: isHovered && isCenter ? "scale(1.1)" : "scale(1)",
              }}
              priority={index === activeIndex}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"></div>
          </div>

          <div className="h-1/3 p-[8%] flex flex-col justify-center bg-white">
            <h3
              className="font-bold text-[min(6vw,28px)] mb-[4%] leading-tight transition-colors duration-300"
              style={{ color: isHovered && isCenter ? card.color : "#1C1C1C" }}
            >
              {card.title}
            </h3>
            <p className="text-[min(3vw,14px)] leading-tight text-gray-600">{card.description}</p>
          </div>
        </div>

        {isActive && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ borderRadius: getBorderRadius() }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default function DraggableCardStack() {
  const [activeIndex, setActiveIndex] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const viewport = useViewport()

  useEffect(() => {
    const handleResize = () => {
      setActiveIndex((prev) => prev)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length)
  }

  const [showInstructions, setShowInstructions] = useState(true)

  useEffect(() => {
    if (viewport.isTouchDevice && showInstructions) {
      const timer = setTimeout(() => {
        setShowInstructions(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [viewport.isTouchDevice, showInstructions])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {viewport.isTouchDevice && showInstructions && (
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full z-[10000]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <p className="text-sm text-white font-medium flex items-center gap-2">
            <motion.span animate={{ y: [-5, 5, -5] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              👆
            </motion.span>
            {viewport.width < 640 ? "Swipe up or down" : "Tap or swipe to explore"}
          </p>
        </motion.div>
      )}

      {viewport.width >= 640 && (
        <>
          <motion.button
            onClick={handlePrev}
            className="absolute left-8 z-[10000] bg-white/30 backdrop-blur-md hover:bg-white/40 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous destination"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-8 z-[10000] bg-white/30 backdrop-blur-md hover:bg-white/40 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next destination"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </>
      )}

      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              position={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              totalCards={cardData.length}
              viewport={viewport}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
