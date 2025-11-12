"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface DestinationMarkerProps {
  destination: {
    id: number
    name: string
    location: string
    coordinates: { x: number; y: number }
    description: string
    image: string
  }
}

export default function DestinationMarker({ destination }: DestinationMarkerProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `calc(50% + ${destination.coordinates.x}%)`,
        top: `calc(50% + ${destination.coordinates.y}%)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: destination.id * 0.2,
      }}
    >
      <motion.div
        className="w-4 h-4 bg-[#1A1A1A] rounded-full relative z-10"
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute top-0 left-0 w-4 h-4 bg-[#1A1A1A] rounded-full opacity-30"
        animate={{
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full -translate-y-4 w-48 bg-white shadow-lg rounded-none overflow-hidden z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-24 w-full">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-bold">{destination.name}</h3>
              <p className="text-xs text-[#1A1A1A]/70">{destination.location}</p>
              <p className="text-xs mt-1">{destination.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
