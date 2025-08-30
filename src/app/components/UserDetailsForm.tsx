'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatPickupDisplay, TimeSlot } from '../utils/dateUtils';

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

const UserDetailsForm: React.FC<Props> = ({ 
  bookingData, 
  updateBookingData, 
  setCurrentStep 
}) => {
  const router = useRouter();

  const handleInputChange = (field: keyof BookingData, value: string) => {
    updateBookingData({ [field]: value });
  };

  const handleContinue = () => {
    if (bookingData.firstName && bookingData.lastName && bookingData.phone) {
      setCurrentStep(2);
    }
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  const isFormValid = bookingData.firstName && bookingData.lastName && bookingData.phone;

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-10">
      <div className="max-w-lg mx-auto pt-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={handleBackToHome}
            className="p-2 hover:bg-gray-100 rounded-full mr-4"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Let's get started!</h2>
            <p className="text-sm text-gray-500 mt-2">step 1 / 3</p>
          </div>
        </div>

        {/* Show selected pickup details */}
        {bookingData.timeSlot && bookingData.location && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-600 mb-1">Your selection:</div>
            <div className="font-medium text-gray-900">
              {formatPickupDisplay(bookingData.timeSlot)} pickup in {bookingData.location}
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First name</label>
              <input
                type="text"
                value={bookingData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
                placeholder="Levi"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last name</label>
              <input
                type="text"
                value={bookingData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
                placeholder="kigunda"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone number</label>
            <input
              type="tel"
              value={bookingData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
              placeholder="+254 712 345 678"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={bookingData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
              placeholder="levimaxkigunda@gmail.com"
            />
          </div>

          <div className="text-sm text-gray-500 mt-6">
            By selecting continue, you agree to receive service and marketing auto-sent texts from Fua. Opt-out anytime on your "My Account" page or text "STOP". Message & data rates may apply. By continuing, you also agree to our <span className="text-orange-500">Terms</span> and <span className="text-orange-500">Privacy Policy</span>.
          </div>

          <button
            onClick={handleContinue}
            disabled={!isFormValid}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;