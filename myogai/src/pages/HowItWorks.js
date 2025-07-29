import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-400 to-pink-400 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-black-800 text-center mb-12">How It Works</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black-800 mb-4">Step 1: Open the Website</h3>
            <p className="text-black-600">Start by visiting the website and clicking the "start" button.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black-800 mb-4">Step 2: Grant Camera Access</h3>
            <p className="text-black-600">Allow access to your webcam for pose detection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black-800 mb-4">Step 3: Wait for Loading</h3>
            <p className="text-black-600">Wait for the workout to load. Ensure the camera is connected.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black-800 mb-4">Step 4: Adjust Settings</h3>
            <p className="text-black-600">Customize settings based on your preferences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black-800 mb-4">Step 5: Follow the Demo</h3>
            <p className="text-black-600">Follow the demo for guidance and ensure proper lighting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
