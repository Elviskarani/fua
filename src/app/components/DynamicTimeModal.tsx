'use client';

import React, { useState, useEffect } from 'react';
import { generateTimeSlots, formatPickupDisplay, TimeSlot } from '../utils/dateUtils';

interface Props {
  isOpen: boolean;
  currentTimeSlot: TimeSlot | null;
  onTimeSelect: (timeSlot: TimeSlot) => void;
  onClose: () => void;
}

const DynamicTimeModal: React.FC<Props> = ({ isOpen, currentTimeSlot, onTimeSelect, onClose }) => {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    if (isOpen) {
      const slots = generateTimeSlots();
      setAvailableSlots(slots);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold mb-4">Select Pickup Time</h3>
        <div className="space-y-2">
          {availableSlots.map(slot => (
            <button
              key={slot.id}
              onClick={() => onTimeSelect(slot)}
              disabled={!slot.isAvailable}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                currentTimeSlot?.id === slot.id
                  ? 'border-orange-500 bg-orange-50 text-orange-600' 
                  : slot.isAvailable
                    ? 'border-gray-200 hover:border-gray-300'
                    : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="font-medium">{slot.label}</div>
              <div className="text-xs text-gray-500">
                {formatPickupDisplay(slot)}
              </div>
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

export default DynamicTimeModal;