"use client"

import type React from "react"

import Link from "next/link"
import { useRef, useState } from "react"
import gsap from "gsap"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        },
      )
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        width: "0%",
        duration: 0.3,
        ease: "power2.in",
      })
    }
  }

  return (
    <div className="relative inline-block">
      <Link
        ref={linkRef}
        href={href}
        className="text-zinc-400 hover:text-white transition-colors text-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
      <div ref={underlineRef} className="absolute bottom-0 left-0 h-[1px] bg-orange-400 w-0" />
    </div>
  )
}

