"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "./split-text"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface TimelineItem {
  week: string
  task: string
}

interface PlanCardProps {
  title: string
  price: string
  description: string
  features: string[]
  icon: React.ReactNode
  index: number
  highlighted?: boolean
  timeline?: TimelineItem[]
}

export function PlanCard({
  title,
  price,
  description,
  features,
  icon,
  index,
  highlighted = false,
  timeline,
}: PlanCardProps) {
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

  return (
    <div
      ref={cardRef}
      className={`${
        highlighted ? "bg-zinc-800/70 border-orange-500/30" : "bg-zinc-900/50 border-zinc-800/50"
      } rounded-xl p-6 border backdrop-blur-sm relative overflow-hidden`}
    >
      {highlighted && <div className="absolute -top-6 -right-6 size-24 bg-orange-500/10 rounded-full blur-xl"></div>}

      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
        {icon}
      </div>

      <div className="flex items-end gap-2 mb-2">
        <h3 className="text-xl font-light">
          <SplitText type="chars" animation="fadeUp" stagger={0.02} delay={0.2 * index + 0.3}>
            {title}
          </SplitText>
        </h3>
      </div>

      <div className="mb-4">
        <span className="text-2xl font-light text-orange-400">{price}</span>
        <span className="text-zinc-500 text-sm">/month</span>
      </div>

      <p className="text-zinc-400 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="text-orange-400 text-sm mt-0.5">✓</div>
            <span className="text-zinc-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {timeline && (
        <div className="mt-6 mb-6">
          <h4 className="text-sm font-medium text-zinc-400 mb-3">Timeline Overview</h4>
          <div className="space-y-2">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-zinc-800/30 p-2 rounded">
                <div className="text-orange-400 text-xs font-mono mt-0.5 whitespace-nowrap">{item.week}</div>
                <div className="h-full w-px bg-zinc-700 mx-2"></div>
                <span className="text-zinc-300 text-xs">{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button
        variant={highlighted ? "default" : "outline"}
        className={`w-full ${
          highlighted
            ? "bg-orange-600 hover:bg-orange-700 text-white"
            : "border-zinc-700 text-zinc-300 hover:bg-zinc-800/50"
        } rounded-full px-6 h-10 text-sm`}
      >
        Select Plan <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
