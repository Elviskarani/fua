import React from 'react';
import { Star } from 'lucide-react';

interface RinseGuaranteeProps {
  className?: string;
}

const RinseGuarantee: React.FC<RinseGuaranteeProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gray-800 py-16 px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main heading */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Rinse Guarantee.
            </h2>
          </div>

          {/* Right side - Stars and description */}
          <div className="text-center lg:text-right">
            {/* Five stars */}
            <div className="flex justify-center lg:justify-end gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Guarantee text */}
            <p className="text-white text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto">
              Every order is backed by our industry-leading guarantee. If you're not satisfied with the cleaning of your clothes, we will re-clean them – free of charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RinseGuarantee;