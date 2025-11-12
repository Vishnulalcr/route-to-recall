"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Sparkles, Camera, Heart, Compass } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      title: "Island Paradise",
      location: "Maldives",
      description:
        "Discover pristine beaches and crystal-clear waters. Snorkel with manta rays, enjoy sunset cruises, and experience luxury overwater villas in this tropical paradise.",
      image: "https://images.unsplash.com/photo-1514282401047-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
      color: "#00C2FF",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Temple & Culture Tour",
      location: "Thailand",
      description:
        "Explore ancient temples, vibrant markets, and authentic Thai cuisine. Experience the rich cultural heritage and warm hospitality of the Land of Smiles.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
      color: "#39FF14",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Urban Exploration",
      location: "Singapore",
      description:
        "Experience a futuristic city-state where cultures blend seamlessly. Discover iconic architecture, world-class dining, and lush gardens in this modern marvel.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
      color: "#00C2FF",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Island Discovery",
      location: "Bali",
      description:
        "Immerse yourself in the Island of the Gods. Experience sacred temples, rice terraces, pristine beaches, and spiritual wellness retreats.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df34b147?q=80&w=2938&auto=format&fit=crop",
      color: "#A259FF",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Mountain Trekking",
      location: "Nepal",
      description:
        "Journey through the Himalayas with breathtaking mountain vistas. Experience local Sherpa culture, ancient monasteries, and unforgettable trekking adventures.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
      color: "#A259FF",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "Luxury Desert",
      location: "Dubai",
      description:
        "Experience ultra-modern luxury in the desert. From towering skyscrapers to traditional souks, enjoy world-class shopping and Arabian adventures.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      color: "#00C2FF",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      id: 7,
      title: "Cultural Fusion",
      location: "Malaysia",
      description:
        "Discover a cultural melting pot where tradition meets modernity. Explore diverse cuisines, stunning rainforests, and beautiful islands.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop",
      color: "#A259FF",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 8,
      title: "Pearl of the Ocean",
      location: "Sri Lanka",
      description:
        "Experience ancient temples, tea plantations, and pristine beaches. Encounter diverse wildlife and immerse yourself in rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      color: "#39FF14",
      icon: <Heart className="h-5 w-5" />,
    },
  ]

  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#F7F9FC] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">Curated Experiences</h1>
            <p className="text-[#666666] text-xl max-w-3xl mx-auto">
              Discover immersive journeys crafted to transform how you connect with the world's most remarkable
              destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/experience/${experience.id}`} className="group block">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-[#39FF14]" />
                        <span className="text-white/90 text-sm">{experience.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                    </div>

                    <div
                      className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: experience.color }}
                    >
                      {experience.icon}
                    </div>
                  </div>

                  <p className="text-[#666666] mb-4">{experience.description}</p>

                  <div className="flex items-center text-[#A259FF] group-hover:text-[#39FF14] transition-colors">
                    <span className="font-semibold">View Experience</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-[#666666] text-lg mb-8">
              We specialize in creating custom experiences tailored to your unique travel dreams. Let's craft your
              perfect journey together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white font-bold px-10 py-6 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
