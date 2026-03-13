"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"
import Image from "next/image"

export default function BentoNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* Floating pill navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="w-full bg-white/95 backdrop-blur-md rounded-full shadow-sm shadow-black/6 border border-black/6 px-5 py-2.5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo-black.png" alt="Route to Recall" width={110} height={36} className="h-8 w-auto" />
          </Link>

          {/* Center nav links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-4 py-1.5 text-sm font-medium text-[#1C1C1C]/60 hover:text-[#1C1C1C] hover:bg-black/5 rounded-full transition-all duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 bg-[#1C1C1C] text-white text-sm font-medium rounded-full hover:bg-[#A259FF] transition-all duration-300"
            >
              Plan Your Trip
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-[#1C1C1C] rounded-full" />
              <span className="block w-4 h-0.5 bg-[#1C1C1C] rounded-full" />
              <span className="block w-5 h-0.5 bg-[#1C1C1C] rounded-full" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src="/logo-black.png" alt="Route to Recall" width={120} height={40} className="h-10 w-auto" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[#1C1C1C]" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
              <nav className="space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className="block text-5xl font-black font-serif text-[#1C1C1C] hover:text-[#A259FF] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="container mx-auto px-6 py-6 flex justify-center">
              <a
                href="https://www.instagram.com/routetorecall/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#A259FF] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
