"use client"

import Link from "next/link"
import { Instagram, Twitter, TwitterIcon as TikTok, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LightFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-20 pb-10 px-4 border-t border-[#1A1A2E]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-[#1A1A2E] bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#4D96FF] to-[#6BCB77]">
              <Image src="/logo-black.png" alt="Route to Recall" width={150} height={50} className="h-12 w-auto" />
            </h2>
            <p className="text-[#1A1A2E]/60 mb-8 max-w-md">
              We create travel experiences for Gen Z that are authentic, sustainable, and totally worth posting about.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-[#F9F5FF] rounded-full flex items-center justify-center hover:bg-[#FF6B6B] hover:text-white transition-colors shadow-sm"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#F9F5FF] rounded-full flex items-center justify-center hover:bg-[#4D96FF] hover:text-white transition-colors shadow-sm"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#F9F5FF] rounded-full flex items-center justify-center hover:bg-[#1A1A2E] hover:text-white transition-colors shadow-sm"
              >
                <TikTok className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#F9F5FF] rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors shadow-sm"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight text-[#1A1A2E]">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  About
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Careers
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Partners
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Sustainability
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight text-[#1A1A2E]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Blog
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Travel Guides
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  Community
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors inline-flex items-center group"
                >
                  FAQs
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight text-[#1A1A2E]">Stay in the loop</h3>
            <p className="text-[#1A1A2E]/60 mb-4">Get travel inspo, deals, and more straight to your inbox.</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#F9F5FF] rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D96FF] w-full"
              />
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white rounded-r-full">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <p className="text-[#1A1A2E]/40 text-sm mt-3">By subscribing, you agree to our privacy policy.</p>
          </div>
        </div>

        <div className="border-t border-[#1A1A2E]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#1A1A2E]/40 mb-4 md:mb-0">&copy; {currentYear} Route to Recall. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="text-[#1A1A2E]/40 hover:text-[#1A1A2E] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#1A1A2E]/40 hover:text-[#1A1A2E] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#1A1A2E]/40 hover:text-[#1A1A2E] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
