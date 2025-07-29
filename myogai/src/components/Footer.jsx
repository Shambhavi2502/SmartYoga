import React from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok, FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8">
        {/* About Section */}
        <div className="flex flex-wrap justify-center items-center space-x-6">
  <h3 className="text-lg font-bold"><Link
            to="/about"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >About </Link></h3>
  <h3 className="text-lg font-bold"><Link
            to="/how-it-works"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >How It Works</Link></h3>
  <h3 className="text-lg font-bold"><Link
            to="/Blog"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >Blog</Link></h3>
  <h3 className="text-lg font-bold"><Link
            to="/Disclaimer"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >Disclaimer</Link></h3>
  
  <h3 className="text-lg font-bold"> <Link
            to="/contact"
            className="font-bold text-black-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:py-2 hover:px-4 hover:rounded-lg transition duration-300"
          >Contact Us</Link></h3>
</div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
            <a href="https://www.tiktok.com" aria-label="Tiktok" className="hover:text-gray-400">
              <FaTiktok size={24} />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.github.com" aria-label="GitHub" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Fitness Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
