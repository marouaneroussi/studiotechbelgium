// src/app/solutions/page.js
import React from "react";
import Navbar from "../components/Navbard";
import Footer from "../components/Footer";
import HeroSection from "../components/SolutionComponents/HeroSection";
import ReferencesSection from "../components/ReferencesSection";
import InfoSection from "../components/InfoSection";
import NewsSection from "../components/SolutionComponents/NewsSection";
import NewsletterComponent from "../components/NewsletterComponent";
const news = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Insights & Resources"
        description="Stay ahead of the curve with our latest industry insights, thought leadership, and success stories."
      />
      <InfoSection
        title={"Studiotech Belgium participate at IBC 2024 "}
        desc="Explore how artificial intelligence and machine learning are revolutionizing the broadcasting industry, from content creation to delivery."
        image={"/images/news/IBC2024.webp"}
        row_direction={true}
        card_tag={"Featured"}
      />
      <NewsSection />
      <ReferencesSection />
      <NewsletterComponent />
      <Footer />
    </>
  );
};

export default news;
