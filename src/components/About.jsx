import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import Footer from './Footer'; // Adjust the import path as needed
import ourstory from '../assets/ourstory.png'; // Make sure you have an image and path is correct

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4">
            About <span className="text-green-500">Our Store</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering premium products with unmatched quality and style.
            Our journey is fueled by passion, innovation, and a deep commitment to our customers.
          </p>
        </motion.div>

        {/* Animated Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Quality Products", description: "We handpick every item to ensure top-notch craftsmanship and durability." },
            { title: "Fast Delivery", description: "Quick, safe, and reliable delivery to your doorstep." },
            { title: "Customer First", description: "Your satisfaction is our mission — exceptional service guaranteed." }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-green-500 mb-3">{value.title}</h2>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-8">
            Trendora was born from a love for fashion and individuality. 
            From humble beginnings to becoming a trusted brand, our journey has always been about empowering people to express themselves through style. 
            We blend creativity, quality, and sustainability in every collection — making sure you not only look good but feel good too.
          </p>

          {/* Insert Image after story */}
          <img 
            src={ourstory} 
            alt="Our Story" 
            className="rounded-2xl shadow-lg max-w-2xl mx-auto h-auto w-80"
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
