'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Truck } from 'lucide-react';
import DynamicTimeModal from './DynamicTimeModal';
import ServiceCard from './ServiceCard';
import { formatPickupDisplay, calculateTimeLeft, TimeSlot } from '../utils/dateUtils';

interface BookingData {
  timeSlot: TimeSlot | null;
  location: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedServices: string[];
}

interface Props {
  bookingData: BookingData;
  updateBookingData: (updates: Partial<BookingData>) => void;
  setCurrentStep: (step: number) => void;
}

interface Service {
  id: string;
  name: string;
  icon: string;
  price: string;
  deliveryTime: string;
}

const ServiceSelection: React.FC<Props> = ({ 
  bookingData, 
  updateBookingData, 
  setCurrentStep 
}) => {
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  const services: Service[] = [
    {
      id: 'wash-fold',
      name: 'Wash & Fold',
      icon: '👕',
      price: 'KSh 200',
      deliveryTime: 'Next day delivery'
    },
    {
      id: 'dry-cleaning',
      name: 'Dry Cleaning',
      icon: '🧥',
      price: 'KSh 200',
      deliveryTime: '2-day delivery'
    }
  ];

  // Live countdown timer
  useEffect(() => {
    if (!bookingData.timeSlot?.cutoffPassed) return;

    const interval = setInterval(() => {
      const remaining = calculateTimeLeft(bookingData.timeSlot!);
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [bookingData.timeSlot]);

  const toggleService = (serviceId: string) => {
    const updatedServices = bookingData.selectedServices.includes(serviceId)
      ? bookingData.selectedServices.filter(id => id !== serviceId)
      : [...bookingData.selectedServices, serviceId];
    updateBookingData({ selectedServices: updatedServices });
  };

  const handleTimeUpdate = (newTimeSlot: TimeSlot) => {
    updateBookingData({ timeSlot: newTimeSlot });
    setShowTimeModal(false);
  };

  const handleContinue = () => {
    if (bookingData.selectedServices.length > 0) {
      setCurrentStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto pt-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentStep(1)}
            className="p-2 hover:bg-gray-100 rounded-full mr-4"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Schedule your order</h2>
            <p className="text-sm text-gray-500 mt-2">step 2 / 3</p>
          </div>
        </div>

        {/* Dynamic Pickup Info */}
        <div className="bg-white rounded-lg border border-orange-200 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Truck className="w-4 h-4 mr-2" />
                PICKUP
              </div>
              <div className="font-medium">
                {bookingData.timeSlot && formatPickupDisplay(bookingData.timeSlot)}
              </div>
              <div className="text-sm text-gray-600">Location: {bookingData.location}</div>
            </div>
            <button 
              onClick={() => setShowTimeModal(true)}
              className="text-orange-500 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <div className="font-medium">Not available in the evening?</div>
            <div>No sweat - activate Fua Drop for pickup and delivery without your presence on the next page.</div>
          </div>
          
          {/* Live countdown for tonight pickup */}
          {timeLeft && (
            <div className="mt-4 text-orange-600 font-medium text-sm">
              {timeLeft} left if you want a pickup tonight!
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & delivery</h3>
          
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={bookingData.selectedServices.includes(service.id)}
              onToggle={() => toggleService(service.id)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={bookingData.selectedServices.length === 0}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200"
        >
          Continue to Payment
        </button>
      </div>

      <DynamicTimeModal 
        isOpen={showTimeModal}
        currentTimeSlot={bookingData.timeSlot}
        onTimeSelect={handleTimeUpdate}
        onClose={() => setShowTimeModal(false)}
      />
    </div>
  );
};

export default ServiceSelection;