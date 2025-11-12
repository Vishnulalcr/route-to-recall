"use client"

import type React from "react"

import { motion } from "framer-motion"

interface StickerElementProps {
  emoji: string
  style?: React.CSSProperties
}

export default function StickerElement({ emoji, style = {} }: StickerElementProps) {
  return (
    <motion.div
      className="absolute z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg"
      style={style}
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: Math.random() * 0.5,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 10,
        transition: { duration: 0.3 },
      }}
    >
      <span className="text-3xl">{emoji}</span>
    </motion.div>
  )
}
