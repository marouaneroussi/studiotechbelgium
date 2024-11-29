// SolutionsSection.js
import React from "react";
import SolutionCard from "./SolutionCard";
import NewsCard from "../NewsCard";
import newsData from "../../../data/newsData";
const NewsSection = ({}) => {
  return (
    <section className="solutions-section">
      {newsData.map((solution, index) => (
        <NewsCard
          key={index}
          imageSrc={solution.imageSrc}
          altText={solution.altText}
          title={solution.title}
          description={solution.description}
          slug={solution.slug}
          card_tag={solution.Card_tag}
        />
      ))}
    </section>
  );
};

export default NewsSection;
