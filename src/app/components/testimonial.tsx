import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Fua makes everything very easy. I don't have to worry about my laundry getting done. I just throw everything in the bag, it gets washed and know the valets will do a good job.",
      name: "Jennifer.",
      location: "Kikuyu",
      avatar: "avatarimage1.jpeg"
    },
    {
      id: 2,
      quote: "I love fua 'we are here, we will wash it' concept. fua's valets are also polite and helpful.",
      name: "Alice.",
      location: "Ruiru",
      avatar: "avatarimage2.webp"
    },
    {
      id: 3,
      quote: "I love how fua folds all the clothes and towels so perfectly. I'm especially impressed with how they fold my fitted sheets! My laundry always comes out smelling fresh and amazing, and I've never lost an item.",
      name: "Allison.",
      location: "Kasarani",
      avatar: "avatarimage3.webp"
    }
  ];

  const testimonialsToShow = testimonials || defaultTestimonials;

  return (
    <div className="bg-gray-50 py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            You don't have to take our word for it.
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsToShow.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow duration-200"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4 md:mb-6">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm">Avatar</span>
                  </div>
                )}
              </div>
              
              {/* Quote */}
              <div className="text-center mb-4 md:mb-6">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Attribution */}
              <div className="text-center">
                <p className="text-gray-400 text-xs sm:text-sm">
                  - {testimonial.name}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;