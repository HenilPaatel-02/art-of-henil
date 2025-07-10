import React from "react";
import ProfileSection from "./ProfileSection";
import PortraitGallery from "./PortraitGallery";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import BgPicImg from "../assets/bgpic.jpg";


function Hero() {
  return (
    <>
<div
  className="text-center text-white py-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${BgPicImg})` }}
>
        <h1 className="text-4xl font-bold">"The only time I feel alive is when I'm painting."</h1>
        <p className="mt-4 text-lg">~ Vincent Van Gogh</p>
        <div className="flex justify-center mt-6 space-x-4">

           <div className="flex flex-wrap gap-4 justify-center mt-4">
  <Link to="/gallery">
    <button className="bg-[#4681F4] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#316CD9] transition duration-300 transform hover:scale-105">
      Gallery
    </button>
  </Link>

  <Link to="/price">
    <button className="bg-[#8A4FFF] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#763DE5] transition duration-300 transform hover:scale-105">
      Pricing
    </button>
  </Link>

  <Link to="/commission">
    <button className="bg-[#FF4FBE] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#E63CA9] transition duration-300 transform hover:scale-105">
      Commission
    </button>
  </Link>
</div>

        </div>
      </div>

      <ProfileSection />

 {/* Divider Line */}
      <div className="border-t border-gray-200 mx-auto"></div>
      

      <PortraitGallery />

      <Footer />
    </>
  );
}

export default Hero;
