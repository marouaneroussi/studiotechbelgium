import React from "react";

const FeatureCard = ({ iconPath, title, description, hasGroup = true }) => {
  return (
    <div className="feature-card">
      <svg
        className="feature-icon"
        viewBox="0 0 24 24"
        width="24" // Adjusted width
        height="24" // Adjusted height
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        {hasGroup ? (
          <g transform="scale(0.16) translate(12.5, 0)">
            <path d={iconPath} />
          </g>
        ) : (
          <path d={iconPath} />
        )}
      </svg>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection = ({ features }) => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconPath={feature.iconPath}
            title={feature.title}
            description={feature.description}
            hasGroup={feature.hasGroup}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
