import React from "react";
import Footer from "./Footer";

const Price = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Pricing</h1>
        <p className="text-lg text-blue-100 mb-10 text-center max-w-2xl">
          🎨 Now accepting orders for your custom, hand-made artwork!
        </p>

        {/* Black & White Sketch */}
        <h2 className="text-4xl font-bold mb-6">Black & White Sketch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 w-full max-w-6xl">
          {[
            { size: "A4", single: 1799, couple: 2499, color: "pink" },
            { size: "A3", single: 2299, couple: 2999, color: "green" },
            { size: "A2", single: 3199, couple: 4199, color: "blue" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-xl bg-white/10 rounded-3xl shadow-xl p-8 border-t-4 border-${item.color}-400`}
            >
              <h3 className="text-3xl font-bold mb-4">{item.size}</h3>
              <p className="text-lg mb-3">
                <span className="text-white">Rs. {item.single}</span>{" "}
                <span className="text-blue-100 text-sm">/single</span>
              </p>
              <p className="text-lg">
                <span className="text-white">Rs. {item.couple}</span>{" "}
                <span className="text-blue-100 text-sm">/couple</span>
              </p>
            </div>
          ))}
        </div>

        {/* Color Sketch */}
        <h2 className="text-4xl font-bold mb-6">Color Sketch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 w-full max-w-6xl">
          {[
            { size: "A4", single: 2799, couple: 3499, color: "pink" },
            { size: "A3", single: 3299, couple: 3999, color: "green" },
            { size: "A2", single: 4999, couple: 5999, color: "blue" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-xl bg-white/10 rounded-3xl shadow-xl p-8 border-t-4 border-${item.color}-400`}
            >
              <h3 className="text-3xl font-bold mb-4">{item.size}</h3>
              <p className="text-lg mb-3">
                <span className="text-white">Rs. {item.single}</span>{" "}
                <span className="text-blue-100 text-sm">/single</span>
              </p>
              <p className="text-lg">
                <span className="text-white">Rs. {item.couple}</span>{" "}
                <span className="text-blue-100 text-sm">/couple</span>
              </p>
            </div>
          ))}
        </div>
{/* Notes Section */}
<div className="flex justify-center w-full mb-16 px-4">
  <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 shadow-2xl max-w-3xl transition duration-300 hover:scale-[1.02]">
    <h3 className="text-3xl font-extrabold mb-6 text-black drop-shadow text-center">📝 Important Notes</h3>
    <ul className="list-disc list-inside space-y-5 text-black text-lg leading-relaxed">
      <li>💯 Fixed properly with high-quality fixative spray.</li>
      <li>🎨 50% payment to be made in advance.</li>
      <li>✨ 50% after sketch completion.</li>
      <li>📦 Safe courier packaging for secure delivery.</li>
      <li>📩 Free shipping within India. Frames not included.</li>
      <li>💳 <strong>Mode of Payment :</strong> Google Pay, Paytm</li>
    </ul>
  </div>
</div>


        {/* Contact Button */}
        <a
          href="https://www.instagram.com/art_of_henil"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 text-purple-700 text-2xl font-bold py-4 px-10 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 shadow-2xl"
        >
          📞 Contact Now
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Price;
