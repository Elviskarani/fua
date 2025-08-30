"use client";

import React from 'react';

const RinseRepeatComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-8">
          RINSE REPEAT
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-500 leading-tight">
          Never do laundry again.
        </h1>
        
        {/* Description */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            Save 3+ hours per week while Rinse cares for your clothes.
          </p>
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            Free pickup and delivery with no fees with all Rinse Repeat plans.
          </p>
          <p className="text-xl md:text-2xl text-teal-500 font-semibold">
            Plans start as low as $59/bag.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-8">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
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