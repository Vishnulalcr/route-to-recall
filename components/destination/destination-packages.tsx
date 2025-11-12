"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Clock, Star } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"
import { useState } from "react"
import EnquiryDialog from "@/components/enquiry-dialog"

interface DestinationPackagesProps {
  destination: Destination
}

export default function DestinationPackages({ destination }: DestinationPackagesProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleBookNow = (packageTitle: string) => {
    setSelectedPackage(`${destination.name} - ${packageTitle}`)
    setIsDialogOpen(true)
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Travel Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated experiences in {destination.name}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destination.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Package Image */}
              <div className="relative h-48">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-white" />
                    POPULAR
                  </div>
                )}
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>

                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{pkg.duration}</span>
                </div>

                <p className="text-gray-600 mb-6">{pkg.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <p className="text-2xl font-bold">{pkg.price}</p>
                  </div>

                  <button
                    onClick={() => handleBookNow(pkg.title)}
                    className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: destination.color }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EnquiryDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} experienceName={selectedPackage} />
    </section>
  )
}
