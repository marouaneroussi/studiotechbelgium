"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const videos = ["/videos/team.mp4", "/videos/studio.mp4"]; // your 2 videos
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ GSAP animation
      gsap.fromTo(
        ".video-header",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      // ✅ Auto-change video every 10 seconds
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, 6000); // change every 10s

      // cleanup
      return () => clearInterval(interval);
    }
  }, [videos.length]);

  return (
    <header className="relative w-full h-screen overflow-hidden video-header">
      {/* Background Video */}
      <video
        key={currentVideo} // Important for re-rendering when the source changes
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay + Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6">
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text animate-shimmer bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
            Professional Audiovisual Solutions
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 font-light opacity-90 leading-relaxed">
            Delivering cutting-edge broadcast technology and engineering excellence
          </p>

          <Link
            href="/solutions"
            className="inline-block py-4 px-10 bg-gradient-to-r from-[#fecc00] to-[#ff9900] rounded-full text-black font-semibold text-lg transition-transform duration-300 transform hover:scale-105"
          >
            Explore Our Solutions
          </Link>
        </div>

        {/* Animated Scroll Indicator */}
        <svg
          className="animate-bounce w-8 h-8 mt-10 absolute bottom-4 left-1/2 transform -translate-x-1/2"
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#facc15" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
