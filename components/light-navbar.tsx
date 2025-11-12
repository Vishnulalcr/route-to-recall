"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LightNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-md" : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md bg-gradient-to-r from-[#FF6B6B] to-[#4D96FF]">
              <Image src="/logo-black.png" alt="Route to Recall" width={40} height={40} className="object-contain" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-[#1A1A2E]">Route to Recall</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
                Destinations
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Asia
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Europe
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  South America
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Africa
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
                Experiences
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Adventure
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Cultural
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Food & Drink
                </Link>
                <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-[#F9F5FF] transition-colors">
                  Wellness
                </Link>
              </div>
            </div>

            <Link href="#" className="text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
              Community
            </Link>

            <Link href="#" className="text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-[#1A1A2E]/80 hover:text-[#1A1A2E] transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white rounded-full shadow-md">Sign Up</Button>
          </div>

          <button className="md:hidden text-[#1A1A2E]" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-[#1A1A2E]" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              <Link href="#" className="text-2xl font-bold text-[#1A1A2E]" onClick={() => setIsOpen(false)}>
                Destinations
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#1A1A2E]" onClick={() => setIsOpen(false)}>
                Experiences
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#1A1A2E]" onClick={() => setIsOpen(false)}>
                Community
              </Link>
              <Link href="#" className="text-2xl font-bold text-[#1A1A2E]" onClick={() => setIsOpen(false)}>
                About
              </Link>

              <div className="mt-8">
                <Button
                  className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white rounded-full px-8 py-2 text-lg shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
