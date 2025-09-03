"use client"; 

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { generateTimeSlots, TimeSlot } from '../utils/dateUtils';
import { useRouter } from 'next/navigation';

  const HeroCTAComponent = () => {
    const locations = ['Ruiru', 'Kikuyu', 'Kasarani'];
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [location, setLocation] = useState('');
    const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
    const router = useRouter();
  
    useEffect(() => {
      const slots = generateTimeSlots();
      setAvailableSlots(slots);
      if (slots.length > 0) {
        setSelectedTimeSlot(slots[0]);
      }
    }, []);
  
    const handleBookingSubmit = () => {
      if (location && selectedTimeSlot) {
        const bookingData = {
          timeSlot: selectedTimeSlot,
          location
        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        router.push('/booking');
      }
    };

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
           <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                         <div className="grid grid-cols-2 gap-6 mb-6">
                           <div className="text-left relative">
                             <label className="block text-sm font-semibold text-gray-700 mb-2">
                               Pickup
                             </label>
                             <div className="relative">
                               <select
                                 value={selectedTimeSlot?.id || ''}
                                 onChange={(e) => {
                                   const slot = availableSlots.find(s => s.id === e.target.value);
                                   setSelectedTimeSlot(slot || null);
                                 }}
                                 className="w-full text-gray-900 font-medium text-lg bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer hover:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-colors"
                               >
                                 {availableSlots.map(slot => (
                                   <option key={slot.id} value={slot.id}>
                                     {slot.label}
                                   </option>
                                 ))}
                               </select>
                               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                 <ChevronDown size={20} className="text-gray-500" />
                               </div>
                             </div>
                           </div>
                           <div className="text-left relative">
                             <label className="block text-sm font-semibold text-gray-700 mb-2">
                               Where
                             </label>
                             <div className="relative">
                               <select
                                 value={location}
                                 onChange={(e) => setLocation(e.target.value)}
                                 className="w-full text-gray-900 font-medium text-lg bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer hover:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-colors"
                               >
                                 <option value="">Add address</option>
                                 {locations.map(loc => (
                                   <option key={loc} value={loc}>{loc}</option>
                                 ))}
                               </select>
                               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                 <ChevronDown size={20} className="text-gray-500" />
                               </div>
                             </div>
                           </div>
                         </div>
                         
                         <div className="flex items-center justify-between">
                           <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium">
                             Your 50ksh off in credits will be automatically applied
                           </div>
                           <button 
                             onClick={handleBookingSubmit}
                             disabled={!location || !selectedTimeSlot}
                             className="bg-amber-400 hover:bg-amber-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-black p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                           >
                             <ChevronRight size={24} />
                           </button>
                         </div>
                       </div>
                
        {/* Disclaimer */}
        <div className="mt-8">
          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
            * The price per pound shown above for Fua Repeat is based on a 4-bag plan, billed annually.
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