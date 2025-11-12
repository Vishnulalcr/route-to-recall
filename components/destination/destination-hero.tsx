"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationHeroProps {
  destination: Destination
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
              style={{ backgroundColor: destination.color }}
            >
              {destination.emoji}
            </div>
            <span className="text-white/80 text-lg">{destination.location}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg">{destination.name}</h1>

          <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl">{destination.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {destination.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: `${destination.color}90` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="h-10 w-10 text-white/70" />
      </motion.div>
    </section>
  )
}
