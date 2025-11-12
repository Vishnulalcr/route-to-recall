"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GlitchImageProps {
  src: string
  alt: string
  className?: string
}

export default function GlitchImage({ src, alt, className = "" }: GlitchImageProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch effect
    setIsGlitching(true)
    const timeout = setTimeout(() => setIsGlitching(false), 1000)

    // Random glitch effects
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300)
      }
    }, 4000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative w-full h-full">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />

        {isGlitching && (
          <>
            <div
              className="absolute inset-0 bg-[#FF00FF] mix-blend-screen opacity-30"
              style={{
                clipPath: "polygon(0 15%, 100% 15%, 100% 40%, 0 40%)",
                transform: "translateX(10px)",
              }}
            />
            <div
              className="absolute inset-0 bg-[#00FFFF] mix-blend-screen opacity-30"
              style={{
                clipPath: "polygon(0 65%, 100% 65%, 100% 90%, 0 90%)",
                transform: "translateX(-10px)",
              }}
            />
            <div className="absolute inset-0 bg-white mix-blend-overlay opacity-10" />
          </>
        )}
      </div>
    </div>
  )
}
