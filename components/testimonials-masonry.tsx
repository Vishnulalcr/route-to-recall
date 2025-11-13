"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"

interface Testimonial {
  id: number
  name: string
  initials: string
  message: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Manu KA",
    initials: "MK",
    message:
      "Hey Team, I can't help but reflect on the incredible journey we shared. From exploring new places to the spontaneous adventures, every moment was filled with joy and laughter. Your company made the trip unforgettable, and I'm grateful for the amazing memories we created together. Here's to more adventures in the future",
    color: "#39FF14",
  },
  {
    id: 2,
    name: "Lishma",
    initials: "L",
    message:
      "Hey, Yea..We really loved it.. Everything was well organised. We had a great time in Thailand. Thank you so much for making our trip memorable. Special thanks to Vinayak who was always available to clear our queries. Looking forward for more trips with you guys. Once again thank you Route to Recall team",
    color: "#A259FF",
  },
  {
    id: 3,
    name: "Amrita",
    initials: "A",
    message:
      "Hi, You guys made our family trip absolutely amazing. Our first international trip was well organized considering our requirements. And wanted to specially mention the idea to include Nong Nooch village for our little one. She had her best time there. Thank you so much guys. Would love to plan another trip with you guys soon",
    color: "#00C2FF",
  },
  {
    id: 4,
    name: "Vishnulal",
    initials: "V",
    message:
      "Hey Vinayaklal, Ajisha, and the Route to Recall crew, Yea for sure, in one word we loved it. We really wanted to say a huge thanks for organizing the most epic 10 day trip to Thailand for us. Every spot, from the cool vibes of Pattaya to the stunning beaches in Phuket and Krabi, and the buzz of Bangkok, was just spot on. You guys really know how to cater to a family, even our little munchkin had a blast. We are still buzzing from the adventure and can't wait for the next one with you guys",
    color: "#FF6B6B",
  },
  {
    id: 5,
    name: "Akshay",
    initials: "A",
    message:
      "Amazing experience with Route to Recall! Every detail was perfectly planned and executed. Can't wait for our next adventure!",
    color: "#4ECDC4",
  },
  {
    id: 6,
    name: "Sushama Ramesh",
    initials: "SR",
    message:
      "Fantastic service! The team went above and beyond to make our vacation special. Highly recommended for anyone looking for memorable travel experiences.",
    color: "#95E1D3",
  },
  {
    id: 7,
    name: "Aishwarya",
    initials: "A",
    message:
      "Trip was adipoly. Everything was well organised as per the itinerary and we had an amazing time in Phuket and Krabi. Thank you so much for making our vacation memorable. Will definitely contact you for more trips",
    color: "#F38181",
  },
  {
    id: 8,
    name: "Sangeetha",
    initials: "S",
    message:
      "Wonderful experience from start to finish. The attention to detail and personalized service made all the difference. Thank you Route to Recall!",
    color: "#AA96DA",
  },
  {
    id: 9,
    name: "Adhithya",
    initials: "A",
    message:
      "Absolutely incredible journey! The team's expertise and dedication ensured we had the best possible experience. Looking forward to booking again soon.",
    color: "#FCBAD3",
  },
  {
    id: 10,
    name: "Vishakh",
    initials: "V",
    message:
      "Outstanding service and unforgettable memories. Route to Recall made our dream vacation a reality. Highly recommended!",
    color: "#A8D8EA",
  },
  {
    id: 11,
    name: "Arun/Akhina",
    initials: "AA",
    message:
      "Perfect trip planning and execution. Every moment was magical thanks to the Route to Recall team. We'll definitely be back for more adventures!",
    color: "#FFD93D",
  },
  {
    id: 12,
    name: "Ardra",
    initials: "A",
    message:
      "Exceptional travel experience! The team's passion for creating memorable journeys really shows. Thank you for making our trip so special!",
    color: "#6BCB77",
  },
]

export default function TestimonialsMasonry() {
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const constraintsRef = useRef<HTMLDivElement>(null)

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  // Auto-scroll animation
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      const speed = -30 // pixels per second
      const distance = (speed * delta) / 1000
      const currentX = x.get()
      const cardWidth = 380 // approximate card width including gap
      const totalWidth = cardWidth * testimonials.length

      let newX = currentX + distance

      // Reset position when scrolled past one set of cards
      if (newX <= -totalWidth) {
        newX = newX + totalWidth
      }

      x.set(newX)
    }
  })

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Hear out from our travellers</h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling container */}
      <div className="relative" ref={constraintsRef}>
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -9999, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[340px] md:w-[360px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <h3 className="font-bold text-[#1C1C1C]">{testimonial.name}</h3>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed">{testimonial.message}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
