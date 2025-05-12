"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface GridLightEffectsProps {
  gridSize?: number
  density?: number
  color?: string
  speed?: number
}

export function GridLightEffects({
  gridSize = 50, // Match the grid size in globals.css
  density = 0.03, // How many lights are active at once (percentage)
  color = "rgba(168, 85, 247, 0.6)", // Purple color matching the theme
  speed = 1.5, // Animation speed multiplier
}: GridLightEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = window.innerWidth
    const containerHeight = window.innerHeight

    // Calculate grid dimensions
    const cols = Math.ceil(containerWidth / gridSize) + 1
    const rows = Math.ceil(containerHeight / gridSize) + 1

    // Clear any existing lights
    container.innerHTML = ""

    // Create light elements
    const lights: HTMLDivElement[] = []
    const totalLights = Math.floor(cols * rows * density)

    for (let i = 0; i < totalLights; i++) {
      const light = document.createElement("div")
      light.className = "absolute w-1 h-1 rounded-full opacity-0"
      light.style.backgroundColor = color
      light.style.boxShadow = `0 0 6px 2px ${color}`
      container.appendChild(light)
      lights.push(light)
    }

    // Function to animate a single light
    const animateLight = (light: HTMLDivElement) => {
      // Randomly position at a grid intersection
      const col = Math.floor(Math.random() * cols)
      const row = Math.floor(Math.random() * rows)
      const x = col * gridSize
      const y = row * gridSize

      // Randomly choose horizontal or vertical movement
      const isHorizontal = Math.random() > 0.5

      // Set initial position
      gsap.set(light, {
        x: x,
        y: y,
        opacity: 0,
        scale: 0.8,
      })

      // Create timeline for this light
      const tl = gsap.timeline({
        onComplete: () => {
          // When animation completes, set up for next animation after random delay
          setTimeout(
            () => {
              if (container.contains(light)) {
                animateLight(light)
              }
            },
            Math.random() * 5000 + 2000,
          ) // Random delay between 2-7 seconds
        },
      })

      // Animate the light
      tl.to(light, {
        opacity: 0.8,
        scale: 1,
        duration: 0.4 * speed,
        ease: "power2.out",
      })

      if (isHorizontal) {
        // Horizontal movement
        const distance =
          Math.random() > 0.5
            ? (Math.floor(Math.random() * 3) + 1) * gridSize
            : -(Math.floor(Math.random() * 3) + 1) * gridSize

        tl.to(light, {
          x: x + distance,
          duration: (Math.abs(distance) / gridSize) * speed,
          ease: "none",
        })
      } else {
        // Vertical movement
        const distance =
          Math.random() > 0.5
            ? (Math.floor(Math.random() * 3) + 1) * gridSize
            : -(Math.floor(Math.random() * 3) + 1) * gridSize

        tl.to(light, {
          y: y + distance,
          duration: (Math.abs(distance) / gridSize) * speed,
          ease: "none",
        })
      }

      tl.to(light, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4 * speed,
        ease: "power2.in",
      })
    }

    // Start initial animations with staggered timing
    lights.forEach((light, index) => {
      setTimeout(() => {
        animateLight(light)
      }, index * 500) // Stagger the start times
    })

    // Handle window resize
    const handleResize = () => {
      // Clear and reinitialize on significant size changes
      if (Math.abs(window.innerWidth - containerWidth) > 100 || Math.abs(window.innerHeight - containerHeight) > 100) {
        gsap.killTweensOf(lights)
        container.innerHTML = ""
        // We'll let the cleanup function handle this and the component will re-render
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      gsap.killTweensOf(lights)
    }
  }, [gridSize, density, color, speed])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}

