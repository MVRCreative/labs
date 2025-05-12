"use client"

import { useEffect, useRef } from "react"

interface GridLightEffectsProps {
  gridSize: number
  density: number
  color: string
}

export function GridLightEffects({ gridSize, density, color }: GridLightEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width
      canvas.height = height

      ctx.clearRect(0, 0, width, height)

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          if (Math.random() < density) {
            ctx.beginPath()
            ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 4, 0, 2 * Math.PI)
            ctx.fillStyle = color
            ctx.fill()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [gridSize, density, color])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
}
