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

  const packageCount = destination.packages.length
  const gridClass =
    packageCount === 1
      ? "grid grid-cols-1 max-w-2xl mx-auto"
      : packageCount === 2
        ? "grid grid-cols-1 lg:grid-cols-2 gap-8"
        : "grid grid-cols-1 lg:grid-cols-3 gap-8"

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Travel Packages</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated experiences in {destination.name}
          </p>
        </motion.div>

        <div className={gridClass}>
          {destination.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Package Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center shadow-lg">
                    <Star className="h-3 w-3 mr-1 fill-white" />
                    POPULAR
                  </div>
                )}
              </div>

              {/* Package Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">{pkg.title}</h3>

                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="font-medium">{pkg.duration}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{pkg.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-6 border-t border-gray-200 mt-auto">
                  {pkg.price === "Contact Us" ? (
                    <div className="flex flex-col gap-4">
                      <div className="text-center">
                        <p className="text-gray-500 text-sm mb-1">Pricing Details</p>
                        <p className="text-xl font-bold text-gray-900">Contact Us for Quote</p>
                      </div>
                      <button
                        onClick={() => handleBookNow(pkg.title)}
                        className="w-full px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{ backgroundColor: destination.color }}
                      >
                        Get Quote
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-gray-500 text-sm mb-2">Starting from</p>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <p className="text-3xl font-bold text-gray-900 leading-none">{pkg.price}</p>
                          <span className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            per person (for 2 adults)
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookNow(pkg.title)}
                        className="w-full px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{ backgroundColor: destination.color }}
                      >
                        Book Now
                      </button>
                    </div>
                  )}
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
