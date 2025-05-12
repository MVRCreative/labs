"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cursorRef.current) return

    const cursor = cursorRef.current

    const onMouseMove = (e: MouseEvent) => {
      // Animate the cursor blob to follow the mouse with a slight delay for a smooth effect
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    // Only add the event listener on desktop devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-[150px] h-[150px] rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 blur-[60px] pointer-events-none opacity-60 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
      style={{ top: 0, left: 0 }}
    />
  )
}

