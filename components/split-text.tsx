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
  animation = "topDown", // Changed from 'fadeUp' to 'topDown'
  delay = 0,
  stagger = 0.03, // Faster stagger (was 0.05)
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
      // Simple line splitting - for more accurate line splitting,
      // you would need a more complex approach
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

    // Different animation types
    switch (animation) {
      case "fadeUp":
        tl.fromTo(
          targets,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.5, // Faster duration (was 0.8)
            ease: "power2.out", // Faster easing
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
            duration: 0.3, // Faster duration (was 0.5)
            ease: "power1.out", // Faster easing
          },
        )
        break
      case "slideIn":
        tl.fromTo(
          targets,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger,
            duration: 0.4, // Faster duration (was 0.6)
            ease: "power1.out", // Faster easing (was back.out)
          },
        )
        break
      case "random":
        // Random animations for each element
        Array.from(targets).forEach((target, i) => {
          const randomY = Math.random() * 30 - 15 // Smaller random values
          const randomDelay = Math.random() * 0.3 // Shorter random delay
          const randomDuration = 0.3 + Math.random() * 0.3 // Faster random duration

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
              ease: "power2.out",
            },
            delay + randomDelay + i * stagger,
          )
        })
        break
      // Add new top-to-bottom and bottom-to-top animations
      case "topDown":
        tl.fromTo(
          targets,
          { y: -15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.4,
            ease: "power2.out",
          },
        )
        break
      case "bottomUp":
        tl.fromTo(
          targets,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.4,
            ease: "power2.out",
          },
        )
        break
      default:
        // Make the default animation a top-down stagger
        tl.fromTo(
          targets,
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.4,
            ease: "power2.out",
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

