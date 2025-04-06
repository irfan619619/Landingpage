// src/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-black py-12 px-8 font-[Poppins]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Blackzy</h2>
          <p className="text-sm">
            Your go-to destination for premium quality products and unmatched customer service.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#"><FaFacebookF className="hover:text-blue-700" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-600" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-800" /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#shop" className="hover:underline">New Arrivals</a></li>
            <li><a href="#top-deals" className="hover:underline">Top Deals</a></li>
            <li><a href="#story" className="hover:underline">Our Story</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Extras</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-12 text-sm border-t pt-6 border-black/30">
        &copy; {new Date().getFullYear()} Blackzy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
