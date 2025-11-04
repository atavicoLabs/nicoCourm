'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { label: 'Chi Sono', id: 'chi-sono' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contatti', id: 'contatti' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-forest-green' : 'text-white'
            }`}
          >
            Courmayeur Services
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-colors hover:text-soft-gold ${
                  isScrolled ? 'text-forest-green' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-2xl ${isScrolled ? 'text-forest-green' : 'text-white'}`}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu - simpler CSS transition to avoid animation issues on some devices */}
        <div
          className={`md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-2 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-forest-green hover:bg-soft-gold/10 transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
