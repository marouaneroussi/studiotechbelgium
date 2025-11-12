// src/app/components/TechnicalSpecificationsSection.js
import React from "react";
import "./Technical.css";

const TechnicalSpecificationsSection = ({
  title,
  description,
  specifications,
  infrastructure,
  svgContent,
}) => {
  return (
    <section
      className="text-content-section"
      style={{ background: "var(--bg)", padding: "4rem 2rem" }}
    >
      <h2 className="section-title ">{title}</h2>

      <div
        className="text-content-wrapper "
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p className="sm:text[0.5rem]">{description}</p>

        <div
          className="text-content-block"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            margin: "2rem 0",
          }}
        >
          {specifications.map((spec, index) => (
            <div
              key={index}
              style={{
                margin: "2rem 0",
              }}
            >
              <h3
                style={{
                  color: "var(--accent1)",
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                }}
              >
                {spec.title}
              </h3>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {spec.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      margin: "0.5rem 0",
                      paddingLeft: "1rem",
                      borderLeft: `2px solid var(--accent1)`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ margin: "2rem 0" }}>
          <h3
            style={{
              color: "var(--accent1)",
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Infrastructure Features
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
            className="secondary-content-block"
          >
            {infrastructure.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(253, 224, 71, 0.05)",
                  padding: "1rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--accent1)",
                    marginBottom: "1.5rem",

                    fontWeight: "bold",
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.8",
                    opacity: "0.9",
                    marginBottom: "1.5rem",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0" }}>{svgContent}</div>
    </section>
  );
};

export default TechnicalSpecificationsSection;
