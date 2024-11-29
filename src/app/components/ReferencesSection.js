import React from "react";

const ReferencesSection = () => {
  const logos = [
    {
      src: "/images/company_logo/evertz.svg",
      alt: "evertz",
    },
    {
      src: "/images/company_logo/arri.svg",
      alt: "arri",
    },
    {
      src: "/images/company_logo/aeta.svg",
      alt: "aeta",
    },
    {
      src: "/images/company_logo/aeq.png",
      alt: "aeq-international",
    },
    {
      src: "/images/company_logo/avid.svg",
      alt: "avid",
    },
    {
      src: "/images/company_logo/blueshape-logo.png",
      alt: "blueshape-logo",
    },
  ];

  return (
    <section className="references py-16 bg-gray-900 text-center">
      <h1 className="text-[2.5rem] font-bold text-[#fecc00] mb-20">
        Trusted by Industry Leaders
      </h1>

      <div className="reference-logos relative overflow-hidden py-6">
        <div
          className="carousel-container flex gap-12 animate-scroll whitespace-nowrap"
          style={{ animation: "scroll 40s linear infinite" }}
        >
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              width="80"
              height="80"
              className="reference-logo inline-block"
            />
          ))}
        </div>
        {/* View More Button */}
        <div className="view-more-container text-center mt-8">
          <a
            href="/partners"
            className="view-more-button inline-block px-8 py-3  bg-gradient-to-r from-[#fecc00] to-[#ff9900] text-gray-900 font-bold rounded-full transition-transform duration-300 hover:scale-105"
          >
            View All
          </a>
        </div>

        {/* Gradient masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-900"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-900"></div>
      </div>
    </section>
  );
};

export default ReferencesSection;
