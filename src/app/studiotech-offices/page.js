import React from "react";
import Navbar from "../components/Navbard";
import NewsletterComponent from "../components/NewsletterComponent";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import TechnologyPartners from "../components/TechnologyPartners";
import OfficesSection from "../components/OfficesSection";
import ReferencesSection from "../components/ReferencesSection";
import HeroSection from "../components/SolutionComponents/HeroSection";

const offices = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title=" Studiotech Around The World"
        button={true}
      />

      <OfficesSection ></OfficesSection>
      <ReferencesSection />
      
      <Footer />
    </>
  );
};

export default offices;
