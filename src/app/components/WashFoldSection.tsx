"use client";
import React from 'react';
import Image from 'next/image';
import router from 'next/router';

interface WashFoldSectionProps {
className?: string;
}

const WashFoldSection: React.FC<WashFoldSectionProps> = ({ className = '' }) => {
return (
<section className={`py-20 bg-white ${className}`}>
<div className="container mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-16 items-center">
{/* Left Column - Text Content */}
<div className="max-w-xl">
  {/* Service Icon */}
  <div className="mb-8">
    <div className="w-16 h-12 relative">
      {/* Laundry bag icon */}
      <svg 
        viewBox="0 0 64 48" 
        className="w-full h-full"
        fill="none"
      >
        <path 
          d="M8 12 L56 12 L52 40 L12 40 Z" 
          fill="#1f2937"
          stroke="#f59e0b" 
          strokeWidth="2"
        />
        <path 
          d="M16 8 L48 8" 
          stroke="#f59e0b" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M20 4 L44 4" 
          stroke="#f59e0b" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Handles */}
        <path 
          d="M18 12 Q18 6 24 6 L40 6 Q46 6 46 12" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="2"
        />
      </svg>
    </div>
  </div>

  <h2 className="text-5xl font-bold text-gray-900 mb-6">
    Wash & Fold
  </h2>
  
  <p className="text-xl text-gray-600 leading-relaxed mb-12">
    The most effortless way to handle your everyday laundry needs.
  </p>

  {/* Features List */}
  <div className="space-y-8">
  

   
 
  </div>

  {/* CTA Button */}
  <div className="mt-12">
    <button onClick={() => router.push('/booking')} 
    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
      Get 50bob off
    </button>
  </div>
</div>





<div className="space-y-12">
  {/* Image */}
  <div className="relative">
    <div className="relative z-10">
      {/* Main image container */}
      <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/fuabag.jpg"
          alt="Wash & Fold"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-100 rounded-full opacity-60 -z-10"></div>
    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-100 rounded-full opacity-40 -z-10"></div>
  </div>

  {/* Features List - Below Image in Right Column */}
  <div className="space-y-8">
    {/* Schedule a pickup */}
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Schedule a pickup
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          You can schedule a pickup any day of the week. Your Valet will arrive with your free, personalized Fua bags between 8pm and 10pm to pick up your clothes.
        </p>
      </div>
    </div>

    {/* Professional cleaning care */}
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Professional cleaning care
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Lights and darks are separated and washed in cold water. Hypoallergenic detergent and fabric softener are free upon request.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
)
};

export default WashFoldSection;