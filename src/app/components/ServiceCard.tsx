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
  isRushSelected: boolean;
  onToggle: () => void;
  onRushToggle: () => void;
}

const ServiceCard: React.FC<Props> = ({ 
  service, 
  isSelected, 
  isRushSelected, 
  onToggle, 
  onRushToggle 
}) => {
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
      
      {/* Rush Option - Only show when service is selected */}
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm text-gray-700">Rush Service</div>
              <div className="text-xs text-gray-500">
                {service.id === 'wash-fold' 
                  ? 'Faster processing (price determined on-site)' 
                  : `Faster processing + ${service.price}`
                }
              </div>
            </div>
            <button
              onClick={onRushToggle}
              className={`px-4 py-1 rounded-md text-sm font-medium transition-all ${
                isRushSelected
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isRushSelected ? '⚡ Rush ON' : 'Add Rush'}
            </button>
          </div>
          {isRushSelected && (
            <div className="mt-2 text-green-600 font-medium text-sm">
              ⚡ RUSH SERVICE - Priority processing activated
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;