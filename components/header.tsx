"use client"

import { useState } from "react"

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "robots", label: "Robots" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="/broncbotz-logo.png" alt="BroncBotz Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-orange-600">BroncBotz</h1>
              <p className="text-sm text-slate-600">FIRST Robotics Team</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-orange-100 text-orange-700"
                    : "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-orange-600 hover:bg-orange-50"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors ${
                    currentPage === item.id
                      ? "bg-orange-100 text-orange-700"
                      : "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
