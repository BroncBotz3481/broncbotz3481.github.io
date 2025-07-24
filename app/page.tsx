"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import TeamPage from "@/components/pages/team-page"
import SponsorsPage from "@/components/pages/sponsors-page"
import ContactPage from "@/components/pages/contact-page"
import LoadingSpinner from "@/components/loading-spinner"

const pages = {
  home: HomePage,
  about: AboutPage,
  team: TeamPage,
  sponsors: SponsorsPage,
  contact: ContactPage,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const navigateTo = async (page: string) => {
    if (page === currentPage) return

    setIsLoading(true)
    setIsLoaded(false)

    // Simulate loading delay for smooth transition
    await new Promise((resolve) => setTimeout(resolve, 200))

    setCurrentPage(page)
    setIsLoading(false)

    // Trigger loaded animation
    setTimeout(() => setIsLoaded(true), 50)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const CurrentPageComponent = pages[currentPage as keyof typeof pages] || HomePage

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      <main className="main">
        <div className="container mx-auto max-w-6xl px-5">
          <div
            className={`app-content transition-all duration-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <CurrentPageComponent />
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-white text-center py-10 mt-20">
        <div className="container mx-auto max-w-6xl px-5">
          <p>© 2025 Bronc Botz. All rights reserved.</p>
          <div className="flex justify-center gap-8 mt-5 flex-wrap">
            <button onClick={() => navigateTo("home")} className="text-slate-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => navigateTo("about")} className="text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => navigateTo("contact")} className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>

      <LoadingSpinner isVisible={isLoading} />
    </div>
  )
}
