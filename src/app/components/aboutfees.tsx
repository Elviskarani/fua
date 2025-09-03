import React from 'react';

const AboutFeesComponent = () => {
  const fees = [
    {
      id: 1,
      price: '20bob',
      title: 'Service Fee',
      description: 'It helps cover our operational costs and ensure we can provide the best experience possible.',
      badge: null
    },
    {
      id: 2,
      price: '50bob',
      title: 'Pickup & Delivery Fee',
      description: (
        <>
          This fee covers the cost of picking up and delivering your clothes. 
          Waive this fee on all your orders by{' '}
          <span className="text-orange-500 font-semibold">subscribing to Fua Go</span>{' '}
          for just 150bob/mo or 1500bob/yr.
        </>
      ),
      badge: null
    },
    {
      id: 3,
      price: '200bob',
      title: 'Next-Day Rush Service',
      description: 'With Next-Day Rush Service, you get your clothes back in 24 hours.',
      badge: 'OPTIONAL'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            About our fees
          </h2>
        </div>

        {/* Fee Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {fees.map((fee) => (
            <div key={fee.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-400 mb-1">{fee.price}</p>
                    <h3 className="text-xl font-bold text-gray-900">{fee.title}</h3>
                  </div>
                  {fee.badge && (
                    <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {fee.badge}
                    </span>
                  )}
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {fee.description}
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-cyan-500 font-semibold text-sm">
                      Free for Fua Repeat subscribers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl mx-auto">
            All orders have a minimum order value of 1000.0, excluding fees. There is no minimum order for Fua Repeat subscribers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFeesComponent;