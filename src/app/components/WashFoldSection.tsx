import React from 'react';
import Image from 'next/image';

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
    <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
      Get $20 off
    </button>
  </div>
</div>





<div className="space-y-12">
  {/* Image */}
  <div className="relative">
    <div className="relative z-10">
      {/* Main image container */}
      <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative">
          {/* Placeholder for the actual image - replace with your image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6">
              {/* Person silhouette */}
              <div className="w-16 h-16 bg-red-400 rounded-full mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="w-24 h-2 bg-red-400 rounded"></div>
                <div className="w-32 h-2 bg-red-400 rounded opacity-60"></div>
              </div>
              
              {/* Rinse bag representation */}
              <div className="relative">
                <div className="w-24 h-32 bg-gray-900 rounded-2xl mx-auto relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-cyan-400 text-xs font-bold">WASH</div>
                    <div className="text-cyan-400 text-xs font-bold">& FOLD</div>
                  </div>
                  {/* Bag handles */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="flex gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-0.5 h-6 bg-orange-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Folded clothes stack */}
                <div className="absolute -right-8 bottom-4 space-y-1">
                  <div className="w-16 h-3 bg-blue-400 rounded-sm"></div>
                  <div className="w-16 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-16 h-3 bg-purple-400 rounded-sm"></div>
                  <div className="w-16 h-3 bg-yellow-400 rounded-sm"></div>
                </div>
              </div>

              {/* Plant decoration */}
              <div className="absolute top-4 right-6">
                <div className="w-12 h-16 relative">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-400 rounded-full absolute top-2 right-1"></div>
                  <div className="w-4 h-6 bg-green-600 absolute bottom-0 left-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          You can schedule a pickup any day of the week. Your Valet will arrive with your free, personalized Rinse bags between 8pm and 10pm to pick up your clothes.
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