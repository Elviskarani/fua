'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { generateTimeSlots, TimeSlot } from '../utils/dateUtils';

interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [location, setLocation] = useState('');
    const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
    const router = useRouter();

    const locations = ['Ruiru', 'Kikuyu', 'Kasarani'];

    useEffect(() => {
        // Generate time slots on component mount
        const slots = generateTimeSlots();
        setAvailableSlots(slots);
        // Set default to first available slot
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
        <section className={`relative min-h-screen flex items-center ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-orange-50 to-blue-50 opacity-80"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{
                        backgroundImage: `url('/fua2.jpg')`
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="max-w-2xl">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            The Smartest Way
                            <br />
                            <span className="text-orange-500">to Do Laundry</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Fua picks up, cleans, and delivers your laundry and dry cleaning.
                        </p>

                        {/* Updated Dynamic Booking Form */}
                        <div className="bg-white rounded-full h-full shadow-[0_0_1px_rgba(0,0,0,0.12),0_0_2px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.12)] text-black flex justify-between max-w-[420px] px-3 py-1 pl-3 pr-1">
                            <div className="flex items-center w-full">
                                {/* Dynamic Pickup Time */}
                                <div className="flex-1 px-2 py-2">
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Pickup</div>
                                        <select
                                            value={selectedTimeSlot?.id || ''}
                                            onChange={(e) => {
                                                const slot = availableSlots.find(s => s.id === e.target.value);
                                                setSelectedTimeSlot(slot || null);
                                            }}
                                            className="w-full text-sm text-gray-600 bg-transparent border-none outline-none appearance-none cursor-pointer"
                                        >
                                            {availableSlots.map(slot => (
                                                <option key={slot.id} value={slot.id}>
                                                    {slot.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-12 bg-gray-200"></div>

                                {/* Location Dropdown */}
                                <div className="flex-1 px-2 py-2">
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Where</div>
                                        <select
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="w-full text-sm text-gray-600 bg-transparent border-none outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="">Add address</option>
                                            {locations.map(loc => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleBookingSubmit}
                                    disabled={!location || !selectedTimeSlot}
                                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg ml-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Social Proof */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;