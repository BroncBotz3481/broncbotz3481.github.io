"use client"

import { useState } from "react"
import Header from "@/components/header"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import TeamPage from "@/components/pages/team-page"
import RobotsPage from "@/components/pages/robots-page"
import SponsorsPage from "@/components/pages/sponsors-page"
import ContactPage from "@/components/pages/contact-page"
import LoadingSpinner from "@/components/loading-spinner"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigation = async (page: string) => {
    if (page === currentPage) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 200))
    setCurrentPage(page)
    setIsLoading(false)
  }

  const renderCurrentPage = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[60vh]">
          <LoadingSpinner />
        </div>
      )
    }

    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "team":
        return <TeamPage />
      case "robots":
        return <RobotsPage />
      case "sponsors":
        return <SponsorsPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="animate-fade-in">{renderCurrentPage()}</div>
      </main>

      <footer className="bg-slate-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/broncbotz-logo.png" alt="BroncBotz Logo" className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold text-orange-400">BroncBotz</h3>
                  <p className="text-xs text-slate-300">FIRST Robotics Team</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Student-led robotics team competing in FIRST Tech Challenge and FIRST Robotics Competition based in San
                Antonio, Texas since 2009.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-orange-400">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                {[
                  { id: "about", label: "About Us" },
                  { id: "team", label: "Our Team" },
                  { id: "robots", label: "Our Robots" },
                  { id: "sponsors", label: "Sponsors" },
                  { id: "contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className="text-slate-300 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-orange-400">Connect</h4>
              <div className="space-y-1 text-sm text-slate-300">
                <p>📧 broncbotz@example.com</p>
                <p>📱 Follow us on social media</p>
                <p>🏫 San Antonio, Texas</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-6 pt-4 text-center text-xs text-slate-400">
            <p>&copy; 2024 BroncBotz FIRST Robotics Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
