"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Card {
  id: string
  title: string
  content: string
  color: string
}

interface CardStackProps {
  cards: Card[]
}

export default function CardStack({ cards }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

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
            className="absolute w-full max-w-sm rounded-xl shadow-lg p-6"
            style={{ backgroundColor: cards[currentIndex].color }}
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
    </div>
  )
}
