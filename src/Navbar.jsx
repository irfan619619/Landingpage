// src/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-yellow-200 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Links */}
      <div className="flex gap-6 text-gray-800 font-medium">
        <a href="#shop" className="hover:text-black">Shop</a>
        <a href="#pages" className="hover:text-black">Pages</a>
        <a href="#story" className="hover:text-black">Our Story</a>
      </div>

      {/* Brand name in the center */}
      <div className="text-2xl font-bold text-black tracking-wide">
        Blackzy
      </div>

      {/* Search bar on the right */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
