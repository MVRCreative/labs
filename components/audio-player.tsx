"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5) // Default volume at 50%
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number>()
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataArrayRef = useRef<Uint8Array | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const volumeSliderRef = useRef<HTMLDivElement>(null)

  // Use a direct audio element in the DOM instead of creating one programmatically
  useEffect(() => {
    // Find the audio element in the DOM
    const audioElement = document.getElementById("background-audio") as HTMLAudioElement

    if (audioElement) {
      audioRef.current = audioElement
      audioRef.current.volume = volume // Set initial volume to 50%

      // Set up event listeners
      audioRef.current.addEventListener("canplaythrough", () => {
        console.log("Audio can play through")
        setIsLoaded(true)
        setLoadError(false)
        setupAudioContext()
      })

      audioRef.current.addEventListener("error", (e) => {
        console.error("Audio loading error:", e)
        console.error("Audio error code:", audioElement.error ? audioElement.error.code : "unknown")
        console.error("Audio error message:", audioElement.error ? audioElement.error.message : "unknown")
        setLoadError(true)
        setIsLoaded(false)
      })

      // Try to load the audio file
      audioElement.load()
    }

    // Add click outside listener for volume slider
    const handleClickOutside = (event: MouseEvent) => {
      if (volumeSliderRef.current && !volumeSliderRef.current.contains(event.target as Node)) {
        setShowVolumeSlider(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Check if audioContext exists and is not already closed
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch((err) => {
          console.error("Error closing AudioContext:", err)
        })
      }

      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [volume])

  const setupAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return

    try {
      // Check if there's an existing context that needs to be cleaned up
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch((err) => {
          console.error("Error closing existing AudioContext:", err)
        })
      }

      // Create audio context
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext
      audioContextRef.current = new AudioContext()

      // Create analyzer
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 128

      // Connect audio to analyzer
      const source = audioContextRef.current.createMediaElementSource(audioRef.current)
      source.connect(analyserRef.current)
      analyserRef.current.connect(audioContextRef.current.destination)

      // Create data array for visualization
      const bufferLength = analyserRef.current.frequencyBinCount
      dataArrayRef.current = new Uint8Array(bufferLength)

      // Initialize visualization
      if (canvasRef.current) {
        initVisualization()
      }
    } catch (err) {
      console.error("Error setting up audio context:", err)
    }
  }

  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      // Resume audio context if needed
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume().catch((err) => {
          console.error("Failed to resume AudioContext:", err)
        })
      }

      // Play with error handling
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playback started successfully")
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Audio playback failed:", error)
            // Handle browser autoplay policy
            if (error.name === "NotAllowedError") {
              alert("Your browser blocked audio playback. Please click the play button again to enable audio.")
            }
          })
      }
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)

    if (audioRef.current) {
      audioRef.current.volume = newVolume

      // If volume is set to 0, mute the audio; otherwise unmute
      if (newVolume === 0) {
        audioRef.current.muted = true
        setIsMuted(true)
      } else if (isMuted) {
        audioRef.current.muted = false
        setIsMuted(false)
      }
    }
  }

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider)
  }

  const initVisualization = () => {
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 120
    canvas.height = 40

    // Animation function
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)

      if (!analyserRef.current || !dataArrayRef.current) return

      // Get frequency data
      analyserRef.current.getByteFrequencyData(dataArrayRef.current)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waveform
      const barWidth = 2
      const barSpacing = 1
      const barCount = Math.floor(canvas.width / (barWidth + barSpacing))
      const frequencyStep = Math.floor(dataArrayRef.current.length / barCount)

      for (let i = 0; i < barCount; i++) {
        const frequencyIndex = i * frequencyStep
        const value = dataArrayRef.current[frequencyIndex]
        const barHeight = (value / 255) * canvas.height * 0.8

        // Use orange color with varying opacity based on height
        const opacity = isPlaying ? 0.3 + (barHeight / canvas.height) * 0.7 : 0.2
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity})`

        // Draw bar
        const x = i * (barWidth + barSpacing)
        const y = (canvas.height - barHeight) / 2
        ctx.fillRect(x, y, barWidth, barHeight)
      }
    }

    animate()
  }

  // Animate the player in on mount
  useEffect(() => {
    if (isLoaded) {
      gsap.fromTo(
        ".audio-player-container",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 1 },
      )
    }
  }, [isLoaded])

  return (
    <>
      {/* Hidden audio element - Using multiple sources for better browser compatibility */}
      <audio id="background-audio" preload="auto" crossOrigin="anonymous" loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        <source src="/audio/background-music.ogg" type="audio/ogg" />
        <source src="/audio/background-music.wav" type="audio/wav" />
      </audio>
    </>
  )
}
