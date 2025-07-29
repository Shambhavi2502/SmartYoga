import React from 'react';
import feature1 from '../images/vajrasana.webp'; // Replace with your image paths
import feature2 from '../images/Virasana(Hero Pose).jpg';
import feature3 from '../images/Tadasana.jpg';
import feature4 from '../images/Ardha uttanasana.jpg'; // Replace with your image paths
import feature5 from '../images/Anantasana.jpg';
import feature6 from '../images/Adho Mukha Svanasana.jpg';
import feature7 from '../images/Vrikshasana.jpg'; // Replace with your image paths
import feature8 from '../images/Child’s Pose.jpg';


const YogaPoses = () => {
  const poses = [
    {
      name: 'Vajrasana(Diamond pose)',
      description: 'Popular pose  known for its health benefits, including improved digestion, reduced back pain, and better focus.',
      image: feature1,
    },
    {
      name: 'Virasana(Hero Pose)',
      description: 'Virasana (Hero Pose) improves posture, stretches the thighs and ankles, and promotes digestion while calming the mind.',
      image: feature2,
    },
   {
  name: 'Tadasana (Mountain Pose)',
  description: 'Tadasana (Mountain Pose) improves posture, enhances body alignment, and increases focus and stability.',
  image: feature3,
  style: { height: '150px', objectFit: 'cover' }, // Adjust the height here
}
,
    {
      name: 'Ardha uttanasana( Half-standing forward bend)',
      description: 'Ardha uttanasana stretches the hamstrings, calves, and back, and strengthens the core and spine. It can also improve posture and balance, relieve tension, and boost the immune system.',
      image: feature4,
    },
    {
        name: 'Anantasana(Side-Reclining Leg Lift Pose)',
        description: 'Anantasana  enhances flexibility, strengthens core and leg muscles, and improves balance and concentration.',
        image: feature5,
      },
      {
        name: 'Adho Mukha Svanasana (Downward Dog Pose)',
        description: 'Adho Mukha Svanasana (Downward Dog Pose) stretches the spine, strengthens the arms and legs, and calms the mind while improving blood circulation.',
        image: feature6,
      },
      {
        name:'Vrikshasana(Tree Pose)',
        description:'Vrikshasana enhances balance, strengthens leg muscles, and promotes focus and stability.',
        image:feature7,
      },
      {
        name: 'Child’s Pose (Balasana)',
        description: 'Balasana gently stretches the back, hips, and thighs while calming the mind and relieving stress.',
        image: feature8,
      },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">Select a Pose to Practice</h1>
      
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {poses.map((pose, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img src={pose.image} alt={pose.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{pose.name}</h3>
              <p className="text-gray-600">{pose.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaPoses;
