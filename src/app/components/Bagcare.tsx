import React from 'react';

interface BagCareSectionProps {
  laundryPileImage?: string;
  rinseBagImage?: string;
}

const BagCareSection: React.FC<BagCareSectionProps> = ({
  laundryPileImage,
  rinseBagImage
}) => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-8">
            {/* Laundry Pile */}
            <div className="flex-shrink-0">
              {laundryPileImage ? (
                <img 
                  src={laundryPileImage} 
                  alt="Pile of laundry clothes"
                  className="w-64 h-48 object-cover"
                />
              ) : (
                <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Laundry Pile Image</span>
                </div>
              )}
            </div>
            
            {/* Rinse Bag */}
            <div className="flex-shrink-0">
              {rinseBagImage ? (
                <img 
                  src={rinseBagImage} 
                  alt="Rinse wash and fold bag"
                  className="w-64 h-48 object-cover"
                />
              ) : (
                <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Rinse Bag Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-center space-y-6">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            If it fits in the bag, we take care of it.
          </h2>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Rinse Repeat plans are priced by the bag, not the pound. Select the
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              number of bags you need each month and enjoy service 7 days a week.
            </p>
          </div>
          
          {/* Learn More Link */}
          <div className="pt-4">
            <a 
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium text-lg underline transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                // Add your navigation logic here
                console.log('Learn more about bags clicked');
              }}
            >
              Learn more about your bags
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagCareSection;