"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, MapPin, Camera, Heart, Compass, Briefcase, Award } from "lucide-react"
import Image from "next/image"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import BentoCard from "@/components/bento-card"
import ScrollingGallery from "@/components/scrolling-gallery"
import CursorEffect from "@/components/cursor-effect"
import DraggableCardStack from "@/components/draggable-card-stack"
import DestinationGrid from "@/components/destination-grid"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
  const heroParallax = useTransform(heroScrollProgress, [0, 1], [0, 300])
  const aboutImageY = useTransform(aboutScrollProgress, [0, 1], [100, -100])
  const aboutContentY = useTransform(aboutScrollProgress, [0, 1], [50, -50])

  const formOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0])
  const formY = useTransform(scrollYProgress, [0, 0.01], [0, 50])

  // Destinations data
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      location: "Southeast Asia",
      description: "Land of smiles with stunning temples, vibrant street life, and tropical beaches",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
      color: "#39FF14",
    },
    {
      id: 2,
      name: "Singapore",
      location: "Southeast Asia",
      description: "Modern city-state blending cultures, cuisines, and cutting-edge architecture",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
      color: "#00C2FF",
    },
    {
      id: 3,
      name: "Malaysia",
      location: "Southeast Asia",
      description: "A cultural melting pot with modern cities, ancient rainforests, and idyllic islands",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop",
      color: "#A259FF",
    },
    {
      id: 4,
      name: "Maldives",
      location: "Indian Ocean",
      description: "Paradise of overwater bungalows and crystal-clear turquoise waters",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2938&auto=format&fit=crop",
      color: "#00C2FF",
    },
    {
      id: 5,
      name: "Bali",
      location: "Indonesia",
      description: "Island of the Gods with lush jungles and pristine beaches",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=80",
      color: "#A259FF",
    },
    {
      id: 6,
      name: "Sri Lanka",
      location: "South Asia",
      description: "Pearl of the Indian Ocean with ancient temples, tea plantations, and wildlife",
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1200&auto=format&fit=crop&q=80",
      color: "#39FF14",
    },
    {
      id: 7,
      name: "Nepal",
      location: "South Asia",
      description: "Home of the Himalayas with trekking adventures and spiritual experiences",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
      color: "#A259FF",
    },
    {
      id: 8,
      name: "Dubai",
      location: "United Arab Emirates",
      description: "Futuristic skylines, luxury shopping, and desert adventures",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      color: "#00C2FF",
    },
  ]

  // Experiences data
  const experiences = [
    {
      id: 1,
      title: "Island Paradise",
      location: "Maldives",
      description:
        "Discover pristine beaches and crystal-clear waters. Snorkel with manta rays, enjoy sunset cruises, and experience luxury overwater villas in this tropical paradise.",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop&q=60",
      color: "#00C2FF",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Temple & Culture Tour",
      location: "Thailand",
      description:
        "Explore ancient temples, vibrant markets, and authentic Thai cuisine. Experience the rich cultural heritage and warm hospitality of the Land of Smiles.",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80",
      color: "#39FF14",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Urban Exploration",
      location: "Singapore",
      description:
        "Experience a futuristic city-state where cultures blend seamlessly. Discover iconic architecture, world-class dining, and lush gardens in this modern marvel.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=60",
      color: "#00C2FF",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Island Discovery",
      location: "Bali",
      description:
        "Immerse yourself in the Island of the Gods. Experience sacred temples, rice terraces, pristine beaches, and spiritual wellness retreats.",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=80",
      color: "#A259FF",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Mountain Trekking",
      location: "Nepal",
      description:
        "Journey through the Himalayas with breathtaking mountain vistas. Experience local Sherpa culture, ancient monasteries, and unforgettable trekking adventures.",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=60",
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
  ]

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&auto=format&fit=crop&q=80", // Thailand - Grand Palace
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80", // Singapore - Marina Bay
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&auto=format&fit=crop&q=80", // Malaysia - Petronas Towers
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&auto=format&fit=crop&q=80", // Maldives - Tropical paradise
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=80", // Bali - Rice terraces
    "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1200&auto=format&fit=crop&q=80", // Sri Lanka - Temple and nature
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop", // Nepal - Himalayas
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop", // Dubai - Burj Khalifa
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80", // Thailand - Temple
    "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=1200&auto=format&fit=crop&q=80", // Singapore - Gardens by the Bay
  ]

  // Company values
  const companyValues = [
    {
      icon: <Compass className="h-6 w-6 text-white" />,
      title: "Authentic Experiences",
      description:
        "We craft journeys that go beyond tourist attractions, connecting you with local cultures and hidden gems.",
      color: "#39FF14",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
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

  // Team members
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

  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false)

  return (
    <main ref={containerRef} className="bg-white text-[#1C1C1C] min-h-screen overflow-hidden">
      <CursorEffect />
      <BentoNavigation />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden flex flex-col">
        {/* Main Hero Background Image - Full Page */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic-Jeo748jlNrgF6sreBAy4ZNpZZ9VdMH.png"
            alt="Minimalist misty landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </motion.div>

        <div className="relative z-10 flex-1 flex flex-col">
          {/* Hero Title - Fixed at top */}
          <motion.div
            className="pt-24 md:pt-32 px-4 flex-shrink-0"
            style={{ y: headerY, opacity: headerOpacity }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-center max-w-4xl uppercase shimmer-hero-text mx-auto">
              Where every Journey Turns into Stories
            </h1>
          </motion.div>

          <div className="flex-1 relative min-h-[250px] sm:min-h-[350px] md:min-h-[500px] flex items-center justify-center -mt-[250px] md:-mt-[100px]">
            <DraggableCardStack />
          </div>

          <motion.div
            className="relative z-20 w-full pb-4 md:pb-8 flex-shrink-0 -mt-[150px] md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              opacity: formOpacity,
              y: formY,
            }}
          >
            {/* Mobile toggle button */}
            <div className="flex justify-center mb-3 px-4 md:hidden -mt-[100px]">
              <button
                onClick={() => setIsMobileFormOpen(!isMobileFormOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full border border-white/30 transition-all"
              >
                <span className="text-white font-medium text-sm">
                  {isMobileFormOpen ? "Hide Form" : "Plan Your Trip"}
                </span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: isMobileFormOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
            </div>

            <motion.form
              className={`w-full border-t border-white/20 pt-4 px-4 md:px-8 lg:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${
                isMobileFormOpen ? "grid" : "hidden"
              } md:grid`}
              initial={false}
              animate={{ opacity: 1 }}
            >
              <div className="sm:col-span-1 lg:col-span-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-1 lg:col-span-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-1 lg:col-span-1">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-1 lg:col-span-1">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
                    required
                  />
                  <button type="submit" className="ml-2 text-white hover:text-[#39FF14] transition-all flex-shrink-0">
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* Background Image Layer 1 - Tropical beach with parallax effect */}
        <motion.div className="absolute inset-0 w-full h-full -z-30" style={{ y: heroParallax }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-silent-sightseer-208940871-11720472.jpg-WftYWHdzkmIu1YwkpvhRp8BQyVum4F.jpeg"
            alt="Tropical beach with limestone cliffs and turquoise water"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Background Image Layer 2 - Turquoise river with scale effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] -z-20"
          style={{ scale: heroScale }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
              alt="Turquoise river flowing through forest gorge"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>
        </motion.div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 md:py-32 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute inset-0 bg-[#F7F9FC] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#1C1C1C]">Find your next Holiday</h2>
            <p className="text-[#666666] max-w-2xl mx-auto text-lg">
              Explore our handcrafted travel plans for an unforgettable experiences and breathtaking landscapes
            </p>
          </motion.div>

          <DestinationGrid destinations={destinations} />
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-baskincreativeco-1766838.jpg-OzTWvOCaEXrnbcGebTx8mtx6jKxb3u.jpeg"
            alt="Turquoise river flowing through forest gorge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg">
              Discover Nature's Hidden Treasures
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 drop-shadow-md">
              Immerse yourself in breathtaking landscapes that will transform your perspective
            </p>
            <a
              href="https://www.instagram.com/routetorecall/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white font-bold px-8 py-6 transition-all duration-300"
            >
              Explore Our Journeys
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 md:py-32 px-4 md:px-8 lg:px-16 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 md:mb-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 text-[#1C1C1C]">
              Curated experiences
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto text-base md:text-lg px-4">
              Immersive activities that transform how you connect with the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Featured Experience - Large Card */}
            <BentoCard
              className="col-span-1 md:col-span-2 lg:col-span-8 row-span-1 md:row-span-2 bg-white min-h-[400px] md:min-h-[500px]"
              image={experiences[0].image}
              imageAlt={experiences[0].title}
              title={experiences[0].title}
              subtitle={experiences[0].location}
              description={experiences[0].description}
              color={experiences[0].color}
              link={`/experience/${experiences[0].id}`}
              priority
              textColor="text-[#1C1C1C]"
            />

            {/* Text Card - Quote */}
            <BentoCard
              className="col-span-1 lg:col-span-4 row-span-1 bg-[#F3ECFF] min-h-[250px]"
              title="Not all who wander are lost."
              description="We create experiences that transform how you see the world."
              color="#A259FF"
              textColor="text-[#1C1C1C]"
              link="/about"
              linkText="Our philosophy"
            />

            {/* Experience Card 2 */}
            <BentoCard
              className="col-span-1 lg:col-span-4 row-span-1 bg-white min-h-[250px]"
              image={experiences[1].image}
              imageAlt={experiences[1].title}
              title={experiences[1].title}
              subtitle={experiences[1].location}
              color={experiences[1].color}
              icon={experiences[1].icon}
              link={`/experience/${experiences[1].id}`}
              textColor="text-[#1C1C1C]"
            />

            {/* Experience Card 3 - Wide */}
            <BentoCard
              className="col-span-1 md:col-span-2 lg:col-span-6 row-span-1 bg-white min-h-[300px]"
              image={experiences[2].image}
              imageAlt={experiences[2].title}
              title={experiences[2].title}
              subtitle={experiences[2].location}
              description={experiences[2].description}
              color={experiences[2].color}
              icon={experiences[2].icon}
              link={`/experience/${experiences[2].id}`}
              textColor="text-[#1C1C1C]"
            />

            {/* Experience Card 4 - Bali */}
            <BentoCard
              className="col-span-1 lg:col-span-3 row-span-1 bg-white min-h-[300px]"
              image={experiences[3].image}
              imageAlt={experiences[3].title}
              title={experiences[3].title}
              subtitle={experiences[3].location}
              color={experiences[3].color}
              icon={experiences[3].icon}
              link={`/experience/${experiences[3].id}`}
              textColor="text-[#1C1C1C]"
            />

            {/* Second row - additional experiences */}
            <BentoCard
              className="col-span-1 lg:col-span-4 row-span-1 bg-white min-h-[300px]"
              image={experiences[4].image}
              imageAlt={experiences[4].title}
              title={experiences[4].title}
              subtitle={experiences[4].location}
              color={experiences[4].color}
              icon={experiences[4].icon}
              link={`/experience/${experiences[4].id}`}
              textColor="text-[#1C1C1C]"
            />

            <BentoCard
              className="col-span-1 lg:col-span-4 row-span-1 bg-white min-h-[300px]"
              image={experiences[5].image}
              imageAlt={experiences[5].title}
              title={experiences[5].title}
              subtitle={experiences[5].location}
              color={experiences[5].color}
              icon={experiences[5].icon}
              link={`/experience/${experiences[5].id}`}
              textColor="text-[#1C1C1C]"
            />

            <BentoCard
              className="col-span-1 lg:col-span-4 row-span-1 bg-gradient-to-br from-[#A259FF] to-[#00C2FF] min-h-[300px]"
              title="Discover more"
              description="Explore our full catalog of unique experiences around the world."
              color="#FFFFFF"
              textColor="text-white"
              link="/experiences"
              linkText="View all experiences"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-[#F7F9FC] text-[#1C1C1C]">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061385-50cf7c579365?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Magazine-style header */}
          <div className="mb-24 relative">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#A259FF]/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.span
              className="inline-block text-[#A259FF] font-bold text-lg mb-4 tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              OUR STORY
            </motion.span>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <motion.h2
                className="text-6xl md:text-8xl font-black leading-none text-[#1C1C1C] md:w-2/3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Redefining Travel
              </motion.h2>

              <motion.div
                className="md:w-1/3 mt-6 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-20 bg-[#39FF14] mb-6"></div>
                <motion.p
                  className="text-[#666666]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Founded by passionate travelers with decades of experience, Route to Recall's mission is to create
                  journeys that go beyond sightseeing.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Bento grid layout for about content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            {/* Large feature image */}
            <motion.div
              className="md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&auto=format&fit=crop&q=80"
                alt="Travel experience"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Philosophy</h3>
                <p className="text-white/90 text-lg max-w-2xl">
                  We believe in the transformative power of travel—its ability to broaden perspectives, foster
                  connections, and create memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              className="md:col-span-4 bg-white rounded-3xl p-8 flex flex-col justify-center border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#A259FF]">By the Numbers</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-[#39FF14]">4+</div>
                  <div className="text-[#666666]">Years of Experience</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-[#39FF14]">13+</div>
                  <div className="text-[#666666]">Destinations</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-[#39FF14]">100+</div>
                  <div className="text-[#666666]">Happy Travellers</div>
                </div>
              </div>
            </motion.div>

            {/* Quote card */}
            <motion.div
              className="md:col-span-4 bg-[#F3ECFF] rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden border border-[#A259FF]/20 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-10 -right-10 text-[200px] font-serif text-[#A259FF]/10">"</div>
              <p className="text-xl italic text-[#1C1C1C] mb-6 relative z-10">
                Wherever you go becomes a part of you somehow.
              </p>
              <p className="text-[#666666]">— Anita Desai</p>
            </motion.div>
          </div>

          {/* Our values section */}
          <div className="mb-24">
            <motion.h3
              className="text-3xl font-bold mb-12 text-center text-[#1C1C1C]"
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
                  className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 h-full shadow-lg"
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

          {/* Team section */}
          <div>
            <motion.div
              className="flex items-end justify-between mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#1C1C1C]">Meet Our Team</h3>
              <p className="text-[#666666] max-w-md">
                Our expert travel designers work closely with local partners to craft authentic, immersive experiences.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg text-center"
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
            </motion.div>

            {/* Join Our Team button - Removed */}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-[#F7F9FC]">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none mb-6 md:mb-8 text-[#1C1C1C]">
            Let's <span className="text-[#A259FF]">go</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto text-[#666666] px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your journey begins with a conversation. Tell us where you dream of going, and we'll make it extraordinary.
          </motion.p>
        </motion.div>

        <ScrollingGallery images={galleryImages} />
      </section>

      <BentoFooter />
    </main>
  )
}
