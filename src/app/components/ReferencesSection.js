"use client";
import Image from "next/image";
import React from "react";

const ReferencesSection = () => {
  const logos = [
    { src: "/images/company_logo/evertz.svg", alt: "evertz" },
    { src: "/images/company_logo/arri.svg", alt: "arri" },
    { src: "/images/company_logo/vislink.svg", alt: "vislink" },
    { src: "/images/company_logo/Vinten.svg", alt: "vinten" },
    { src: "/images/company_logo/sony.png", alt: "sony" },
    { src: "/images/company_logo/NewTek_logo.svg", alt: "NewTek" },
    { src: "/images/company_logo/blackmagic.svg", alt: "blackmagic" },
    { src: "/images/company_logo/aveco.svg", alt: "aveco" },
    { src: "/images/company_logo/autocue.png", alt: "autocue" },
    { src: "/images/partners/10_planar_logo_1.png", alt: "planar" },
    { src: "/images/company_logo/tsl-products.png", alt: "tsl product" },
    { src: "/images/company_logo/autoscript_logo.svg", alt: "autoscript" },
    { src: "/images/company_logo/apantac.svg", alt: "apantac" },
    { src: "/images/company_logo/aeta.svg", alt: "aeta" },
    { src: "/images/company_logo/aeq.png", alt: "aeq" },
    { src: "/images/company_logo/avid.svg", alt: "avid" },
    { src: "/images/company_logo/blueshape-logo.png", alt: "blueshape" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-center overflow-hidden relative">
      {/* Title */}
      <h1 className="text-[2.5rem] font-bold text-[#fecc00] mb-16">
        Trusted by Industry Leaders
      </h1>

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-12 animate-scroll whitespace-nowrap"
          style={{
            animation: "scroll 40s linear infinite",
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 relative"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
      </div>

      {/* View More Button */}
      <div className="mt-14">
        <a
          href="/partners"
          className="inline-block px-10 py-3 bg-gradient-to-r from-[#fecc00] to-[#ff9900] text-[#0a0a0a] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View All
        </a>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ReferencesSection;
