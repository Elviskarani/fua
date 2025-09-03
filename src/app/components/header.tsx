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
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getHeaderBackground = () => {
    if (isHomePage) {
      if (isMenuOpen || isScrolled) {
        return 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }
      return 'bg-transparent'
    }
    return 'bg-white border-b border-gray-200'
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
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${getHeaderBackground()}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/logofua.png"
                alt="FUA Logo"
                fill
                className={`object-contain rounded-md transition-all duration-300 ${getLogoFilter()}`}
                sizes="(max-width: 640px) 40px, 48px"
                priority
              />
            </div>
            <span className={`font-bold text-lg sm:text-xl ${getTextColor()}`}>
              FUA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/services-pricing" pathname={pathname} textColor={getTextColor()}>
              Services & Pricing
            </NavLink>
            <NavLink href="/rinse" pathname={pathname} textColor={getTextColor()}>
              Rinse
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
                  Rinse
                </NavLink>
                
                {/* Mobile-only phone link removed */}
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

export default Header