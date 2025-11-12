"use client"

import { motion } from "framer-motion"

interface MarqueeScrollProps {
  items: string[]
}

export default function MarqueeScroll({ items }: MarqueeScrollProps) {
  return (
    <div className="relative overflow-hidden py-4 bg-[#4D96FF]">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>

      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xl md:text-2xl font-black mx-4 text-white">{item}</span>
              <span className="text-xl md:text-2xl mx-4 text-white">•</span>
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`repeat-${index}`} className="flex items-center">
              <span className="text-xl md:text-2xl font-black mx-4 text-white">{item}</span>
              <span className="text-xl md:text-2xl mx-4 text-white">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
