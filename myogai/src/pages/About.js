import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import yogaGif from '../images/y3.gif'; // Replace with the path to your GIF

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white  to-blue-500 py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-black-800 mb-4">Fitness Pro</h2>
          <p className="text-black-700 text-lg mb-6">
            Welcome to the <span className="font-bold">Fitness Pro</span>, your ultimate companion in mastering yoga poses! Powered by advanced AI and computer vision technologies, this tool provides real-time feedback on your poses, helping you refine your techniques and improve your practice.
          </p>
          <p className="text-black-700 text-lg mb-6">
            Whether you're a beginner looking to learn yoga or a seasoned practitioner aiming for perfection, our system is designed to guide you. By analyzing your body posture and alignment, we aim to make yoga more accessible and enjoyable for everyone.
          </p>
          <p className="text-black-700 text-lg mb-6">
            Inspired by the <span className="font-bold">Fit India Mission</span>, the Yoga Pose Checker encourages a healthy and active lifestyle. Join us on this journey to better health and well-being, one pose at a time.
          </p>
          <Link to="/how-it-works">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* GIF Section */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={yogaGif}
              alt="Yoga Pose Checker GIF"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;