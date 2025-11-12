"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function FreshNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "Journal", path: "/journal" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <Image src="/logo-black.png" alt="Route to Recall" width={120} height={40} className="h-10 w-auto" />
          </Link>

          <button onClick={() => setIsOpen(true)} className="text-white" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#FFFAF0] flex flex-col"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="text-[#1A1A1A] text-2xl font-bold">
                WANDER
              </Link>

              <button onClick={() => setIsOpen(false)} className="text-[#1A1A1A]" aria-label="Close menu">
                <X className="h-6 w-6" />
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
                      className="text-[#1A1A1A] text-5xl font-bold hover:text-[#1A1A1A]/70 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-[#1A1A1A]/70 hover:text-[#1A1A1A]">
                  Instagram
                </a>
                <a href="#" className="text-[#1A1A1A]/70 hover:text-[#1A1A1A]">
                  Twitter
                </a>
                <a href="#" className="text-[#1A1A1A]/70 hover:text-[#1A1A1A]">
                  Pinterest
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
