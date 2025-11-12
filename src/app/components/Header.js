"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const videos = ["/videos/team.mp4", "/videos/studio.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    // ✅ Entrance animation
    gsap.fromTo(
      ".header-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // ✅ Smooth fade-in video transition
    gsap.fromTo(
      ".header-video",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // ✅ Auto change videos every 6 seconds
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background Video Layer */}
      <video
        key={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        className="header-video absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* ✅ Soft gradient overlay for premium look */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* ✅ Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 header-content">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-md animate-pulse-slow">
          Professional Audiovisual Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-200 font-light opacity-90 max-w-2xl leading-relaxed mb-10">
          Delivering cutting-edge broadcast technology and engineering excellence.
        </p>

        {/* ✅ Main CTA */}
        <Link
          href="/solutions"
          className="inline-block py-4 px-10 rounded-full text-black font-semibold text-lg bg-gradient-to-r from-[#fecc00] to-[#ff9900] shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          Explore Our Solutions
        </Link>

        {/* ✅ Upgraded Scroll Indicator */}
        <div className="absolute bottom-8">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-1 h-6 rounded-full bg-yellow-400 mb-2"></div>
            <svg
              className="w-7 h-7 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
