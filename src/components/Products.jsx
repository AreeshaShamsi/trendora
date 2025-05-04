import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
  {
    id: "5",
    title: "COOFANDY Men's Shirt",
    description: "Stylish and comfortable casual shirt",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/714bo238cPL._AC_SY550_.jpg",
  },
  {
    id: "6",
    title: "Men's Suit",
    description: "Elegant and modern suit for formal occasions",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71b+2OodfAL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: "7",
    title: "Women's Cocktail Dress",
    description: "Stylish and elegant dress for parties and formal occasions",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/81U0w7wjh0L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: "8",
    title: "Women's Button Shirt",
    description: "Stylish and elegant shirt for casual outings",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/71uF6AjW4yL._AC_SX466_.jpg",
  },
];

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Our <span className="text-green-500">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find What You Love. Love What You Buy.
          </p>
        </motion.div>

        {/* Product Display Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <Link to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Product Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Product</h2>
          <p className="text-gray-600 mb-8">
            Loved by thousands, worn by trendsetters — this bestseller brings confidence and comfort together.
          </p>

          <Link to="/product/1">
            <img
              src="https://m.media-amazon.com/images/I/613FwRzUNLL._SY741_.jpg"
              alt="Featured Product"
              className="rounded-2xl shadow-lg max-w-2xl mx-auto h-auto w-80 hover:scale-105 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
