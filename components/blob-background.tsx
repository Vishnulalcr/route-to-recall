"use client"

import { useEffect, useRef } from "react"

export default function BlobBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Blob class
    class Blob {
      x: number
      y: number
      radius: number
      color: string
      xSpeed: number
      ySpeed: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xSpeed = (Math.random() - 0.5) * 0.5
        this.ySpeed = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.xSpeed
        this.y += this.ySpeed

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.xSpeed *= -1
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.ySpeed *= -1
        }
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create blobs
    const blobs = [
      new Blob(canvas.width * 0.2, canvas.height * 0.3, 300, "rgba(255, 107, 107, 0.1)"),
      new Blob(canvas.width * 0.7, canvas.height * 0.5, 250, "rgba(77, 150, 255, 0.1)"),
      new Blob(canvas.width * 0.5, canvas.height * 0.7, 200, "rgba(107, 203, 119, 0.1)"),
      new Blob(canvas.width * 0.8, canvas.height * 0.2, 180, "rgba(255, 217, 61, 0.1)"),
    ]

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.update()
        blob.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
}
