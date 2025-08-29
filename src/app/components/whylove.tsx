"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface WhyLoveRinseProps {
  className?: string;
}

const WhyLoveRinse: React.FC<WhyLoveRinseProps> = ({ className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features: Feature[] = [
    {
      id: 1,
      title: "Clean clothes at your fingertips",
      description: "Schedule a pickup by simply texting \"Y\" to 746-73 ('RINSE'), track your Valet in real time, or customize your delivery and cleaning preferences. Enjoy a seamless laundry experience designed with convenience at its core.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable laundry and dry cleaning",
      description: "Our eco-friendly cleaning processes and sustainable practices ensure your clothes are cared for while protecting the environment. We use biodegradable detergents and energy-efficient equipment.",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "World-class customer service",
      description: "Our dedicated team provides exceptional support and care for every order. From specialized handling of delicate items to responsive customer support, we're committed to exceeding your expectations.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Make Mom proud",
      description: "Professional cleaning that keeps your wardrobe looking its best. Your clothes will come back fresher, cleaner, and better cared for than ever before, making you feel confident and put-together.",
      image: "https://images.unsplash.com/photo-1521654947043-65150d56e9af?w=600&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={`py-16 px-6 lg:px-12 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
          Why you'll love Rinse
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === activeIndex
                      ? 'bg-white w-6'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Active feature */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {features[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {features[activeIndex].description}
              </p>
            </div>

            {/* Feature navigation */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => goToSlide(index)}
                  className={`block w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    index === activeIndex
                      ? 'bg-teal-50 border-l-4 border-teal-500'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <h4 className={`font-semibold ${
                    index === activeIndex ? 'text-teal-700' : 'text-gray-700'
                  }`}>
                    {feature.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveRinse;