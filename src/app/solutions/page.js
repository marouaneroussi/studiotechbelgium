// src/app/solutions/page.js
import React from "react";
import Navbar from "../components/Navbard";
import Footer from "../components/Footer";
import HeroSection from "../components/SolutionComponents/HeroSection";
import SolutionsSection from "../components/SolutionComponents/SolutionSection";
import ReferencesSection from "../components/ReferencesSection";

const SolutionsPage = () => {
  const solutionsList = [
    {
      title: "TV Channel Solutions",
      description:
        "Enhancing broadcast experiences with state-of-the-art technologies.",
      link: "/solutions/tv-channel",
    },
    {
      title: "Virtual Studio",
      description:
        "Revolutionizing content creation with virtual environments.",
      link: "/solutions/virtual-studio",
    },
    // Add more solutions here as needed
  ];

  return (
    <>
      <Navbar />
      <HeroSection
        title="Innovative AV Solutions"
        description="Transforming communication and visual experiences through cutting-edge
          audiovisual technologies that connect, engage, and inspire."
      />
      <SolutionsSection />
      <ReferencesSection />
      <Footer />
    </>
  );
};

export default SolutionsPage;
