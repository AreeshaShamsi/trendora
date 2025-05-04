import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FeaturedICollection from './FeaturedItems';
import PromoSection from './Promo';
import Footer from './Footer';

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Oversized Casual",
      price: "$29.45",
      image: "https://m.media-amazon.com/images/I/613FwRzUNLL._SY741_.jpg",
    },
    {
      id: 2,
      name: "Elegant Streetwear",
      price: "$34.99",
      image: "https://m.media-amazon.com/images/I/71kE75JMKjL._SY741_.jpg",
    },
    {
      id: 3,
      name: "Gucci Formal Suit",
      price: "$56.80",
      image: "https://m.media-amazon.com/images/I/41WnVopbZvL._SY741_.jpg",
      highlight: "+480 View",
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="text-center px-4 py-10 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center mb-12"
        >
          DIVE INTO A WORLD OF ENDLESS <br className="hidden md:block" />
          <span className="text-green-500">FASHION POSSIBILITIES</span>
        </motion.h1>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Discover Your Wardrobe with our Fashion Finds. Discover Your Signature Style for Fashion Autumn.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">SHOP NOW</button>
          <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">EXPLORE MORE PRODUCTS</button>
        </div>
      </section>

      {/* Products Preview */}
      <section className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-gray-100 p-4 rounded-xl text-left relative hover:shadow-lg transition">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              {product.highlight && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
                  {product.highlight}
                </div>
              )}
              <div className="mt-4">
                <p className="text-black font-semibold">{product.name}</p>
                <p className="text-sm text-black-500 mt-2">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <FeaturedICollection />
      <PromoSection />
      <Footer />
    </>
  );
};

export default HeroSection;
