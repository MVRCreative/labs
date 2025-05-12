"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "./split-text"

interface ProductCardProps {
  title: string
  description: string
  progress: number
  index: number
}

export function ProductCard({ title, description, progress, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    if (!cardRef.current || !progressRef.current) return

    // Initial state - progress bar at 0%
    gsap.set(progressRef.current, {
      width: "0%",
    })

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

    // Animate progress bar after card appears
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 1.5,
      delay: 0.3 * index + 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    })
  }, [progress, index])

  return (
    <div ref={cardRef} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm">
      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
        <div className="size-2 rounded-full bg-orange-500"></div>
      </div>
      <h3 className="text-xl font-light mb-3">
        <SplitText type="chars" animation="fadeUp" stagger={0.02} delay={0.2 * index + 0.3}>
          {title}
        </SplitText>
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-4">{description}</p>
      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full bg-orange-500/50 rounded-full"></div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-zinc-500">
        <span>Development</span>
        <span>{progress}%</span>
      </div>
    </div>
  )
}

