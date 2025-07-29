import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../images/ylogo.PNG'; // Import logo image

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 ml-2">
        {/* Logo Image */}
        <div className="flex items-center">
          <Link to="/home">
            <img
              src={logo} // Replace with your actual logo URL
              alt="Fitness Pro Logo"
              className="h-15" // Adjust the size as needed
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8"> 
          <Link
            to="/home"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >
            How it works
          </Link>
          <Link
            to="/features"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
