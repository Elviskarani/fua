import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar: string;
  bgColor: string;
}

interface CustomerTestimonialsProps {
  className?: string;
}

const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ className = '' }) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Henna M.",
      quote: "I've used Rinse in every city I've lived in and I am OBSESSED. It's so convenient, whatever detergent they use smells amazing, and all of my delivery people have been so friendly. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      bgColor: "bg-teal-700"
    },
    {
      id: 2,
      name: "Brandon G.",
      quote: "Rinse is the most reliable and convenient wash and fold delivery service in NYC. Clothes always come back perfectly clean. I also trust them with my dry cleaning, even my nicest things.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      bgColor: "bg-teal-400"
    },
    {
      id: 3,
      name: "Isabelle S.",
      quote: "This is the only laundry and dry cleaning service I'll ever use in the city. Such a professional and vip experience plus the pick up and delivery were both so quick. Love this service!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      bgColor: "bg-yellow-400"
    },
    {
      id: 4,
      name: "Dylan A.",
      quote: "I'm all about Rinse. I actually have laundry in building now, but can't kick how easy Rinse makes it. Great service - don't know why people still do their own laundry.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      bgColor: "bg-orange-500"
    }
  ];

  const GoogleIcon = () => (
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-700">
        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    </div>
  );

  return (
    <section className={`py-16 px-6 lg:px-12 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
          What our customers have to say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-6 text-white relative overflow-hidden`}
            >
              {/* Google Icon */}
              <div className="mb-6">
                <GoogleIcon />
              </div>

              {/* Quote */}
              <blockquote className="text-white text-base leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white border-opacity-20"
                />
                <span className="font-semibold text-white">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;