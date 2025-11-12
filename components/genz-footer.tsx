"use client"

import Link from "next/link"
import { Instagram, Twitter, TwitterIcon as TikTok, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GenZFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6">Route to Recall</h2>
            <p className="text-white/60 mb-8 max-w-md">
              We create travel experiences for Gen Z that are authentic, sustainable, and totally worth posting about.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black border border-white/20 hover:border-white transition-colors"
              >
                <TikTok className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  About
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Careers
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Partners
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Sustainability
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Blog
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Travel Guides
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  Community
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                >
                  FAQs
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Stay in the loop</h3>
            <p className="text-white/60 mb-4">Get travel inspo, deals, and more straight to your inbox.</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-l-full px-4 py-2 focus:outline-none focus:border-white/40 w-full"
              />
              <Button className="bg-white hover:bg-white/90 text-black rounded-r-full">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <p className="text-white/40 text-sm mt-3">By subscribing, you agree to our privacy policy.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 mb-4 md:mb-0">&copy; {currentYear} Route to Recall. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
