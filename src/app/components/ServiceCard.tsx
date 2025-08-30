'use client';

import React from 'react';
import { Truck, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  icon: string;
  price: string;
  deliveryTime: string;
}

interface Props {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<Props> = ({ service, isSelected, onToggle }) => {
  return (
    <div className="bg-white rounded-lg border border-orange-200 p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{service.icon}</span>
          <div>
            <div className="font-medium">{service.name}</div>
            {isSelected && (
              <div className="text-sm text-gray-600 mt-1">
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-1" />
                  DELIVERY
                </div>
                <div className="font-medium">{service.deliveryTime}</div>
                <div className="text-green-600 font-medium">
                  RUSH {service.price}
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onToggle}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            isSelected
              ? 'bg-orange-500 text-white'
              : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
          }`}
        >
          {isSelected ? (
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Added
            </div>
          ) : (
            'Add'
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;