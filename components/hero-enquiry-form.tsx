"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Loader2 } from "lucide-react"

interface HeroEnquiryFormProps {
  isOpen: boolean
  formOpacity: any
  formY: any
}

export default function HeroEnquiryForm({ isOpen, formOpacity, formY }: HeroEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    website: "", // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      return
    }
    
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'quick-contact',
          ...formData,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", destination: "", website: "" })
        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="w-full border-t border-white/20 pt-4 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center justify-center gap-3 py-4">
          <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center">
            <Check className="h-5 w-5 text-[#1C1C1C]" />
          </div>
          <p className="text-white text-lg">Thank you! We'll get back to you within 24 hours.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`w-full border-t border-white/20 pt-4 px-4 md:px-8 lg:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${
        isOpen ? "grid" : "hidden"
      } md:grid`}
      initial={false}
      animate={{ opacity: 1 }}
    >
      {/* Honeypot field - hidden from users but visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hero-website">Website</label>
        <input
          type="text"
          id="hero-website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      
      {error && (
        <div className="col-span-full text-red-400 text-sm mb-2 text-center">
          {error}
        </div>
      )}
      <div className="sm:col-span-1 lg:col-span-1">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
          required
        />
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
          required
        />
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
          required
        />
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <div className="flex items-center">
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#39FF14] focus:outline-none text-white placeholder:text-white/60 transition-all text-sm md:text-base"
            required
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="ml-2 text-white hover:text-[#39FF14] transition-all flex-shrink-0 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 md:h-5 md:w-5 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </button>
        </div>
      </div>
    </motion.form>
  )
}
