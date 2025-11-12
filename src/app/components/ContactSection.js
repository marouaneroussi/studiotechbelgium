import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section py-20">
      <h1 className="text-3xl font-bold text-center text-[#fecc00] mb-16">
        Get in Touch
      </h1>

      <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center px-6">
        
        {/* Email */}
        <div className="contact-item flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
          <svg className="contact-icon w-16 h-16 text-[#fecc00]" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
          </svg>

          <h2 className="font-semibold text-lg">Email Us</h2>
          <p className="opacity-80">info@studiotech.be</p>
        </div>

        {/* Quote */}
        <div className="contact-item flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
          <svg className="contact-icon w-16 h-16 text-[#fecc00]" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 13h12v2H6zm0-4h12v2H6z"></path>
          </svg>

          <h2 className="font-semibold text-lg">Request Quote</h2>

          <a
            href="https://example.com/quote"
            className="cta-button text-black font-semibold px-6 py-3 rounded-full mt-2"
            style={{ background: "linear-gradient(45deg, #fecc00, #ff9900)" }}
          >
            Get Started
          </a>
        </div>

        {/* Location */}
        <div className="contact-item flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
          <svg className="contact-icon w-16 h-16 text-[#fecc00]" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
          </svg>

          <h2 className="font-semibold text-lg">Visit Us</h2>
          <p className="opacity-80 leading-6">
            Houtweg 7 <br /> 1130 Bruxelles, Belgium
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
