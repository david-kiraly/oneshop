import React from 'react';
import products from '../data/products';

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            {product.salePrice && (
              <p className="text-red-600 mb-2">Sale Price: ${product.salePrice}</p>
            )}
            <p className="text-gray-700 mb-2">Description: {product.description}</p>
            <p className="text-gray-700 mb-2">Quantity: {product.quantity}</p>
            <p className="text-gray-700 mb-2">Category: {product.category}</p>
            <img className="w-full rounded-md" src={product.image} alt={product.name} />
          </div>
        ))} */}
        Awesome
      </div>
    </div>
  );
};

export default Page;
