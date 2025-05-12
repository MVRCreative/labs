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
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
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
        initialProps = { y: 50, opacity: 0 }
        animatedProps = { y: 0, opacity: 1, duration, ease: "power3.out" }
        break
      case "fadeIn":
        initialProps = { opacity: 0 }
        animatedProps = { opacity: 1, duration, ease: "power2.inOut" }
        break
      case "slideIn":
        initialProps = { x: -50, opacity: 0 }
        animatedProps = { x: 0, opacity: 1, duration, ease: "back.out(1.7)" }
        break
      case "scale":
        initialProps = { scale: 0.8, opacity: 0 }
        animatedProps = { scale: 1, opacity: 1, duration, ease: "power2.out" }
        break
      default:
        initialProps = { y: 30, opacity: 0 }
        animatedProps = { y: 0, opacity: 1, duration, ease: "power2.out" }
    }

    // Set initial state
    gsap.set(element, initialProps)

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top bottom-=${threshold * 100}%`,
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
