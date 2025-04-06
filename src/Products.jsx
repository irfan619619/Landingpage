// src/Products.jsx
import React from 'react';

// Static product data (example)
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is an amazing product.",
    price: "$25",
    imageUrl: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another great product.",
    price: "$30",
    imageUrl: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Product 3",
    description: "You will love this product.",
    price: "$40",
    imageUrl: "https://via.placeholder.com/200"
  }
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map(product => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold text-green-600">{product.price}</p>
            <button
              onClick={() => window.open("https://wa.me/6238917612")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
