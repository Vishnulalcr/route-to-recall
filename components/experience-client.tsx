"use client"

import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Calendar, Users, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import EnquiryDialog from "@/components/enquiry-dialog"

interface ExperienceData {
  id: number
  title: string
  location: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  duration: string
  groupSize: string
  highlights: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
  color: string
}

export default function ExperienceClient({ experience }: { experience: ExperienceData }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={experience.image || "/placeholder.svg"}
            alt={experience.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-end pb-16">
          <Link
            href="/"
            className="absolute top-32 left-4 md:left-8 lg:left-16 flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-[#39FF14]" />
              <span className="text-white/90 text-lg">{experience.location}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">{experience.title}</h1>
            <p className="text-white/90 text-xl max-w-3xl">{experience.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Calendar className="h-8 w-8 mb-4" style={{ color: experience.color }} />
              <h3 className="text-lg font-bold mb-2">Duration</h3>
              <p className="text-[#666666]">{experience.duration}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users className="h-8 w-8 mb-4" style={{ color: experience.color }} />
              <h3 className="text-lg font-bold mb-2">Group Size</h3>
              <p className="text-[#666666]">{experience.groupSize}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Camera className="h-8 w-8 mb-4" style={{ color: experience.color }} />
              <h3 className="text-lg font-bold mb-2">Experience</h3>
              <p className="text-[#666666]">Photography Friendly</p>
            </motion.div>
          </div>

          <motion.div
            className="prose prose-lg max-w-none mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About This Experience</h2>
            <p className="text-[#666666] text-lg leading-relaxed">{experience.fullDescription}</p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: experience.color }}
                  ></div>
                  <p className="text-[#666666]">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${experience.title} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Travel Plan
          </motion.h2>
          <div className="space-y-6">
            {experience.itinerary.map((day, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: experience.color }}
                  >
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                    <p className="text-[#666666]">{day.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience This Journey?</h2>
            <p className="text-[#666666] text-lg mb-8">
              Get in touch with us to customize this experience and start planning your adventure.
            </p>
            <Button
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white font-bold px-10 py-7 text-lg transition-all duration-300"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      <BentoFooter />

      <EnquiryDialog
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        experienceName={`${experience.title} - ${experience.location}`}
      />
    </main>
  )
}
