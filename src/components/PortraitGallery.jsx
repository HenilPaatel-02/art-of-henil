import React, { useRef } from "react";
import RashmikaaImg from "../assets/Rashmikaaa.jpg";
import KiaraImg from "../assets/Kiaraadvani.jpeg";
import DeepikaImg from "../assets/Deepika.jpeg";
import RashmikaruImg from "../assets/Rashmikaru.jpg";
import AlluarjunImg from "../assets/Alluarjun.jpg";

const images = [
  { src: RashmikaaImg, title: "Rashmika Mandanna" },
  { src: KiaraImg, title: "Kiara Advani" },
  { src: DeepikaImg, title: "Deepika Padukone" },
  { src: RashmikaruImg, title: "Rashmika Mandanna" },
  { src: AlluarjunImg, title: "Allu Arjun" },
];

function PortraitGallery() {
  const scrollRef = useRef(null);

  const imageWidth = 260 + 24; // image width + margin-right (space-x-6 = 1.5rem = 24px)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -imageWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: imageWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black py-16">
      <h2 className="text-3xl text-center text-black font-bold mb-8">Portraits</h2>

      <div className="flex items-center justify-center px-4 space-x-4">
        {/* Left Arrow */}
<button
  onClick={scrollLeft}
  className="text-black text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center hover:opacity-90 transition"
>
  &#8249;
</button>


        {/* Scrollable Image Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide"
          style={{ scrollBehavior: "smooth", width: "1140px" }}
        >
          {images.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[260px]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <p className="text-center text-blue-100 mt-3 text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
<button
  onClick={scrollRight}
  className="text-black text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center hover:opacity-90 transition"
>
  &#8250;
</button>

      </div>
    </div>
  );
}

export default PortraitGallery;
