import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/trendora.png'; // adjust path as needed
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white font-sans sticky top-0 z-50 shadow-md">
      <header className="flex items-center justify-between px-3 py-2 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <img src={logo} alt="Trendora Logo" className="h-auto w-16" />
        </div>

        {/* Desktop Menu */}
        <nav className="space-x-3 text-base text-gray-600 hidden md:flex">
          <Link to="/" className="hover:text-black hover:underline">Home</Link>
          <Link to="/about" className="hover:text-black hover:underline">About</Link>
          <Link to="/product" className="hover:text-black hover:underline">All Products</Link>
          <Link to="/contact" className="hover:text-black hover:underline">Contact Us</Link>
        </nav>

        {/* Cart and Search Group */}
        <div className="flex items-center gap-3 hidden md:flex">
          <ShoppingCart className="cursor-pointer" />
          <input
            type="text"
            placeholder="Search Products..."
            className="border px-2 py-0.5 rounded-md text-base"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-gray-700">
          <Link to="/" className="block hover:text-black">Home</Link>
          <Link to="/about" className="block hover:text-black">About</Link>
          <Link to="/product" className="block hover:text-black">All Products</Link>
          <Link to="/contact" className="block hover:text-black">Contact Us</Link>
          <div className="pt-2">
            <ShoppingCart className="cursor-pointer" />
          </div>
          <input
            type="text"
            placeholder="Search Products..."
            className="border px-3 py-1 rounded-md text-sm w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
