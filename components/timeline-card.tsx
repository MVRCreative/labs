"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "./split-text"

interface TimelineStep {
  week: string
  tasks: string[]
}

interface TimelineCardProps {
  title: string
  steps: TimelineStep[]
  color: "yellow" | "green" | "red"
  index: number
}

export function TimelineCard({ title, steps, color, index }: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    if (!cardRef.current) return

    // Animate card entrance with a stagger based on index
    gsap.fromTo(
      cardRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      },
    )
  }, [index])

  const getColorClass = () => {
    switch (color) {
      case "yellow":
        return "text-yellow-500"
      case "green":
        return "text-green-500"
      case "red":
        return "text-red-500"
      default:
        return "text-orange-400"
    }
  }

  const getBgColorClass = () => {
    switch (color) {
      case "yellow":
        return "bg-yellow-500/10"
      case "green":
        return "bg-green-500/10"
      case "red":
        return "bg-red-500/10"
      default:
        return "bg-orange-500/10"
    }
  }

  return (
    <div ref={cardRef} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`size-3 rounded-full ${color === "yellow" ? "bg-yellow-500" : color === "green" ? "bg-green-500" : "bg-red-500"}`}
        ></div>
        <h3 className="text-xl font-light">
          <SplitText type="words" animation="fadeUp" stagger={0.05}>
            {title}
          </SplitText>
        </h3>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="bg-zinc-800/30 rounded-lg p-4">
            <div className={`text-sm font-mono mb-3 ${getColorClass()}`}>{step.week}</div>
            <ul className="space-y-2">
              {step.tasks.map((task, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div
                    className={`size-1.5 rounded-full ${color === "yellow" ? "bg-yellow-500" : color === "green" ? "bg-green-500" : "bg-red-500"} mt-1.5`}
                  ></div>
                  <span className="text-zinc-400 text-sm">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
