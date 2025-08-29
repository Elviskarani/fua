import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroCTAComponent = () => {
  const [address, setAddress] = useState('');

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/fua2.jpg)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
          Leave your laundry to the experts and save 3+ hours per week.
        </h1>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pickup
              </label>
              <p className="text-gray-900 font-medium text-lg">Tonight</p>
            </div>
            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Where
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Add address"
                className="w-full text-gray-900 placeholder-gray-400 border-none outline-none bg-transparent text-lg font-medium"
              />
              <div className="h-px bg-gray-200 mt-1"></div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
            <span className="mr-2">Get Started</span>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
            * The price per pound shown above for Rinse Repeat is based on a 4-bag plan, billed annually.
          </p>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-white/5 rounded-full"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCTAComponent;