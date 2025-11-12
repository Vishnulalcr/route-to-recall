"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationHighlightsProps {
  destination: Destination
}

export default function DestinationHighlights({ destination }: DestinationHighlightsProps) {
  // Function to get icon component by name
  const getIconByName = (name: string): LucideIcon => {
    return LucideIcons[name as keyof typeof LucideIcons] || LucideIcons.Star
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes {destination.name} a truly special destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destination.highlights.map((highlight, index) => {
            const Icon = getIconByName(highlight.icon)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${destination.color}20` }}
                >
                  <Icon className="h-7 w-7" style={{ color: destination.color }} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center">{highlight.title}</h3>
                <p className="text-gray-600 text-center">{highlight.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
