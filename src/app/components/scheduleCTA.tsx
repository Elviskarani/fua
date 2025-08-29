"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface ScheduleCTAProps {
  className?: string;
  onScheduleClick?: () => void;
  onGetDiscountClick?: () => void;
}

const ScheduleCTA: React.FC<ScheduleCTAProps> = ({ 
  className = '',
  onScheduleClick,
  onGetDiscountClick
}) => {
  const router = useRouter();
  const handleDefaultSchedule = () => router.push('/schedule');
  const handleDefaultDiscount = () => router.push('/offers/first-order');

  return (
    <section className={`relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 py-20 px-6 lg:px-12 overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-400/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Small headline */}
        <p className="text-gray-800 font-semibold text-sm lg:text-base uppercase tracking-wider mb-6">
          SCHEDULE TODAY TO
        </p>

        {/* Main headline */}
        <div className="mb-10">
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-2">
            Get $20 off
          </h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-orange-600 leading-tight">
            your first order
          </h3>
        </div>

        {/* CTA Button */}
        <button
          onClick={onScheduleClick ?? handleDefaultSchedule}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg transform active:scale-95"
        >
          Schedule your first pickup
        </button>
      </div>

      {/* Bottom left floating button */}
      <div className="absolute bottom-6 left-6">
        <button
          onClick={onGetDiscountClick ?? handleDefaultDiscount}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg transform active:scale-95"
        >
          Get $20 off
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-300 bg-opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ScheduleCTA;