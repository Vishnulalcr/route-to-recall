"use client"

import { motion } from "framer-motion"
import { Calendar, DollarSign, Languages } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationOverviewProps {
  destination: Destination
}

export default function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Discover {destination.name}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">{destination.longDescription}</p>
                <p className="text-gray-700 leading-relaxed">
                  From the moment you arrive in {destination.name}, you'll be immersed in a world of extraordinary
                  experiences. Whether you're seeking adventure, relaxation, cultural immersion, or a bit of everything,
                  {destination.name} offers endless possibilities for creating unforgettable memories.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Essential Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Best Time to Visit</p>
                    <p className="text-gray-600">{destination.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Local Currency</p>
                    <p className="text-gray-600">{destination.localCurrency}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-gray-600">{destination.languages.join(", ")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
              style={{ borderLeft: `4px solid ${destination.color}` }}
            >
              <h3 className="text-xl font-semibold mb-2">Why Visit</h3>
              <p className="text-gray-600">
                {destination.name} offers a perfect blend of natural beauty, cultural richness, and unforgettable
                experiences that will leave you with memories to last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
