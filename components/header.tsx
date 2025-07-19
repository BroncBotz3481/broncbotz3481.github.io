"use client"

import { useState } from "react"

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐎</span>
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-wide">BRONC BOTZ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === item.id
                        ? "bg-slate-800 text-white"
                        : "text-slate-600 hover:text-slate-800 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-800 text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      currentPage === item.id
                        ? "bg-slate-800 text-white"
                        : "text-slate-600 hover:text-slate-800 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
