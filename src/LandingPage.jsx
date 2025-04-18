import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Buy Stylish Watches, Shoes, Glasses & Caps Online</title>
        <meta
          name="description"
          content="Find top quality watches, shoes, glasses, and caps at affordable prices. Shop now and connect on WhatsApp!"
        />
        <meta
          name="keywords"
          content="watches, shoes, caps, glasses, stylish products, online shopping"
        />

        {/* ✅ Open Graph / WhatsApp Preview Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shop Watches, Shoes, Caps - Irfan's Store" />
        <meta property="og:description" content="Buy stylish products online. Direct WhatsApp purchase. Fast & easy!" />
        <meta property="og:image" content="https://landingpage-dun-mu.vercel.app/cover.jpg" />
        <meta property="og:url" content="https://landingpage-dun-mu.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="google-site-verification" content="u3QmJleMgBu4Ke6BoW1RVrtc4BOIrNm-g3llDnwLQnk" />
        <meta name="robots" content="index, follow" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2F65P2Q600"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2F65P2Q600');
    `}
  </script>
      </Helmet>

      {/* ✅ Background Image from /public/cover.jpg */}
      <div
        className="flex flex-col justify-center items-start min-h-screen bg-yellow-500 px-8 font-[Poppins]"
        style={{
          backgroundImage: `url('/background.jpg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-black max-w-xl">
          Where Quality Products Meet Exceptional Service.
        </h1>
        <p className="text-lg mb-8 text-black max-w-md">
          Check out our amazing products and services!
        </p>
        <button
          onClick={() => window.open("https://wa.me/6238917612")}
          className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition group"
        >
          Shop Now{" "}
          <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Products Section */}
      <div className="bg-yellow-100 px-8 py-12 font-[Poppins]">
        <h2 className="text-3xl font-bold text-black mb-8">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
