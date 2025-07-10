import React from "react";
import MyimageImg from "../assets/about-img.JPG";
import Footer from "./Footer";

function About() {
  return (
    <>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6">
  <div className="max-w-xl">
    <h2 className="text-3xl font-bold mb-4">My Artistic Journey...</h2>
    <p className="text-lg leading-relaxed">
      Since childhood, I have always loved drawing, making creative things, and doing craft work.
      I used to spend a lot of time trying to draw freehand, but in the beginning, my drawings
      were not very good. Even then, I never gave up and kept practicing.
      <br /><br />
      Later, I learned about the grid method and started using it in my drawings. This helped me
      draw better and get the right shapes and sizes. I also loved watching YouTube videos about
      sketching and art. I learned many tips and tricks from those videos and slowly improved my skills.
      <br /><br />
      Now, art is not just a hobby for me — it is a beautiful way to share my feelings, thoughts,
      and ideas through my drawings.
    </p>
  </div>

  <img
    src={MyimageImg}
    alt="about image"
    className="rounded-lg shadow-lg w-80 h-auto object-cover"
  />
</div>

<Footer /> </>
  );
}

export default About;
