"use client"

import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"

interface CardData {
  id: number
  title: string
  description: string
  image: string
  color: string
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Thailand",
    description: "Land of smiles with stunning temples and tropical beaches",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    color: "#E91E63",
  },
  {
    id: 2,
    title: "Singapore",
    description: "Modern city-state with diverse cultures and cuisines",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2352&auto=format&fit=crop",
    color: "#00BCD4",
  },
  {
    id: 3,
    title: "Malaysia",
    description: "Cultural melting pot with rainforests and islands",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2364&auto=format&fit=crop",
    color: "#9C27B0",
  },
  {
    id: 4,
    title: "Maldives",
    description: "Paradise of overwater bungalows and turquoise waters",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2365&auto=format&fit=crop",
    color: "#00BCD4",
  },
  {
    id: 5,
    title: "Bali",
    description: "Island of the Gods with lush jungles and pristine beaches",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    color: "#9C27B0",
  },
  {
    id: 6,
    title: "Sri Lanka",
    description: "Pearl of the Indian Ocean with ancient temples and wildlife",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    color: "#4CAF50",
  },
  {
    id: 7,
    title: "Nepal",
    description: "Home of the Himalayas and spiritual experiences",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2370&auto=format&fit=crop",
    color: "#F44336",
  },
  {
    id: 8,
    title: "Dubai",
    description: "Futuristic skylines and desert adventures",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    color: "#FF9800",
  },
]

/**
 * SLOTS: staircase fan configuration, matches reference exactly.
 * r  = rotateZ degrees (alternating ±)
 * y  = upward lift in px (staircase, negative = up)
 * s  = scale
 * o  = opacity
 * b  = brightness %
 * z  = z-index
 */
const SLOTS = [
  { r: 0,   y: 0,   s: 1.00, o: 1.00, b: 100, z: 100 },
  { r: -4,  y: -18, s: 0.96, o: 0.70, b: 95,  z: 80  },
  { r: 4,   y: -36, s: 0.92, o: 0.45, b: 90,  z: 60  },
  { r: -8,  y: -54, s: 0.88, o: 0.25, b: 85,  z: 40  },
  { r: 8,   y: -72, s: 0.84, o: 0.10, b: 80,  z: 20  },
  { r: -12, y: -90, s: 0.80, o: 0.05, b: 75,  z: 10  },
  { r: 12,  y: -108, s: 0.76, o: 0.03, b: 72, z: 5   },
  { r: -14, y: -126, s: 0.72, o: 0.02, b: 70, z: 2   },
]

function getElastic(val: number) {
  const abs = Math.abs(val)
  if (abs < 50) return val
  return Math.sign(val) * (50 + (abs - 50) * 0.45)
}

export default function DraggableCardStack() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cardElsRef = useRef<Record<number, HTMLDivElement | null>>({})
  const orderRef = useRef<number[]>(cardData.map((_, i) => i))

  const isDraggingRef = useRef(false)
  const currentPosRef = useRef({ x: 0, y: 0 })
  const startPosRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const lastPosRef = useRef({ x: 0, y: 0 })
  const lastTimeRef = useRef(0)
  const rafIdRef = useRef<number | null>(null)

  const updateUI = useCallback((transitionOverride?: string) => {
    const order = orderRef.current
    const ex = getElastic(currentPosRef.current.x)
    const ey = getElastic(currentPosRef.current.y)
    const dragDist = Math.sqrt(ex * ex + ey * ey)
    const dragProg = Math.min(dragDist / 150, 1)

    order.forEach((cardIdx, pos) => {
      const el = cardElsRef.current[cardIdx]
      if (!el) return

      // Transition
      if (transitionOverride) {
        el.style.transition = `transform ${transitionOverride}, opacity ${transitionOverride}, filter ${transitionOverride}, box-shadow ${transitionOverride}`
      } else {
        el.style.transition = isDraggingRef.current
          ? "none"
          : "transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease, box-shadow 0.6s ease"
      }

      const slotIndex = Math.min(pos, SLOTS.length - 1)
      const slot = SLOTS[slotIndex]

      if (pos === 0) {
        el.style.zIndex = "1000"
        const rZ = ex * 0.04
        const rX = -ey * 0.06
        const rY = ex * 0.06
        el.style.transform = `translate3d(${ex}px, ${ey}px, 0) rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${rZ}deg) scale(1.02)`
        el.style.opacity = "1"
        el.style.filter = "brightness(100%)"
        el.style.boxShadow = `0 ${15 + dragProg * 20}px ${30 + dragProg * 30}px rgba(0,0,0,${(0.12 + dragProg * 0.06).toFixed(3)})`
      } else {
        const spreadFactor = 1 + dragProg * 0.3
        const rotation = slot.r * spreadFactor
        const translateY = slot.y + ey * 0.03
        el.style.zIndex = String(slot.z)
        el.style.transform = `translate3d(0, ${translateY}px, 0) rotateZ(${rotation}deg) scale(${slot.s})`
        el.style.opacity = String(slot.o)
        el.style.filter = `brightness(${slot.b}%)`
        el.style.boxShadow = `0 4px 15px rgba(0,0,0,${(slot.o * 0.05).toFixed(3)})`
      }
    })
  }, [])

  const handleRelease = useCallback(() => {
    const { x, y } = currentPosRef.current
    const dist = Math.sqrt(x * x + y * y)
    const vel = velocityRef.current
    const velMag = Math.sqrt(vel.x * vel.x + vel.y * vel.y)

    if (dist > 110 || velMag > 1.2) {
      const movedId = orderRef.current.shift()!
      orderRef.current.push(movedId)

      const duration = Math.min(Math.max(0.45, velMag * 0.2), 0.85)
      const timing = "cubic-bezier(0.15, 0, 0.15, 1)"

      const el = cardElsRef.current[movedId]
      if (el) el.style.zIndex = "0"

      currentPosRef.current = { x: 0, y: 0 }
      updateUI(`${duration}s ${timing}`)
    } else {
      currentPosRef.current = { x: 0, y: 0 }
      updateUI("0.7s cubic-bezier(0.34, 1.56, 0.64, 1)")
    }
    velocityRef.current = { x: 0, y: 0 }
  }, [updateUI])

  // Pointer event handlers attached imperatively to avoid React synthetic event overhead
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const onPointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true
      startPosRef.current = {
        x: e.clientX - currentPosRef.current.x,
        y: e.clientY - currentPosRef.current.y,
      }
      lastPosRef.current = { x: e.clientX, y: e.clientY }
      lastTimeRef.current = Date.now()
      stage.setPointerCapture(e.pointerId)
      updateUI()
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return
      const now = Date.now()
      const dt = Math.max(now - lastTimeRef.current, 1)
      velocityRef.current.x = (e.clientX - lastPosRef.current.x) / dt
      velocityRef.current.y = (e.clientY - lastPosRef.current.y) / dt
      currentPosRef.current.x = e.clientX - startPosRef.current.x
      currentPosRef.current.y = e.clientY - startPosRef.current.y
      lastPosRef.current = { x: e.clientX, y: e.clientY }
      lastTimeRef.current = now

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = requestAnimationFrame(() => updateUI())
    }

    const onPointerUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      handleRelease()
    }

    stage.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    // Initial render
    updateUI()

    return () => {
      stage.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }
  }, [updateUI, handleRelease])

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full select-none">
      {/* Stage */}
      <div
        ref={stageRef}
        className="relative touch-none"
        style={{
          width: 350,
          height: 525,
          perspective: 1500,
          marginBottom: 32,
          cursor: "grab",
        }}
      >
        {cardData.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => { cardElsRef.current[idx] = el }}
            className="absolute inset-0 rounded-[28px] overflow-hidden"
            style={{
              transformOrigin: "50% 100%",
              willChange: "transform, opacity, filter",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {/* Image (top 65%) */}
            <div className="relative w-full" style={{ height: "65%" }}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                draggable={false}
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            </div>

            {/* Text (bottom 35%) */}
            <div
              className="flex flex-col justify-center px-5 py-4 bg-white"
              style={{ height: "35%" }}
            >
              <h3
                className="font-bold text-lg leading-tight mb-1"
                style={{ color: "#1C1C1C" }}
              >
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
