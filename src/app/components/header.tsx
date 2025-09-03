"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  pathname: string
  textColor: string
  onClick?: () => void
}

const NavLink = ({
  href,
  children,
  pathname,
  textColor,
  onClick
}: NavLinkProps) => {
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium leading-normal ${textColor} hover:opacity-80 transition-opacity`}
    >
      <span
        className={`
          relative inline-block
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:h-[2px] after:bg-current after:w-full
          after:transition-transform after:duration-300
          ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
          after:origin-left hover:after:scale-x-100
        `}
      >
        {children}
      </span>
    </Link>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    // Only add scroll listener on home page
    if (!isHomePage) return

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Check initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled, isHomePage])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Simple conditional classes based on current state
  const headerBg = () => {
    if (!isHomePage || !isMenuOpen) {
      return 'bg-white/90 backdrop-blur-lg border-b border-gray-200'
    }
    return scrolled 
      ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200' 
      : 'bg-transparent'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerBg()}`}>
      <div className="relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <div className="relative w-full h-full">
                <Image
                  src="/fuaadjicon.png"
                  alt="FUA Logo"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain rounded-md"
                  priority
                />
              </div>
            </div>
            <span className="font-bold text-base sm:text-lg text-gray-900">
              FUA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/services-pricing" pathname={pathname} textColor="text-gray-900">
              Services & Pricing
            </NavLink>
            <NavLink href="/rinse" pathname={pathname} textColor="text-gray-900">
              Fua Drop
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md transition-colors text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-4">
                <NavLink
                  href="/services-pricing"
                  pathname={pathname}
                  textColor="text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services & Pricing
                </NavLink>
                <NavLink
                  href="/rinse"
                  pathname={pathname}
                  textColor="text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fua Drop
                </NavLink>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header