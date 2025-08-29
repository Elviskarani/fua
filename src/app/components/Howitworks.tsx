import React from 'react';
import { Search, RotateCcw, Edit3, Package } from 'lucide-react';

const HowItWorksComponent = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "We inspect your clothes and check your pockets",
      description: "We do \"pocket inspections\" for you so nothing ends up in the wash that shouldn't. All pockets and clothes are inspected before being washed."
    },
    {
      id: 2,
      icon: RotateCcw,
      title: "We clean your items with extra care",
      description: "Your lights and darks are separated and all your clothes are washed using cold water to preserve color (and save energy)."
    },
    {
      id: 3,
      icon: Edit3,
      title: "We wash your loads according to your choices",
      description: "Need hypoallergenic detergent? Want fabric softener? Just select the laundry preferences that are right for you."
    },
    {
      id: 4,
      icon: Package,
      title: "We fold everything so that you don't have to",
      description: "Your clothes are crisply folded, and your socks are paired, ready to be worn or put away when we deliver your clothes to your door!"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-16 w-full h-0.5 bg-gray-200 z-0" />
                )}
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-6 hover:border-gray-400 transition-colors duration-200">
                    <IconComponent size={24} className="text-gray-700" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile connecting dots */}
        <div className="flex justify-center mt-12 lg:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksComponent;