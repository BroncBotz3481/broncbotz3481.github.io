"use client"

import { useState, useEffect } from "react"

const slides = [
  { src: "/placeholder.svg?height=400&width=700", alt: "Team working on robot" },
  { src: "/placeholder.svg?height=400&width=700", alt: "Competition arena" },
  { src: "/placeholder.svg?height=400&width=700", alt: "Team photo" },
  { src: "/placeholder.svg?height=400&width=700", alt: "Robot mechanism" },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.src || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={previousSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all hover:scale-110"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all hover:scale-110"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
