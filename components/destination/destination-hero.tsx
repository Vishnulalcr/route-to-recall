"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationHeroProps {
  destination: Destination
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  const contentDelay = shouldReduceMotion ? 0.1 : 0.35

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.25,
        }}
      >
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </motion.div>

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: contentDelay,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
              style={{ backgroundColor: destination.color }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.3,
                delay: shouldReduceMotion ? 0.15 : contentDelay + 0.05,
                type: shouldReduceMotion ? "tween" : "spring",
                stiffness: 200,
              }}
            >
              {destination.emoji}
            </motion.div>
            <motion.span
              className="text-white/80 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: contentDelay + 0.1,
              }}
            >
              {destination.location}
            </motion.span>
          </div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: contentDelay + 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {destination.name}
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: contentDelay + 0.15,
            }}
          >
            {destination.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: contentDelay + 0.2,
            }}
          >
            {destination.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: `${destination.color}90` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: contentDelay + 0.25 + index * 0.05,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={shouldReduceMotion ? {} : { repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChevronDown className="h-10 w-10 text-white/70" />
      </motion.div>
    </section>
  )
}
