import React from "react";
import Footer from "./Footer";

function Blog() {
  const posts = [
    {
      title: "How to Start with Pencil Portraits",
      date: "July 2024",
      desc: "A beginner's guide to mastering pencil portrait techniques and choosing the right materials."
    },
    {
      title: "5 Tips for Watercolor Sketching",
      date: "June 2024",
      desc: "Learn essential tips for blending, layering, and preserving highlights in watercolor artworks."
    },
    {
      title: "Graphite & Charcoal",
      date: "May 2024",
      desc: "Understand the basics of working with graphite and charcoal, controlling shades."
    },
    {
      title: "Freehand Sketching for Beginners",
      date: "April 2024",
      desc: "Discover helpful exercises and mindset tips for improving your freehand drawing skills without grids or references."
    }
  ];

  return (
    <>
    <div
      id="blog"
      className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Art Blog</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="border border-gray-700 p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-850 mb-3">{post.date}</p>
            <p className="text-blue-100">{post.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <Footer /></>
  );
}

export default Blog;
