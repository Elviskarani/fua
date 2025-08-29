'use client';

import React, { useState } from 'react';
import Image from 'next/image';



interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
    const [pickupTime, setPickupTime] = useState('Tonight');
    const [address, setAddress] = useState('');

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
                            Rinse picks up, cleans, and delivers your laundry and dry cleaning.
                        </p>

                        {/* Booking Form */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Pickup Time */}
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pickup
                                    </label>
                                    <select
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                                    >
                                        <option>Tonight</option>
                                        <option>Tomorrow</option>
                                        <option>This Weekend</option>
                                    </select>
                                </div>

                                {/* Address */}
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Where
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Add address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-end">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6">
                            {/* App Store Badges */}
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-bold"></span>
                                </div>
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">G</span>
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-700">5,000+ reviews</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    );
};



export default HeroSection;