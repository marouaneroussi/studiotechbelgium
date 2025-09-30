// src/app/components/AboutSection.js
import React from "react";
import "./AboutSection.css";
const AboutSection = ({ title, sections }) => {
  return (
    <section
      className="about-section"
      style={{
        padding: "6rem 2rem",
        background: "var(--accent2)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            color: "var(--accent1)",
            fontSize: "2.5rem",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </h2>

        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.02)",
              padding: "2rem",
              borderRadius: "15px",
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            {section.subtitle && (
              <h3
                style={{
                  color: "var(--accent1)",
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                }}
              >
                {section.subtitle}
              </h3>
            )}
            {section.content.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom:
                    idx === section.content.length - 1 ? "0" : "1.5rem",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
