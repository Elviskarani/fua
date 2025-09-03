"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { PhoneCall, User } from "lucide-react"

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Initialize scroll state and set client-side flag
  useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      setIsClient(true)
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      
      // Initial check after a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        handleScroll()
      }, 0)

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getHeaderBackground = () => {
    // Always show solid background when menu is open or not on home page
    if (isMenuOpen || !isHomePage) {
      return 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }
    // On home page, show transparent background only when at the top
    if (isHomePage && !isScrolled) {
      return 'bg-transparent'
    }
    // When scrolled, show solid background with blur
    return 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
  }

  const getTextColor = () => {
    return 'text-black'
  }

  const getLogoFilter = () => {
    return ''
  }

  const getMobileMenuButtonStyle = () => {
    return 'text-black hover:bg-gray-100'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${getHeaderBackground()}`}>
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
                  className={`object-contain rounded-md transition-all duration-300 ${getLogoFilter()}`}
                  priority
                />
              </div>
            </div>
            <span className={`font-bold text-base sm:text-lg ${getTextColor()}`}>
              FUA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/services-pricing" pathname={pathname} textColor={getTextColor()}>
              Services & Pricing
            </NavLink>
            <NavLink href="/rinse" pathname={pathname} textColor={getTextColor()}>
              Fua Drop
            </NavLink>
          </nav>

          {/* Right side - Mobile Menu Button only */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md transition-colors ${getMobileMenuButtonStyle()}`}
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
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
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
                
                {/* Mobile-only phone link removed */}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header