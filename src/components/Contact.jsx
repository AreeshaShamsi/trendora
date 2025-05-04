import React,{ useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer'; // Adjust the import path as needed

export default function Contact() {
  
    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        {/* Animated Contact Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4">
            Contact <span className="text-green-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="w-full mt-6 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 focus:outline-none transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
