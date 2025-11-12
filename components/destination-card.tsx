"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useCardTransition } from "./card-transition-provider"

interface DestinationProps {
  destination: {
    id: number
    slug: string
    name: string
    location: string
    image: string
    color: string
    emoji: string
    tags: string[]
    likes: number
  }
}

export default function DestinationCard({ destination }: DestinationProps) {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { startTransition } = useCardTransition()

  const getExcitingDescription = (name: string) => {
    const descriptions: { [key: string]: string } = {
      Thailand: "Discover paradise beaches and spiritual temples",
      Singapore: "Experience modern marvels and diverse cuisines",
      Malaysia: "Explore cultural fusion and natural wonders",
      Maldives: "Indulge in luxury overwater paradise",
      Bali: "Discover paradise beaches and spiritual temples",
      "Sri Lanka": "Uncover ancient heritage and scenic tea country",
      Nepal: "Trek among the world's highest peaks",
      Dubai: "Experience futuristic luxury and desert adventures",
    }

    return descriptions[name] || "Embark on an unforgettable journey of discovery"
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (shouldReduceMotion) {
      // Simple navigation for reduced motion preference
      router.push(`/destinations/${destination.slug}`)
      return
    }

    if (cardRef.current) {
      const bounds = cardRef.current.getBoundingClientRect()
      startTransition({
        slug: destination.slug,
        name: destination.name,
        image: destination.image,
        color: destination.color,
        bounds,
      })

      // Navigate after a short delay to let animation start
      setTimeout(() => {
        router.push(`/destinations/${destination.slug}`)
      }, 50)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.08,
          ease: "easeOut",
        },
      }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <motion.div className="aspect-[3/4] relative">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </motion.div>

      <motion.div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.h3 className="text-2xl font-bold mb-3 text-white">{destination.name}</motion.h3>
        <p className="text-white/90 text-sm leading-relaxed">{getExcitingDescription(destination.name)}</p>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${destination.color}25 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}
