"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Share2, MapPin } from "lucide-react"

interface Item {
  id: number
  name: string
  location: string
  image: string
  color: string
  emoji: string
  tags: string[]
  likes: number
}

interface HorizontalScrollProps {
  items: Item[]
}

export default function HorizontalScroll({ items }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      container.scrollLeft += e.deltaY
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-8"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-[300px] group relative cursor-pointer snap-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-[3/4] relative">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center text-lg border border-white/20">
                {item.emoji}
              </div>
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-xs font-medium uppercase tracking-wider border border-white/20">
                Trending
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <motion.button
                className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="h-4 w-4" />
              </motion.button>
              <motion.button
                className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1 mb-2">
                <MapPin className="h-4 w-4 text-white/70" />
                <span className="text-white/70 text-sm">{item.location}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-xs border border-white/20"
                    style={{ backgroundColor: `${item.color}30` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 border-2 border-[#0F0F0F] overflow-hidden">
                        <Image
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="User"
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-white/70 text-xs">+2.4k travelers</span>
                </div>

                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3 text-[#FF00FF] fill-[#FF00FF]" />
                  <span className="text-white/70 text-sm">{item.likes}k</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
