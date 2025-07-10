import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black py-6 px-4">
      {/* Top Border Line */}
      <hr className="border-t border-gray-200 mb-4" />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-lg mb-4 md:mb-0">
          Handcrafted with ❤️ © 2025 artofhenil. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/art_of_henil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-black hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.youtube.com/@art_of_henil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-3xl text-black hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
