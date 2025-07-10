import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-b from-cyan-400 via-blue-700 to-purple-900 p-4 text-white flex items-center justify-between">
      <h1 className="text-2xl font-bold">artofhenil</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
        <Link to="/gallery" className="hover:text-yellow-300 transition duration-300">Gallery</Link>
        <Link to="/blog" className="hover:text-yellow-300 transition duration-300">Blog</Link>
        <Link to="/price" className="hover:text-yellow-300 transition duration-300">Pricing</Link>
        <Link to="/commission" className="hover:text-yellow-300 transition duration-300">Commission</Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={handleMenuClick}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-cyan-400 via-blue-700 to-purple-900 flex flex-col items-center py-4 space-y-4 text-lg z-50">
          <Link to="/" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">About</Link>
          <Link to="/gallery" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">Gallery</Link>
          <Link to="/blog" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">Blog</Link>
          <Link to="/price" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">Pricing</Link>
          <Link to="/commission" onClick={handleLinkClick} className="hover:text-yellow-300 transition duration-300">Commission</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
