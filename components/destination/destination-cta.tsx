"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationCtaProps {
  destination: Destination
}

export default function DestinationCta({ destination }: DestinationCtaProps) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience <span style={{ color: destination.color }}>{destination.name}</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our travel experts are ready to help you plan the perfect trip. Fill out the form and we'll get back to
              you with a customized itinerary.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="font-medium">hello@routetorecall.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2"
                    style={{ focusRing: destination.color }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2"
                    style={{ focusRing: destination.color }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRing: destination.color }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Travel Plans
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRing: destination.color }}
                  placeholder={`I'm interested in visiting ${destination.name}...`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                style={{ backgroundColor: destination.color }}
              >
                <span>Send Inquiry</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
