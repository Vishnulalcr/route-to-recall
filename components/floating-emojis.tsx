"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState<{ id: number; emoji: string; x: number; y: number }[]>([])

  useEffect(() => {
    const travelEmojis = ["✈️", "🏝️", "🌴", "🧳", "🏄‍♂️", "🗺️", "🌊", "🏔️", "🚗", "🛥️", "🏕️", "📸"]

    // Create initial emojis
    const initialEmojis = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: travelEmojis[Math.floor(Math.random() * travelEmojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))

    setEmojis(initialEmojis)

    // Add new emoji every few seconds
    const interval = setInterval(() => {
      setEmojis((current) => {
        // Remove oldest emoji if we have too many
        const updated = current.length >= 20 ? [...current.slice(1)] : [...current]

        // Add new emoji
        return [
          ...updated,
          {
            id: Date.now(),
            emoji: travelEmojis[Math.floor(Math.random() * travelEmojis.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
          },
        ]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <AnimatePresence>
        {emojis.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-2xl"
            initial={{
              opacity: 0,
              x: `${item.x}vw`,
              y: `${item.y}vh`,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: `${item.y - 20}vh`,
              scale: [0.5, 1, 1, 0.5],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 15,
              ease: "easeInOut",
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
