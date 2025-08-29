import React from 'react';
import { Star, Info } from 'lucide-react';

const PricingComponent = () => {
  const customerAvatars = [
    { id: 1, bg: 'bg-orange-400' },
    { id: 2, bg: 'bg-blue-400' },
    { id: 3, bg: 'bg-purple-400' },
    { id: 4, bg: 'bg-green-400' },
    { id: 5, bg: 'bg-pink-400' },
    { id: 6, bg: 'bg-yellow-400' }
  ];

  const InfoIcon = ({ className = "" }) => (
    <Info size={16} className={`text-gray-400 ${className}`} />
  );

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Pricing That Fits Your Needs
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Two options, one goal: your convenience. 
                Forget about laundry and{' '}
                <span className="text-cyan-500 font-semibold">save up to 52% with Rinse Repeat</span>, 
                or try Rinse with Pay-As-You-Go.
              </p>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {customerAvatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className={`w-10 h-10 ${avatar.bg} rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {avatar.id === 1 ? '👤' : avatar.id === 2 ? '👩' : avatar.id === 3 ? '👨' : avatar.id === 4 ? '👤' : avatar.id === 5 ? '👩' : '👨'}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <Star size={16} className="text-yellow-400 fill-current opacity-50" />
                </div>
                <p className="text-sm text-gray-600">from 5,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            
            {/* Pay-As-You-Go Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pay-As-You-Go</h3>
                  <p className="text-gray-600">Occasional, priced per pound.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Always</p>
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    $2.99<span className="text-2xl font-normal text-gray-600">/lb</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>$9.95 Pickup & Delivery Fee</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3-4 Day Turnaround or $9.95 Next-Day Rush</span>
                    <InfoIcon />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>$5.00 Service Fee</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Household items priced separately</span>
                    <InfoIcon />
                  </div>
                </div>

                <button className="w-full py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  Schedule a pickup
                </button>
              </div>
            </div>

            {/* Rinse Repeat Card */}
            <div className="bg-teal-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-orange-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Rinse Repeat</h3>
                  <p className="text-teal-200">All-inclusive subscription, priced per bag.</p>
                </div>

                <div>
                  <p className="text-sm text-teal-300 mb-2">As low as*</p>
                  <div className="text-4xl font-bold mb-4">
                    $1.64<span className="text-2xl font-normal text-teal-200">/lb</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-teal-200">
                  <div className="flex items-center justify-between">
                    <span className="line-through">$9.95</span>
                    <span className="text-white font-medium">Free Pickup & Delivery</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="line-through">$9.95</span>
                    <span className="text-white font-medium">Free Next-Day Rush Service</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="line-through">$5.00</span>
                    <span className="text-white font-medium">Waived Service Fee</span>
                  </div>
                  <div className="text-white font-medium">
                    If it fits the bag, we'll clean it
                  </div>
                  <div className="text-white font-medium">
                    Unlimited rollover of bags and pounds
                  </div>
                  <div className="text-white font-medium">
                    $10.00 in monthly credit for other services
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors duration-200">
                    Explore Rinse Repeat plans
                  </button>
                  <button className="w-full text-orange-300 hover:text-orange-200 font-medium text-sm transition-colors duration-200">
                    Learn about all Rinse Repeat features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;