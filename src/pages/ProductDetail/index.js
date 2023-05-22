import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src="/path/to/product-image.jpg" alt="Product Image" className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Name</h1>
          <p className="text-gray-700 mb-4">Product description goes here...</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-semibold mr-2">Price:</span>
            <span className="text-indigo-700">$99.99</span>
          </div>
          <button className="bg-indigo-700 text-white py-2 px-4 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
