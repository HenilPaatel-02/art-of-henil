import React from "react";
import Footer from "./Footer";
import RashmikaaImg from "../assets/Rashmikaaa.jpg";
import KiaraImg from "../assets/Kiaraadvani.jpeg";
import DeepikaImg from "../assets/Deepika.jpeg";
import RashmikaruImg from "../assets/Rashmikaru.jpg";
import AlluarjunImg from "../assets/Alluarjun.jpg";

function Gallery() {
  const images = [
    { src: RashmikaaImg },
    { src: KiaraImg },
    { src: DeepikaImg },
    { src: RashmikaruImg },
    { src: AlluarjunImg },
  ];

  return (
    <>
    <div id="gallery" className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
<p className="text-2xl text-blue-100 font-semibold text-center mb-5">-: Here are some of my artworks :-</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {images.map((img, index) => (
<div key={index} className="overflow-hidden rounded-xl shadow-lg bg-gray-900 p-1">
        <div className="relative w-full" style={{ paddingTop: "125%" }}> 
              {/* 4:5 = 125% padding-top */}
              <img
                src={img.src}
                alt={`Artwork ${index + 1}`}
      className="absolute inset-0 w-full h-full object-contain rounded-lg bg-gray-800"
              />
              
            </div>
          </div>
          
        ))}
      </div>
    </div>

   <Footer /> </>
  );
}

export default Gallery;
