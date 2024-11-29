"use client";
import Link from "next/link";
import gsap from "gsap";

import React, { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const animate = () => {
        gsap.from(".video-header", { opacity: 0, duration: 1, y: 50 });
      };
      window.addEventListener("load", animate);
      return () => window.removeEventListener("load", animate);
    }
  }, []);
  return (
    <header className="relative w-full h-screen overflow-hidden video-header">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/studio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center header-content">
        <div className=" p-8 z-10">
          <h1 className="text-[4rem]  font-bold mb-8 text-transparent bg-clip-text animate-shimmer bg-gradient-to-r from-yellow-400 to-yellow-300">
            Professional Audiovisual Solutions
          </h1>
          <p className="text-[1.5rem]  justify-center mb-8 text-gray-200 font-light  opacity-80">
            Delivering cutting-edge broadcast technology and engineering
            excellence
          </p>
          <Link
            href="/solutions"
            className="inline-block py-4 px-8 bg-gradient-to-r from-[#fecc00] to-[#ff9900]  rounded-full text-black font-bold mt-4 transition-transform duration-300 transform hover:scale-105"
          >
            Explore Our Solutions
          </Link>
        </div>
        <svg
          className="animate-bounce w-10 h-10 mt-4 absolute bottom-[1px] left-1/2 transform -translate-x-1/2"
          fill="yellow"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
