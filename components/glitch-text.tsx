"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch effect
    setIsGlitching(true)
    const timeout = setTimeout(() => setIsGlitching(false), 2000)

    // Random glitch effects
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 500)
      }
    }, 3000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {text}

        {isGlitching && (
          <>
            <div
              className="absolute top-0 left-0 w-full h-full text-[#FF00FF] opacity-80"
              style={{
                clipPath: "polygon(0 15%, 100% 15%, 100% 40%, 0 40%)",
                transform: "translate(5px, 0)",
              }}
            >
              {text}
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full text-[#00FFFF] opacity-80"
              style={{
                clipPath: "polygon(0 65%, 100% 65%, 100% 90%, 0 90%)",
                transform: "translate(-5px, 0)",
              }}
            >
              {text}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
