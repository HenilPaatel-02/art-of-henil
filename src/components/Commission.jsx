import React from "react";
import Footer from "./Footer";
import Commish1Img from "../assets/commish1.jpeg";
import Commish2Img from "../assets/commish2.jpeg";
import Commish3Img from "../assets/commish3.jpeg";
import Commish4Img from "../assets/commish4.jpg";

function Commission() {
  return (
    <>
      <div
        id="commission"
        className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black text-center"
      >
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
          Commission an Artwork
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-blue-100 space-y-2">
          🎨 Try a unique handmade portrait sketch for your loved ones. <br />
          🎁 Surprise them with a personalized artwork made just for them. <br />
          🎉 Perfect for birthdays, anniversaries 💖, weddings 💍, and special
          occasions. <br />
          🖼️ Some of my commission works are shown below. <br />
          📩 Get in touch if you'd like to order a custom portrait!
        </p>

        <a
          href="mailto:artofhenil@gmail.com"
          className="bg-yellow-400 text-black text-lg font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition duration-300 shadow-xl"
        >
          📩 Contact for Commission
        </a>

        {/* Image Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 px-4 max-w-5xl mx-auto">
          {[Commish1Img, Commish2Img, Commish3Img, Commish4Img].map(
            (src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Sample ${idx + 1}`}
                className="rounded-2xl shadow-2xl w-64 transform hover:scale-105 transition duration-300"
              />
            )
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Commission;
