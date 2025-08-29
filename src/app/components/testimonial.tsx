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
      quote: "Rinse makes everything very easy. I don't have to worry about my laundry getting done. I just throw everything in the bag, it gets washed and know the valets will do a good job.",
      name: "Jennifer K.",
      location: "Chicago"
    },
    {
      id: 2,
      quote: "I love the Rinse Repeat 'if it fits, we will wash it' concept. Rinse's valets are also polite and helpful.",
      name: "Alice Y.",
      location: "San Francisco"
    },
    {
      id: 3,
      quote: "I love how Rinse folds all the clothes and towels so perfectly. I'm especially impressed with how they fold my fitted sheets! My laundry always comes out smelling fresh and amazing, and I've never lost an item.",
      name: "Allison H.",
      location: "San Francisco"
    }
  ];

  const testimonialsToShow = testimonials || defaultTestimonials;

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            You don't have to take our word for it.
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToShow.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Avatar</span>
                  </div>
                )}
              </div>
              
              {/* Quote */}
              <div className="text-center mb-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Attribution */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
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