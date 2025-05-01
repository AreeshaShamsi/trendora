import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/trendora-white.png';  

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-16 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={logo}
            alt="Trendora Logo"
            className="w-48 h-auto object-contain"
          />
          <p className="text-gray-400 text-sm max-w-[250px] text-center md:text-left">
            Your fashion destination. Elevate your style with Trendora.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <div className="flex flex-col gap-2 text-gray-400">
          <a href="#" className="hover:text-green-400 transition">Home</a>
            <a href="#" className="hover:text-green-400 transition">About </a>
            <a href="#" className="hover:text-green-400 transition">All Products</a>
            <a href="#" className="hover:text-green-400 transition">Contact</a>
            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-green-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-green-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-green-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Trendora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
