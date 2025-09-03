import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TimeSlot } from '../utils/dateUtils';
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

  const handleTimeChange = (timeOption: string) => {
    const timeSlot: TimeSlot = {
      id: timeOption.toLowerCase(),
      label: timeOption,
      date: new Date(),
      isAvailable: true
    };
    updateBookingData({ timeSlot });
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
              <div className="relative">
                <select
                  value={bookingData.timeSlot?.label || ''}
                  onChange={(e) => handleTimeChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-gray-900 appearance-none cursor-pointer hover:border-orange-400 transition-colors pr-10"
                >
                  <option value="">Select a time</option>
                  {timeOptions.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={20} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Where
              </label>
              <div className="relative">
                <select
                  value={bookingData.location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-gray-900 appearance-none cursor-pointer hover:border-orange-400 transition-colors pr-10"
                >
                  <option value="">Select location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={20} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button 
                onClick={handleSubmit}
                disabled={!bookingData.location}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
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