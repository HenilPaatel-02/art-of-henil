import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Price from "./components/Price";
import Commission from "./components/Commission";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero /> } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/price" element={<Price />} />
          <Route path="/commission" element={<Commission />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;