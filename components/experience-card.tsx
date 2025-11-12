"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Plus, X } from "lucide-react"

interface ExperienceCardProps {
  experience: {
    id: number
    title: string
    location: string
    description: string
    image: string
    color: string
  }
  isActive: boolean
  onToggle: () => void
}

export default function ExperienceCard({ experience, isActive, onToggle }: ExperienceCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden"
      layout
      initial={{ borderRadius: 0 }}
      animate={{
        height: isActive ? 500 : 300,
        borderRadius: 0,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0">
        <Image src={experience.image || "/placeholder.svg"} alt={experience.title} fill className="object-cover" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundColor: experience.color }} />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <motion.h3 className="text-3xl font-bold text-white mb-2" layout="position">
            {experience.title}
          </motion.h3>
          <p className="text-white/80 text-sm">{experience.location}</p>
        </div>

        <motion.button
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
          onClick={onToggle}
          layout="position"
        >
          {isActive ? (
            <X className="h-5 w-5" style={{ color: experience.color }} />
          ) : (
            <Plus className="h-5 w-5" style={{ color: experience.color }} />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 p-6 pt-24 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-lg">{experience.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
