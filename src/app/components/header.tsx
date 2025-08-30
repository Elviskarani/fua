'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  return (
    <header className={`bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-left">
          <nav className="hidden md:flex items-center space-x-8">
            {/* Direct styling on the Link component */}
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-500 font-medium text-xl transition-colors"
            >
              Fua
            </Link>

            <Link 
              href="/services-pricing" 
              className="text-gray-700 hover:text-orange-500 font-medium text-xl transition-colors"
            >
              Services and Pricing
            </Link>

            <Link 
              href="/rinse" 
              className="text-gray-700 hover:text-orange-500 font-medium text-xl transition-colors"
            >
              Rinse Repeat
            </Link>
            
            <Link 
              href="/for-business" 
              className="text-gray-700 hover:text-orange-500 font-medium text-xl transition-colors"
            >
              For Business
            </Link>

            <div className="relative">
              <button 
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="text-gray-700 hover:text-orange-500 font-medium text-xl transition-colors flex items-center gap-1"
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Direct styling for the login link */}
          <Link 
            href="/login" 
            className="hidden md:block text-gray-700 hover:text-orange-500 text-xl font-medium transition-colors"
          >
            Log in
          </Link>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;