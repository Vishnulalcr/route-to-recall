"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ScrollingGalleryProps {
  images: string[]
}

export default function ScrollingGallery({ images }: ScrollingGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600])

  const firstRow = images.slice(0, Math.ceil(images.length / 2))
  const secondRow = images.slice(Math.ceil(images.length / 2))

  return (
    <div ref={containerRef} className="overflow-hidden py-10">
      <motion.div className="flex gap-6 mb-6" style={{ x: x1 }}>
        {firstRow.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 h-80 relative rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <Image src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {firstRow.map((image, index) => (
          <motion.div
            key={`dup-${index}`}
            className="flex-shrink-0 w-80 h-80 relative rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <Image src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flex gap-6" style={{ x: x2 }}>
        {secondRow.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 h-80 relative rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + firstRow.length + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {secondRow.map((image, index) => (
          <motion.div
            key={`dup-${index}`}
            className="flex-shrink-0 w-80 h-80 relative rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + firstRow.length + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
