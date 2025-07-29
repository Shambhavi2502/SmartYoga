import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleStartNow = () => {
    navigate('/yogaposes'); // Redirect to Yoga Poses page
  };

  return (
    <section className="bg-gradient-to-r from-white to-purple-500 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-black">
          <h2 className="text-4xl font-bold mb-4">Perfect Your Pose with AI-Powered Precision</h2>
          <p className="mb-8">
            Upload your video and let our intelligent system guide you to achieve the perfect yoga pose!
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleStartNow} // Attach navigation to button click
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-700 text-white font-semibold rounded-3xl hover:from-blue-600 hover:to-purple-800"
            >
              Start Now
            </button>
          </div>
        </div>

        {/* Right Section: GIF */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif"
            alt="Animated GIF"
            className="w-1/2 md:w-3/4 rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
