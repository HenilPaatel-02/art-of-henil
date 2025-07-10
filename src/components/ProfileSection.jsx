import React from "react";
import profilePhoto from "../assets/profile-photo.png";

function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black py-10 px-6 -mt-8">
      
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-52 h-52 rounded-full mb-6 md:mb-0 md:mr-8"
      />

      <div className="text-center md:text-left">
        <p className="max-w-xl text-lg">
          🎨 <strong>Henil Patel</strong> | Self-taught Artist <br />
          🖤 Black & White Sketches | 🎨 Color Sketches <br />
          ✨ Turning emotions & stories into art <br />
          📍 Welcome to my art world!
        </p>

        <a href="https://www.instagram.com/art_of_henil" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 bg-pink-500 px-6 py-2 rounded hover:bg-pink-600">
            Follow on Instagram
          </button>
        </a>
      </div>
      
    </div>
  );
}

export default ProfileSection;
