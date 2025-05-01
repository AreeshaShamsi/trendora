import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg w-full h-64 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <span className="text-lg font-bold text-green-500">${product.price}</span>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

