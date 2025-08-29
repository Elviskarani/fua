import React from 'react';
import { Clock, MessageSquare, MapPin, Package } from 'lucide-react';

interface PickupEssentialsProps {
  className?: string;
}

const PickupEssentials: React.FC<PickupEssentialsProps> = ({ className = '' }) => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-teal-500" />,
      text: "Your Valet will always arrive between 8pm and 10pm."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
      text: "At 5:30pm, we'll text you a 30-minute ETA window."
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-500" />,
      text: "We'll also send a link to track your Valet, and your order once it's picked up."
    },
    {
      icon: <Package className="w-6 h-6 text-teal-500" />,
      text: "Your Valet will bring you your free, personalized Rinse bags. Just have your clothes ready by the door!"
    }
  ];

  return (
    <div className={`bg-gray-50 px-6 py-12 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12">
              Your first pickup{' '}
              <span className="text-teal-500">essentials.</span>
            </h1>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Video/Image section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Video thumbnail container */}
              <div className="bg-teal-700 rounded-2xl p-8 w-80 h-64 flex flex-col justify-center items-center text-white">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  What to expect from your first Rinse.
                </h3>
                <p className="text-sm opacity-90 text-center">
                  We've got you covered from pickup to delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupEssentials;