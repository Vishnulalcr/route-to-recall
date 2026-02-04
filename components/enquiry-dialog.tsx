"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Calendar, Users, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnquiryDialogProps {
  isOpen: boolean
  onClose: () => void
  experienceName?: string
}

export default function EnquiryDialog({ isOpen, onClose, experienceName = "" }: EnquiryDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: experienceName,
    travelers: "1",
    dates: "",
    message: "",
    website: "", // Honeypot field
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      setSubmitStatus({ type: 'success', message: 'Thank you for your enquiry!' })
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: experienceName,
          travelers: "1",
          dates: "",
          message: "",
          website: "",
        })
        // Close dialog after 2 seconds on success
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-[#0F172A] p-6 md:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send Enquiry</h2>
                <p className="text-white/70">Fill in your details and we'll get back to you soon</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                {/* Honeypot field - hidden from users but visible to bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="enquiry-website">Website</label>
                  <input
                    type="text"
                    id="enquiry-website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    Destination *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                      placeholder="Where would you like to go?"
                    />
                  </div>
                </div>

                {/* Grid for Travelers and Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Number of Travelers */}
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="1">1 traveler</option>
                        <option value="2">2 travelers</option>
                        <option value="3">3 travelers</option>
                        <option value="4">4 travelers</option>
                        <option value="5+">5+ travelers</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Dates */}
                  <div>
                    <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Dates
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        value={formData.dates}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all"
                        placeholder="e.g., June 2025"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your travel plans..."
                    />
                  </div>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={onClose}
                    variant="outline"
                    disabled={isSubmitting}
                    className="flex-1 py-6 rounded-lg border-2 border-gray-300 hover:bg-gray-50 bg-transparent disabled:opacity-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-6 rounded-lg bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
