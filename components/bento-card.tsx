"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Stat {
  value: string
  label: string
}

interface BentoCardProps {
  className?: string
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  description?: string
  color?: string
  textColor?: string
  icon?: ReactNode
  link?: string
  linkText?: string
  stats?: Stat[]
  priority?: boolean
}

export default function BentoCard({
  className = "",
  image,
  imageAlt = "Card image",
  title,
  subtitle,
  description,
  color = "#39FF14",
  textColor = "text-[#1C1C1C]",
  icon,
  link,
  linkText = "Explore",
  stats,
  priority = false,
}: BentoCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-md border border-gray-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 15px ${color}30`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority={priority} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/50 to-transparent" />
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 p-6 md:p-8 h-full flex flex-col ${image ? "justify-end" : "justify-between"}`}>
        {/* Icon */}
        {icon && !image && (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}60` }}
          >
            <div className="text-white">{icon}</div>
          </div>
        )}

        {/* Title and Subtitle */}
        <div>
          {subtitle && (
            <p className={`${image ? "text-white/80" : `${textColor}/80`} text-sm font-medium mb-1`}>{subtitle}</p>
          )}

          {title && (
            <h3
              className={`text-xl md:text-2xl font-bold mb-3 ${image ? "text-white" : textColor}`}
              style={{ color: image ? "white" : color }}
            >
              {title}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className={`${image ? "text-white/80" : `${textColor}/80`} text-sm md:text-base mb-6 line-clamp-3`}>
              {description}
            </p>
          )}

          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className={`text-xl md:text-2xl font-bold ${textColor}`}>{stat.value}</p>
                  <p className={`text-xs ${textColor}/80`}>{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Link */}
        {link && (
          <div className="mt-auto pt-4">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="group">
              <Link
                href={link}
                className={`inline-flex items-center text-sm font-medium ${image ? "text-[#39FF14]" : color} hover:opacity-90 transition-opacity`}
              >
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
