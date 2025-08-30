import React from 'react';
import { BookingData } from './BookingForm';

interface Props {
  bookingData: BookingData;
  updateBookingData: (updates: Partial<BookingData>) => void;
  setCurrentStep: (step: number) => void;
}

const InitialBookingForm: React.FC<Props> = ({ 
  bookingData, 
  updateBookingData, 
  setCurrentStep 
}) => {
  const locations = ['Ruiru', 'Kikuyu', 'Kasarani'];
  const timeOptions = ['Now', 'Tonight', 'Tomorrow', 'Today', 'This Weekend'];

  const handleLocationChange = (location: string) => {
    updateBookingData({ location });
  };

  const handleTimeChange = (pickupTime: string) => {
    updateBookingData({ pickupTime });
  };

  const handleSubmit = () => {
    if (bookingData.location) {
      setCurrentStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4">
      <div className="max-w-4xl mx-auto pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Fua
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium laundry and dry cleaning service delivered to your door
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Pickup Time */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup
              </label>
              <select
                value={bookingData.pickupTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              >
                {timeOptions.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Where
              </label>
              <select
                value={bookingData.location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              >
                <option value="">Select location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button 
                onClick={handleSubmit}
                disabled={!bookingData.location}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialBookingForm;