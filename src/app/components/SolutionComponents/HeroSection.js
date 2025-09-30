"use client"; // Ensure this is a client-side component

import React, { useEffect } from "react";
import "./HeroSection.css"; // Link to your styles for the HeroSection component
import Link from "next/link";

const HeroSection = ({
  hasparticles,
  hasBanner,
  title,
  description,
  image,
}) => {
  useEffect(() => {
    // Ensure code only runs in the browser (client-side)
    if (typeof window !== "undefined" && hasparticles) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/particles.js";
      script.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#fecc00" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3, random: true },
            line_linked: { enable: true, color: "#fecc00", opacity: 0.2 },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
          },
          retina_detect: true,
        });
      };
      document.body.appendChild(script);

      // Cleanup function to remove the script if the component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [hasparticles]);

  return (
    <div
      id="particles-js"
      className="hero-section"
      style={
        hasBanner
          ? {}
          : {
              background: image,
            }
      }
    >
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link
          href="/"
          className="inline-block py-4 px-8 bg-gradient-to-r from-[#fecc00] to-[#ff9900]  rounded-full text-black font-bold mt-4 transition-transform duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
