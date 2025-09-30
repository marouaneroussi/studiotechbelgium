import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h1 className="text-3xl font-bold text-center  text-[#fecc00] mb-16 mt-[70px]">
        Get in Touch
      </h1>
      <div className="contact-grid text-center">
        <div className="contact-item justify-center">
          <svg className="contact-icon w-full" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
          </svg>
          <h2 className="font-bold">Email Us</h2>
          <p>info@studiotech.be</p>
        </div>

        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 13h12v2H6zm0-4h12v2H6z"></path>
          </svg>
          <h2 className="font-bold">Request Quote</h2>
          <a
            href="https://example.com/quote"
            className="cta-button"
            style={{ background: "linear-gradient(45deg, #fecc00, #ff9900)" }}
          >
            Get Started
          </a>
        </div>

        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
          </svg>
          <h2 className="font-bold">Visit Us</h2>
          <p className="font-light">
            Houtweg 7
            <br />
            1130 Bruxelles, Belgium
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
