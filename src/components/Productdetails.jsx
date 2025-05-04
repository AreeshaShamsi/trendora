import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const sampleProducts = [
  {
    id: "1",
    name: "Oversized Casual",
    price: "$29.45",
    image: "https://m.media-amazon.com/images/I/613FwRzUNLL._SY741_.jpg"
  },
  {
    id: "2",
    name: "Elegant Streetwear",
    price: "$34.99",
    image: "https://m.media-amazon.com/images/I/71kE75JMKjL._SY741_.jpg"
  },
  {
    id: "3",
    name: "Gucci Formal Suit",
    price: "$56.80",
    image: "https://m.media-amazon.com/images/I/41WnVopbZvL._SY741_.jpg"
  },
  {
    id: "5",
    name: "COOFANDY Men's Shirt",
    description: "Stylish and comfortable casual shirt",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/714bo238cPL._AC_SY550_.jpg",
  },
  {
    id: "6",
    name: "Men's Suit",
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

export default function Productdetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // scrolls to top when component mounts or product ID changes

  const product = sampleProducts.find(p => p.id === id);

  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-10">
        <img src={product.image} alt={product.name} className="w-80 mx-auto" />
        <h2 className="text-2xl mt-4 font-semibold text-center">{product.name}</h2>
        <p className="text-center text-gray-600">{product.price}</p>

        <div className="flex justify-center mt-4">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Add to Cart
          </button>
        </div>

        {/* Size Selection */}
        <div className="flex justify-center mt-6 space-x-4">
          {['S', 'M', 'L'].map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-gray-200 transition`}
            >
              {size}
            </button>
          ))}
        </div>

        <p className="text-center text-sm mt-2 text-gray-500">
          Selected size: {selectedSize}
        </p>
      </div>
      <Footer />
    </>
  );
}
