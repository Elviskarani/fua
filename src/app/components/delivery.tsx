import React from 'react';
import { Smartphone, Building, Home } from 'lucide-react';

const DeliveryComponent = () => {
  const deliveryOptions = [
    {
      id: 1,
      icon: Smartphone,
      label: 'Front Door'
    },
    {
      id: 2,
      icon: Building,
      label: 'Building Reception'
    },
    {
      id: 3,
      icon: Home,
      label: 'Other place'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Delivery
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>All pickups and deliveries are within 15 minutes of your order.</p>
                <p> we'll text you a 30-minute arrival window of your Valet.</p>
              </div>
            </div>

            {/* Rinse Drop Feature */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not available in the evening? No problem!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                After creating your account, activate Fua Drop for personless pickup and delivery. 
                Our Valet will pick up and deliver your order to your doorstep, building reception, 
                or another place of your choosing.
              </p>

              {/* Delivery Options */}
              <div className="grid grid-cols-3 gap-4">
                {deliveryOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={option.id} className="text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <IconComponent size={24} className="text-cyan-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{option.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-200 relative">
                {/* Simulated delivery scene */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* Door representation */}
                    <div className="w-32 h-48 bg-teal-600 rounded-lg mx-auto mb-4 relative shadow-lg">
                      <div className="absolute top-1/2 right-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="absolute inset-2 border-2 border-teal-700 rounded"></div>
                    </div>
                    
                    {/* Laundry bag */}
                    <div className="relative">
                      <div className="w-20 h-12 bg-gray-800 rounded-lg mx-auto shadow-lg">
                        <div className="absolute inset-2 bg-teal-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          FUA
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 font-medium">Clean laundry delivery</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/3 right-6 w-4 h-4 bg-cyan-400/40 rounded-full"></div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Smartphone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Valet arriving in 15 min</p>
                  <p className="text-xs text-gray-500">Your laundry is ready!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryComponent;