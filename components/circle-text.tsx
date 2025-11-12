"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface CircleTextProps {
  text: string
}

export default function CircleText({ text }: CircleTextProps) {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!circleRef.current) return

    const circle = circleRef.current
    const characters = text.split("")
    const angleStep = 360 / characters.length
    const radius = circle.offsetWidth / 2

    characters.forEach((char, i) => {
      const span = document.createElement("span")
      const angle = angleStep * i
      span.innerText = char
      span.style.position = "absolute"
      span.style.height = `${radius}px`
      span.style.transformOrigin = `0 0`
      span.style.width = "20px"
      span.style.left = "50%"
      span.style.top = "50%"
      span.style.transform = `rotate(${angle}deg) translateY(-${radius}px)`
      span.style.color = "white"
      span.style.fontWeight = "bold"
      span.style.textTransform = "uppercase"

      circle.appendChild(span)
    })

    return () => {
      while (circle.firstChild) {
        circle.removeChild(circle.firstChild)
      }
    }
  }, [text])

  return (
    <motion.div
      ref={circleRef}
      className="absolute bottom-20 right-20 w-32 h-32 mix-blend-difference z-20"
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}
