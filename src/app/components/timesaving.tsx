import React from 'react';

interface Activity {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface TimeSavingsProps {
  activities?: Activity[];
}

const TimeSavingsSection: React.FC<TimeSavingsProps> = ({ activities }) => {
  const defaultActivities: Activity[] = [
    {
      id: 1,
      title: "Enjoy the outdoors.",
      description: "You'll save 3+ hours every two weeks - enough time to enjoy hikes at beautiful Muir Woods and Mount Diablo."
    },
    {
      id: 2,
      title: "Visit a museum.",
      description: "You'll save 6+ hours each month - enough time to spend a day at the Cal Academy of Sciences or the de Young Museum."
    },
    {
      id: 3,
      title: "Get out of town.",
      description: "You'll save 72+ hours a year - enough time for a long weekend at Lake Tahoe."
    }
  ];

  const activitiesToShow = activities || defaultActivities;

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What will you do with the 3+ hours you'll save?
          </h2>
          <p className="text-lg text-gray-600">
            Using our most popular 2-bag plan, you'll save enough time to:
          </p>
        </div>
        
        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {activitiesToShow.map((activity) => (
            <div key={activity.id} className="text-center">
              {/* Circular Image */}
              <div className="mb-8 flex justify-center">
                {activity.image ? (
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-80 h-80 rounded-full object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-80 h-80 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                    <span className="text-gray-400 text-lg">Activity Image</span>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activity.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSavingsSection;