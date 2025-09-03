"use client";

import React from 'react';

const RinseRepeatComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Logo/Brand */}
        <div className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6 md:mb-8">
          Fua
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-teal-500 leading-tight px-2">
          Never do laundry again.
        </h1>
        
        {/* Description */}
        <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto px-2">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium">
            Save 3+ hours per week while Fua cares for your clothes.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium">
            Free pickup and delivery with no fees with our service.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-500 font-semibold">
            Plans start as low as Ksh100/bag.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-6 md:pt-8">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform w-full sm:w-auto"
            onClick={() => {
              // Add your navigation logic here
              console.log('Get started clicked');
            }}
          >
            Get started with Rinse Repeat
          </button>
        </div>
      </div>
    </div>
  );
};

export default RinseRepeatComponent;