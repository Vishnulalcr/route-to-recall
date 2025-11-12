"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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
  // Short exciting descriptions for destinations
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

  return (
    <Link href={`/destinations/${destination.slug}`} scroll={true}>
      <motion.div
        className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-xl"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="aspect-[3/4] relative">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Simplified content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-3 text-white">{destination.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{getExcitingDescription(destination.name)}</p>
        </div>
      </motion.div>
    </Link>
  )
}
