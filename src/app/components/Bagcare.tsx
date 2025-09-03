import React from 'react';

interface BagCareSectionProps {
  laundryPileImage?: string;
  fuaBagImage?: string;
}

const BagCareSection: React.FC<BagCareSectionProps> = ({
  laundryPileImage,
  fuaBagImage
}) => {
  return (
    <div className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex items-center justify-center mb-8 md:mb-12 relative">
          {/* Mobile: Stack images vertically */}
          <div className="block md:hidden w-full space-y-4">
            {/* Rinse Bag - Mobile */}
            <div className="flex justify-center">
              {rinseBagImage ? (
                <img
                  src={rinseBagImage}
                  alt="Rinse wash and fold bag"
                  className="w-64 h-40 object-contain"
                />
              ) : (
                <img
                  src={'/realbag2.png'}
                  alt="Rinse wash and fold bag"
                  className="w-64 h-40 object-contain"
                />
              )}
            </div>
            
            {/* Folded Clothes Stack - Mobile */}
            <div className="flex justify-center">
              {laundryPileImage ? (
                <img
                  src={laundryPileImage}
                  alt="Folded laundry stack"
                  className="w-48 h-40 sm:w-80 sm:h-72 md:w-96 md:h-80 object-cover"
                />
              ) : (
                <img
                  src={'/laundry2.jpg'}
                  alt="Folded laundry stack"
                  className="w-64 h-48 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Desktop: Overlapping layout */}
          <div className="hidden md:block relative w-full max-w-6xl h-64 sm:h-80 md:h-96">
            {/* Folded Clothes Stack - Background, positioned right */}
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              {laundryPileImage ? (
                <img
                  src={laundryPileImage}
                  alt="Folded laundry stack"
                  className="w-48 h-40 sm:w-80 sm:h-72 md:w-96 md:h-80 object-cover"
                />
              ) : (
                <img
                  src={'/laundry2.jpg'}
                  alt="Folded laundry stack"
                  className="w-72 h-64 sm:w-80 sm:h-72 md:w-96 md:h-80 object-cover"
                />
              )}
            </div>

            {/* Rinse Bag - Large, positioned left-center, overlaps clothes */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
              {rinseBagImage ? (
                <img
                  src={rinseBagImage}
                  alt="Rinse wash and fold bag"
                  className="w-96 h-56 sm:w-112 sm:h-64 md:w-128 md:h-72 lg:w-144 lg:h-80 object-contain"
                  style={{ filter: 'none' }}
                />
              ) : (
                <img
                  src={'/realbag2.png'}
                  alt="Rinse wash and fold bag"
                  className="w-96 h-56 sm:w-112 sm:h-64 md:w-128 md:h-72 lg:w-144 lg:h-80 object-contain"
                  style={{ filter: 'none' }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 md:space-y-6">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-2">
            If it fits in the bag, we take care of it.
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-2 px-2">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Fua plans are priced by the kilogram. place a
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              c0llection order and enjoy service 7 days a week.
            </p>
          </div>

          {/* Learn More Link */}

        </div>
      </div>
    </div>
  );
};
 export default BagCareSection;