'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
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
  resetBooking: () => void;
}

const Confirmation: React.FC<Props> = ({ bookingData, resetBooking }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">We'll be in touch soon with pickup details.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Customer:</span>
              <span>{bookingData.firstName} {bookingData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span>{bookingData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span>{bookingData.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pickup:</span>
              <span>{bookingData.timeSlot && formatPickupDisplay(bookingData.timeSlot)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Services:</span>
              <span>{bookingData.selectedServices.length} selected</span>
            </div>
          </div>
        </div>

        <button
          onClick={resetBooking}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200"
        >
          Book Another Order
        </button>
      </div>
    </div>
  );
};

export default Confirmation;