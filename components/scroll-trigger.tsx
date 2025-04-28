"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ScrollTriggerProps {
  children: React.ReactNode
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "scale"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollTriggerComponent({
  children,
  animation = "fadeUp",
  delay = 0, // Default delay reduced to 0 (was likely higher)
  duration = 0.6, // Reduced from 0.8 for faster animations
  threshold = 0.1, // Reduced from 0.2 to trigger earlier
  className = "",
  once = true,
}: ScrollTriggerProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!elementRef.current) return

    const element = elementRef.current
    let initialProps = {}
    let animatedProps = {}

    // Set initial and animated properties based on animation type
    switch (animation) {
      case "fadeUp":
        initialProps = { y: 30, opacity: 0 } // Reduced from 50 for less dramatic movement
        animatedProps = { y: 0, opacity: 1, duration, ease: "power2.out" } // Changed from power3 to power2 for faster easing
        break
      case "fadeIn":
        initialProps = { opacity: 0 }
        animatedProps = { opacity: 1, duration, ease: "power1.inOut" } // Changed to power1 for faster fade
        break
      case "slideIn":
        initialProps = { x: -30, opacity: 0 } // Reduced from -50 for less dramatic movement
        animatedProps = { x: 0, opacity: 1, duration, ease: "power2.out" } // Changed from back.out to power2 for faster animation
        break
      case "scale":
        initialProps = { scale: 0.9, opacity: 0 } // Changed from 0.8 for less dramatic scaling
        animatedProps = { scale: 1, opacity: 1, duration, ease: "power1.out" } // Changed to power1 for faster scaling
        break
      default:
        initialProps = { y: 20, opacity: 0 } // Reduced from 30 for less dramatic movement
        animatedProps = { y: 0, opacity: 1, duration, ease: "power1.out" } // Changed to power1 for faster animation
    }

    // Set initial state
    gsap.set(element, initialProps)

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top bottom-=${threshold * 100}%`, // This makes elements trigger earlier
      onEnter: () => {
        if (!isVisible || !once) {
          gsap.to(element, { ...animatedProps, delay })
          setIsVisible(true)
        }
      },
      onEnterBack: () => {
        if (!once) {
          gsap.to(element, { ...animatedProps, delay })
        }
      },
      onLeaveBack: () => {
        if (!once) {
          gsap.to(element, initialProps)
          setIsVisible(false)
        }
      },
      // Added markers for debugging (remove in production)
      // markers: true,
    })

    return () => {
      trigger.kill()
    }
  }, [animation, delay, duration, threshold, once, isVisible])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
