"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Card {
  id: string
  title: string
  content: string
  color: string
}

interface AdvancedCardStackProps {
  cards: Card[]
}

export default function AdvancedCardStack({ cards }: AdvancedCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const x = useMotionValue(0)
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8])
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10])
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)
    if (info.offset.x > 100 && currentIndex > 0) {
      handlePrevious()
    } else if (info.offset.x < -100 && currentIndex < cards.length - 1) {
      handleNext()
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        duration: 0.3,
      },
    }),
  }

  // If no cards are provided, show a placeholder
  if (!cards || cards.length === 0) {
    return (
      <div className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
        <p className="text-gray-500">No cards available</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{
              x: isDragging ? x : 0,
              scale: isDragging ? scale : 1,
              rotate: isDragging ? rotate : 0,
              opacity: isDragging ? opacity : 1,
              backgroundColor: cards[currentIndex].color,
            }}
            className="absolute w-full max-w-sm rounded-xl shadow-lg p-6 cursor-grab active:cursor-grabbing"
          >
            <h3 className="text-xl font-bold mb-2 text-white">{cards[currentIndex].title}</h3>
            <p className="text-white/90">{cards[currentIndex].content}</p>
            <div className="absolute bottom-4 right-4 text-white/70 text-sm">
              {currentIndex + 1} / {cards.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className="bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next card"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/30"} transition-colors`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
