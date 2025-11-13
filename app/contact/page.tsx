"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#666666] hover:text-[#39FF14] transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#1C1C1C]">Get in Touch</h1>
            <p className="text-[#666666] text-lg max-w-2xl">
              Have questions about your next adventure? We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#A259FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Email</h3>
                      <a
                        href="mailto:enquiries@routetorecall.com"
                        className="text-[#666666] hover:text-[#39FF14] transition-colors"
                      >
                        enquiries@routetorecall.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#00C2FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Phone</h3>
                      <a href="tel:6363331334" className="text-[#666666] hover:text-[#39FF14] transition-colors">
                        6363331334
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#39FF14]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Office</h3>
                      <p className="text-[#666666]">
                        Route to Recall Private Limited
                        <br />
                        #50, Route to Recall Office
                        <br />
                        Green Valley Orchid, Udayamperoor
                        <br />
                        Ernakulam, Kerala 682307
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] rounded-2xl p-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-3">Office Hours</h3>
                <div className="space-y-2 text-[#666666]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]">Send us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    className="bg-[#39FF14]/10 border border-[#39FF14] rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#39FF14] flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Message Sent!</h3>
                    <p className="text-[#666666]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39FF14] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39FF14] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39FF14] transition-colors"
                          placeholder="6363331334"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39FF14] transition-colors"
                          placeholder="Trip inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39FF14] transition-colors resize-none"
                        placeholder="Tell us about your dream destination..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white font-bold py-6 transition-all"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
