import React from "react";
import Navbar from "../components/Navbard";
import NewsletterComponent from "../components/NewsletterComponent";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import TechnologyPartners from "../components/TechnologyPartners";

const partners = () => {
  return (
    <>
      <Navbar />
      <Hero
        back={"/images/partners/studiotech-partnership.jpg"}
        title={"Our Partners"}
        desc={
          "Working together to deliver excellence in broadcasting and AV solutions"
        }
      />
      <div className="partner-intro">
        <h2>Building Strong Partnerships</h2>
        <p>
          AVSolutions partners with industry leaders to provide cutting-edge
          solutions for our clients. Our partnerships enable us to deliver
          comprehensive, innovative solutions that meet the evolving needs of
          the broadcasting industry.
        </p>
      </div>

      <TechnologyPartners />
      <NewsletterComponent />
      <Footer />
    </>
  );
};

export default partners;
