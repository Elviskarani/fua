"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Package, Shirt, Wind, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { generateTimeSlots, TimeSlot } from '../utils/dateUtils';

const WashFoldComponent = () => {
  const [selectedService, setSelectedService] = useState('WASH & FOLD');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [location, setLocation] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const router = useRouter();

  const locations = ['Ruiru', 'Kikuyu', 'Kasarani'];

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

  const services = [
    {
      id: 'wash-fold',
      name: 'WASH & FOLD',
      icon: Package,
      active: true
    },
    {
      id: 'dry-cleaning',
      name: 'DRY CLEANING',
      icon: Shirt,
      active: false
    },
    {
      id: 'hang-dry',
      name: 'HANG DRY',
      icon: Wind,
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Tabs */}
      <div className="flex justify-center pt-8 px-4">
        <div className="flex bg-white rounded-full p-2 shadow-lg border border-gray-200">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedService === service.name
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <IconComponent size={16} />
                {service.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Wash & Fold
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wash & Fold is the perfect service to use if you want to avoid 
                doing laundry and save your time and your sanity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fua will pickup, clean, and deliver your laundry right back to 
                your door. Your clothes get their own machine, are cleaned 
                according to your preferences, and delivered neatly folded - 
                we even pair your socks.
              </p>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup
                  </label>
                  <select
                    value={selectedTimeSlot?.id || ''}
                    onChange={(e) => {
                      const slot = availableSlots.find(s => s.id === e.target.value);
                      setSelectedTimeSlot(slot || null);
                    }}
                    className="w-full text-gray-900 font-medium text-lg bg-transparent border-none outline-none appearance-none cursor-pointer"
                  >
                    {availableSlots.map(slot => (
                      <option key={slot.id} value={slot.id}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Where
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-gray-900 placeholder-gray-400 border-none outline-none bg-transparent text-lg font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Add address</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <div className="h-px bg-gray-200 mt-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Your $20 off in credits will be automatically applied
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
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative">
                {/* Simulated laundry image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Package size={80} className="mx-auto mb-4" />
                    <p className="text-xl font-medium">Clean Laundry Service</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/5 rounded-full"></div>
                <div className="absolute top-1/2 right-12 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pickup & Delivery</h3>
              <p className="text-gray-600">We handle everything from pickup to delivery right to your door</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Care</h3>
              <p className="text-gray-600">Your clothes get individual attention and premium treatment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Results</h3>
              <p className="text-gray-600">Neatly folded, organized, and ready to wear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashFoldComponent;