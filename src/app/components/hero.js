import React from "react";

const Hero = ({ title, desc, back }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="partner-hero">
        <div
          className="hero-bg-container"
          style={{
            background: `url(${back})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            <p>{desc}</p>
            <div className="hero-decorations">
              <div className="floating-particle"></div>
              <div className="floating-particle"></div>
              <div className="floating-particle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
