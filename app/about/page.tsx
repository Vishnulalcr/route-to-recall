"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Compass, Heart, Award } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const companyValues = [
    {
      icon: <Compass className="h-6 w-6 text-white" />,
      title: "Authentic Experiences",
      description:
        "We craft journeys that go beyond tourist attractions, connecting you with local cultures and hidden gems.",
      color: "#39FF14",
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Expert Guidance",
      description:
        "Our team of seasoned travelers and local experts ensures every detail of your journey is thoughtfully planned.",
      color: "#A259FF",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Sustainable Travel",
      description:
        "We're committed to responsible tourism that respects local communities and preserves natural environments.",
      color: "#00C2FF",
    },
  ]

  const teamMembers = [
    {
      name: "Ajisha Rajan",
      role: "Co Founder",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ajisha%20Rajan-Rbe2jdOkrPytCB6musZNUWoav3oP8i.jpeg",
    },
    {
      name: "Vinayak lal",
      role: "Founder & CEO",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vinayak-wUVa3AmjYiezYOaiTPkN5DF3fet45b.jpeg",
    },
    {
      name: "Sanjita Krishnan",
      role: "Operations Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanjita-RNlcJhcf6RnOFZDYC1tmGn0vmbK3xE.jpeg",
    },
  ]

  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-[#1C1C1C]">Our Story</h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto">
              From Suits to Sandals - The Journey of RoutetoRecall
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
              Hey there, fellow wanderlusters and dream chasers!
            </h2>

            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              We're the crazy minds behind RoutetoRecall, and if you think travelling is just a vacation, you're in for
              a wild ride. Let us introduce ourselves.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#A259FF]">The Dreamers Behind the Madness</h3>

            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Meet Ajisha Rajan and Vinayak Lal, the brains, hearts, and slightly unhinged souls behind this
              extraordinary venture. We were once stuck in the notorious 9-to-5 grind, suffocating in suits and dreaming
              about open skies, exotic cuisines, and the freedom to explore. But you know what? We dared to break free.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#39FF14]">From Suits to Sandals</h3>

            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Yep, you read that right. We swapped our formal attire for flip-flops, our office chairs for hammocks, and
              our conference rooms for sandy beaches. It wasn't a mid-life crisis; it was a mid-life awakening!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#1C1C1C]">Meet Our Team</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Our expert travel designers work closely with local partners to craft authentic, immersive experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#F3ECFF]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-bold mb-1 text-[#1C1C1C]">{member.name}</h4>
                <p className="text-[#666666]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1C1C1C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 0 20px ${value.color}40`,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full bg-[#1C1C1C] flex items-center justify-center mb-6"
                  style={{ boxShadow: `0 0 15px ${value.color}60` }}
                >
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#1C1C1C]">{value.title}</h4>
                <p className="text-[#666666]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F3ECFF]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-black mb-6 text-[#1C1C1C]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Create Your Story?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#666666] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's turn your travel dreams into unforgettable memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white text-lg px-10 py-7 font-bold shadow-lg transition-all duration-300">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
