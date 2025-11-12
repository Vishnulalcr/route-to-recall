"use client"

import { useEffect, type RefObject } from "react"
import type { MotionValue } from "framer-motion"

export function useMousePosition(
  ref: RefObject<HTMLElement>,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>,
) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        // Calculate mouse position relative to the center of the container
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY, ref])
}
