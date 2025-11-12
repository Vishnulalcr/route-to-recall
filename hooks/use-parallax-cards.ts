"use client"

import { useTransform, type MotionValue } from "framer-motion"

export function useParallaxCards(
  index: number,
  totalCards: number,
  scrollY: MotionValue<number>,
  baseY: MotionValue<number>,
) {
  // Calculate parallax factor - furthest card moves fastest
  const parallaxFactor = ((totalCards - index) / totalCards) * 1.5

  // Transform scroll position to parallax offset
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -150 * parallaxFactor])

  // Combine base position with parallax offset
  const combinedY = useTransform([baseY, parallaxY], ([baseValue, parallaxValue]) => baseValue + parallaxValue)

  return { combinedY }
}
