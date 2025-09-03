'use client';

import React from 'react';

interface Props {
  isOpen: boolean;
  currentTime: string;
  onTimeSelect: (time: string) => void;
  onClose: () => void;
}

const TimeModal: React.FC<Props> = ({ isOpen, currentTime, onTimeSelect, onClose }) => {
  const timeOptions = ['Now', 'Tonight', 'Tomorrow', 'Today', 'This Weekend'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold mb-4">Select Pickup Time</h3>
        <div className="space-y-2">
          {timeOptions.map(time => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                currentTime === time 
                  ? 'border-orange-500 bg-orange-50 text-orange-600' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TimeModal;