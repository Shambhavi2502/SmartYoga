import React from 'react';
import feature1 from '../images/y1.PNG'; // Replace with your image paths
import feature2 from '../images/y2.PNG';
import feature3 from '../images/y3.PNG';

const Features = () => {
  const features = [
    {
      title: 'AI-Based Pose Analysis',
      description:
        'Get real-time feedback on your yoga poses using our advanced AI-powered pose detection technology.',
      img: feature1,
    },
    {
      title: 'Personalized Guidance',
      description:
        'Receive tailored tips and adjustments based on your unique posture and alignment.',
      img: feature2,
    },
    {
      title: 'Track Your Progress',
      description:
        'Monitor your improvement over time with detailed insights and analytics.',
      img: feature3,
    },
  ];

  return (
    <div className="bg-gradient-to-l from-purple-400 via-pink-50 to-blue-400 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-black-800 text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:backdrop-blur-lg hover:bg-opacity-50 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)',
                boxShadow: '0 6px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-black-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-black-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;