"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import type { JSX } from "react"

interface SplitTextProps {
  children: string
  className?: string
  type?: "chars" | "words" | "lines"
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "random" | "topDown" | "bottomUp"
  delay?: number
  stagger?: number
  tag?: keyof JSX.IntrinsicElements
  onComplete?: () => void
}

export function SplitText({
  children,
  className = "",
  type = "words",
  animation = "topDown",
  delay = 0, // Reduced default delay to 0
  stagger = 0.02, // Reduced from 0.03 for faster staggering
  tag: Tag = "div",
  onComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<JSX.Element[]>([])
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Split the text based on the type
    const text = children.toString()
    let splitElements: JSX.Element[] = []

    if (type === "chars") {
      splitElements = text.split("").map((char, index) => (
        <span
          key={`char-${index}`}
          className="inline-block opacity-0"
          style={{
            display: char === " " ? "inline" : "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    } else if (type === "words") {
      splitElements = text.split(" ").map((word, index) => (
        <span key={`word-${index}`} className="inline-block opacity-0 mr-[0.25em]">
          {word}
        </span>
      ))
    } else if (type === "lines") {
      splitElements = text.split("\n").map((line, index) => (
        <div key={`line-${index}`} className="block opacity-0">
          {line}
        </div>
      ))
    }

    setElements(splitElements)
  }, [children, type])

  useEffect(() => {
    if (!containerRef.current || elements.length === 0 || isAnimated) return

    const targets = containerRef.current.children
    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        setIsAnimated(true)
        if (onComplete) onComplete()
      },
    })

    // Different animation types with optimized values
    switch (animation) {
      case "fadeUp":
        tl.fromTo(
          targets,
          { y: 15, opacity: 0 }, // Reduced from 20 for less dramatic movement
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.4, // Reduced from 0.5 for faster animation
            ease: "power1.out", // Changed to power1 for faster easing
          },
        )
        break
      case "fadeIn":
        tl.fromTo(
          targets,
          { opacity: 0 },
          {
            opacity: 1,
            stagger,
            duration: 0.25, // Reduced from 0.3 for faster animation
            ease: "power1.out",
          },
        )
        break
      case "slideIn":
        tl.fromTo(
          targets,
          { x: -15, opacity: 0 }, // Reduced from -20 for less dramatic movement
          {
            x: 0,
            opacity: 1,
            stagger,
            duration: 0.3, // Reduced from 0.4 for faster animation
            ease: "power1.out",
          },
        )
        break
      case "random":
        // Random animations with reduced values for faster animation
        Array.from(targets).forEach((target, i) => {
          const randomY = Math.random() * 20 - 10 // Reduced from 30-15 for less dramatic movement
          const randomDelay = Math.random() * 0.2 // Reduced from 0.3 for faster animation
          const randomDuration = 0.2 + Math.random() * 0.2 // Reduced from 0.3+0.3 for faster animation

          tl.fromTo(
            target,
            {
              y: randomY,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: randomDuration,
              ease: "power1.out", // Changed to power1 for faster easing
            },
            delay + randomDelay + i * stagger,
          )
        })
        break
      case "topDown":
        tl.fromTo(
          targets,
          { y: -10, opacity: 0 }, // Reduced from -15 for less dramatic movement
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.3, // Reduced from 0.4 for faster animation
            ease: "power1.out", // Changed to power1 for faster easing
          },
        )
        break
      case "bottomUp":
        tl.fromTo(
          targets,
          { y: 10, opacity: 0 }, // Reduced from 15 for less dramatic movement
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.3, // Reduced from 0.4 for faster animation
            ease: "power1.out", // Changed to power1 for faster easing
          },
        )
        break
      default:
        tl.fromTo(
          targets,
          { y: -8, opacity: 0 }, // Reduced from -10 for less dramatic movement
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.3, // Reduced from 0.4 for faster animation
            ease: "power1.out", // Changed to power1 for faster easing
          },
        )
    }

    return () => {
      tl.kill()
    }
  }, [elements, animation, delay, stagger, isAnimated, onComplete])

  return (
    <Tag ref={containerRef} className={className}>
      {elements}
    </Tag>
  )
}
