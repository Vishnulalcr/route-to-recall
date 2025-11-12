"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const sections = [
    {
      title: "Find your vibe",
      description:
        "Whether you're into beach parties, cultural immersion, or adventure sports, we've got trips that match your energy.",
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop",
      color: "#FF5E5B",
    },
    {
      title: "Connect with locals",
      description:
        "Our trips connect you with real locals who show you the authentic side of their home - not the tourist version.",
      image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?q=80&w=1974&auto=format&fit=crop",
      color: "#5B8FF9",
    },
    {
      title: "Travel sustainably",
      description: "All our experiences support local communities and minimize environmental impact. Good vibes only.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      color: "#4ECDC4",
    },
  ]

  const progresses = sections.map((_, index) =>
    useTransform(scrollYProgress, [index / sections.length, (index + 1) / sections.length], [0, 1]),
  )

  const opacities = progresses.map((progress) => useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]))

  const scales = progresses.map((progress) => useTransform(progress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]))

  return (
    <section ref={containerRef} className="relative py-[50vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-indigo-500"></div>
                <span className="text-indigo-500 uppercase text-sm font-medium tracking-wider">Our approach</span>
              </div>

              {sections.map((section, index) => {
                return (
                  <motion.div key={index} style={{ opacity: opacities[index] }} className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
                    <p className="text-white/70 text-lg mb-6">{section.description}</p>
                    <Button variant="ghost" className="text-white hover:bg-white/10 px-0 hover:px-4 transition-all">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )
              })}
            </div>

            <div className="relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden">
              {sections.map((section, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{ opacity: opacities[index], scale: scales[index] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{ backgroundColor: `${section.color}50` }}
                    ></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
