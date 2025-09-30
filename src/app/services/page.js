// src/app/solutions/page.js
import React from "react";
import Navbar from "../components/Navbard";
import Footer from "../components/Footer";
import HeroSection from "../components/SolutionComponents/HeroSection";
import SolutionsSection from "../components/SolutionComponents/SolutionSection";
import ReferencesSection from "../components/ReferencesSection";
import InfoSection from "../components/InfoSection";
import "../solutions/styles.css";
const services = () => {
  const services = [
    {
      title: "Expert Consultation",
      description:
        "Need guidance on technology investments or project implementation costs? Our experienced engineers are ready to provide comprehensive consultations to help you make informed decisions.",
      desc_p_two:
        "We'll help you navigate complex technical landscapes and find the most efficient solutions for your specific needs.",

      image: "/images/services/center-consultation.jpg",
      row_direction: "false",
    },
    {
      title: "Professional Project Development",
      description:
        "Our professional installation team specializes in comprehensive AV system solutions. We offer expert assistance with equipment removals, repairs, system expansions, and equipment rentals.",
      desc_p_two:
        "We guarantee high-quality installation materials and flexible service options tailored to your specific needs.",

      image: "/images/services/bluprint-display.jpg",
      row_direction: "true",
    },
    {
      title: "Installation and Equipment Services",
      description:
        "Our professional installation team specializes in comprehensive AV system solutions. We offer expert assistance with equipment removals, repairs, system expansions, and equipment rentals.",
      desc_p_two:
        "We guarantee high-quality installation materials and flexible service options tailored to your specific needs.",

      image: "/images/services/Rack-Maintenance.jpg",
      row_direction: "false",
    },
    {
      title: "Comprehensive Technical Support",
      description:
        "We provide complete warranty and post-warranty support, including maintenance, spare parts supply, and ongoing technical assistance. Our commitment is to resolve your production challenges efficiently.",
      desc_p_two:
        "Count on our responsive and knowledgeable support team to keep your systems running smoothly.",

      image: "/images/services/technical-support.jpg",
      row_direction: "true",
    },

    {
      title: "Professional Training Programs",
      description:
        "We offer comprehensive training solutions for all client types, including technical employees, system administrators, and end-users. Our training ensures you can fully leverage the potential of your AV technologies.",
      desc_p_two:
        "Empower your team with expert-led, hands-on training programs tailored to your specific technological ecosystem.",

      image: "/images/services/Event Equipment Setup.jpg",
      row_direction: "false",
    },

    // Add more solutions here as needed
  ];

  return (
    <>
      <Navbar />
      <HeroSection
        title=" AV Technology Support and Services"
        description="StudioTech provides expert solutions and support to ensure your production technology operates at peak performance, from consultation to installation and training."
      />

      {services.map((service, index) => (
        <InfoSection
          key={index}
          title={service.title}
          desc={service.description}
          desc_p_two={service.desc_p_two}
          image={service.image}
          row_direction={index % 2 === 0 ? false : true}
        />
      ))}
      {/* <InfoSection
        title="Expert Consultation"
        desc="Need guidance on technology investments or project implementation costs? Our experienced engineers are ready to provide comprehensive consultations to help you make informed decisions."
        image="/images/services/center-consultation.jpg"
        desc_p_two={
          "We'll help you navigate complex technical landscapes and find the most efficient solutions for your specific needs."
        }
      />
      <InfoSection
        title="Professional Project Development"
        desc="We meticulously prepare professional technical documentation and project plans. Our systematic approach ensures that every solution is precisely tailored to meet your unique operational requirements."
        image="/images/services/bluprint-display.jpg"
        desc_p_two={
          "From initial concept to detailed implementation strategy, we provide comprehensive project development services."
        }
        row_direction={true}
      />
      <InfoSection
        title="Installation and Equipment Services"
        desc="Our professional installation team specializes in comprehensive AV system solutions. We offer expert assistance with equipment removals, repairs, system expansions, and equipment rentals."
        desc_p_two={
          "We guarantee high-quality installation materials and flexible service options tailored to your specific needs."
        }
        image="/images/services/Rack-Maintenance.jpg"
      />
      <InfoSection
        title="Comprehensive Technical Support"
        desc="We provide complete warranty and post-warranty support, including maintenance, spare parts supply, and ongoing technical assistance. Our commitment is to resolve your production challenges efficiently."
        image="/images/services/technical-support.jpg"
        desc_p_two={
          "Count on our responsive and knowledgeable support team to keep your systems running smoothly."
        }
      />
      <InfoSection
        title="Professional Training Programs"
        desc="We offer comprehensive training solutions for all client types, including technical employees, system administrators, and end-users. Our training ensures you can fully leverage the potential of your AV technologies."
        image="/images/services/Event Equipment Setup.jpg"
        desc_p_two={
          "Empower your team with expert-led, hands-on training programs tailored to your specific technological ecosystem."
        }
      /> */}
      <ReferencesSection />
      <Footer />
    </>
  );
};

export default services;
