import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-300 to-red-100 py-10 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 relative">
        <h2 className="text-2xl font-bold text-black-800 mb-4">Disclaimer</h2>
        <p className="text-black-600 mb-4">
          <strong>Last Updated:</strong> 09-12-2024
        </p>
        <p className="text-black-600 mb-4">
          The information and services provided by the <span className="font-bold">Fitness Pro</span> are intended for educational and informational purposes only. The application is designed to assist users in improving their yoga poses by providing AI-based guidance. However, it is not a substitute for professional medical advice.
        </p>
        <h3 className="text-lg font-semibold text-black-800 mb-2">Key Points:</h3>
        <ul className="list-disc list-inside text-black-600 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Accuracy of Results:</span> While we strive to ensure the accuracy of pose analysis, the AI system may not always detect errors or provide fully accurate feedback. Users should exercise caution and rely on their own judgment when performing yoga poses.
          </li>
          <li>
            <span className="font-semibold">Physical Limitations:</span> Always consider your own physical condition and limitations before attempting any yoga pose. If you experience discomfort or pain, stop immediately and consult a healthcare professional.
          </li>
          <li>
            <span className="font-semibold">Professional Advice:</span> This website does not provide medical or therapeutic advice. For personalized guidance or if you have any health concerns, consult with a certified yoga instructor or healthcare provider.
          </li>
          <li>
            <span className="font-semibold">Liability:</span> Yoga Pose Checker and its creators are not liable for any injuries, accidents, or adverse effects that may occur from using this application. Use of the service is at your own risk.
          </li>
          <li>
            <span className="font-semibold">Use by Minors:</span> Children under 18 years of age should only use this website under the supervision of a parent or guardian.
          </li>
          <li>
            <span className="font-semibold">Data Privacy:</span> Your privacy is important to us. Please refer to our Privacy Policy for information on how your data is collected and used.
          </li>
        </ul>
        <p className="text-black-600 mb-4">
          By using this website, you acknowledge that you have read and agreed to this disclaimer.
        </p>
        <p className="text-black-600">
          <strong>Contact Us:</strong> For any questions or concerns, please reach out to us.
        </p>
        {/* Add decorative effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 opacity-10 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Disclaimer;