// src/app/solutions/page.js
import Footer from "@/app/components/Footer";
import InfoSection from "@/app/components/InfoSection";
import Navbar from "@/app/components/Navbard";
import HeroSection from "@/app/components/SolutionComponents/HeroSection";
import React from "react";
import FeaturesSection from "@/app/components/SolutionComponents/FeaturesSection";
import UseCases from "@/app/components/SolutionComponents/UseCases";
import Gallery from "@/app/components/SolutionComponents/Gallery";
import AboutSection from "@/app/components/SolutionComponents/AboutSection";
import TechnicalSpecificationsSection from "@/app/components/SolutionComponents/TechnicalSpecificationsSection";
import Image from "next/image";

const items = [
  {
    imageUrl: "/images/obvans/dsgn_two.jpg",
    imageAlt: "Algeria Sonatrach Room of 24 February",
    title: "Conference Room",
    description: "Algeria Sonatrach Room of 24 February",
  },
  {
    imageUrl: "/images/obvans/EY0A0622.JPG",
    imageAlt: "Room of 24 February - Chairman Table",
    title: "Conference Room",
    description: "Room of 24 February - Chairman Table",
  },
  {
    imageUrl: "/images/obvans/inside_obvans.jpg",
    imageAlt: "Room of 24 February, custom design",
    title: "Conference Room",
    description: "Room of 24 February, custom design",
  },
  {
    imageUrl: "/images/obvans/Photo-Video_36_90.png",
    imageAlt: "Armchairs designated for Sonatrach",
    title: "Conference Room",
    description: "Armchairs designated for Sonatrach",
  },
  {
    imageUrl: "/images/obvans/EY0A0622.JPG",
    imageAlt: "Technical board Room of 24 February",
    title: "Conference Room",
    description: "Technical board Room of 24 February",
  },
  {
    imageUrl: "/images/obvans/ob_van_rts.jpg",
    imageAlt: "Simultaneous interpreting booth with ISO standards",
    title: "Conference Room",
    description: "Simultaneous interpreting booth with ISO standards",
  },

  {
    imageUrl: "/images/obvans/std_mobile.jpg",
    imageAlt:
      "Sonatrach Algeria Irara Room in network with the Salle du 24 Février",
    title: "Conference Room",
    description:
      "Sonatrach Algeria Irara Room in network with the Salle du 24 Février",
  },

  {
    imageUrl: "/images/obvans/var.jpg",
    imageAlt:
      "Room Irara, realization architecture installation containing and content",
    title: "Conference Room",
    description:
      "Room Irara, realization architecture installation containing and content",
  },
];

const useCaseData = {
  title: "  DSNG & OB Van Solutions ",
  cases: [
    {
      altText: "Live News Coverage",
      title: "Live News Coverage",
      description:
        "Mobile satellite uplink capabilities for immediate news broadcasting from any location, with automatic satellite acquisition systems",
    },
    {
      altText: "Sports Broadcasting",
      title: "Sports Broadcasting",
      description:
        "Full-scale OB van solutions for multi-camera sports coverage with integrated replay systems and graphics capabilities",
    },
    {
      altText: "Event Broadcasting",
      title: "Event Broadcasting",
      description:
        "Versatile mobile production units for live events, concerts, and large-scale outdoor productions",
    },
  ],
};
const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z",
    title: "DSNG Solutions",
    description:
      "Quick response satellite news gathering systems with automatic alignment",
  },
  {
    hasGroup: false,
    iconPath:
      "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z",
    title: "OB Van Integration",
    description:
      "Complete mobile production solutions for television and radio broadcasting",
  },
  {
    hasGroup: false,
    iconPath:
      "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z",
    title: "Technical Support",
    description:
      "Comprehensive maintenance and operational support for mobile units",
  },
];
const DsngObvans = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Professional DSNG & OB Van Solutions"
        description="Advanced mobile broadcasting and satellite news gathering systems with automatic alignment and comprehensive technological infrastructure"
        image={
          "url('/images/obvans/obvans.jpg') no-repeat center center / cover"
        }
      />
      <InfoSection
        title={"Advanced Mobile Broadcasting Units"}
        desc="Experience the pinnacle of mobile broadcasting technology with our comprehensive OB Van and DSNG solutions. Our vehicles combine cutting-edge audiovisual systems with ergonomic design to deliver unmatched performance and reliability for modern broadcasting operations."
        image={"/images/obvans/EY0A0622.JPG"}
        desc_p_two={"Key system features:"}
        bulletPoints={[
          "→ Automatic Satellite Alignment Systems",
          "→ Professional Video & Audio Processing",
          "→ Wireless Transmission Systems",
          "→ Built-in Power Generation ",
          "→ Climate Control & Sound Proofing",
        ]}
      />

      <AboutSection
        title="Leading Mobile Broadcasting Solutions"
        sections={[
          {
            content: [
              "Studiotech is a major player in the field of integration and engineering of mobile audiovisual systems for television and radio. In this sector, we benefit from long experience in the study, design and implementation of TV OB vans, radio OB vans, DSNG or even soundproof energy vehicles.",
              "We combine know-how and experience with an advanced and innovative design which enables us to offer multiple solutions that are always conscious of the optimum quality/price ratio.",
              "Our vehicles (OB vans, DSNG vehicles, etc.) are designed to include leading edge technological equipment that is high-tech, flexible, user-friendly and robust.",
            ],
          },
          {
            subtitle: "Innovation & Quality",
            content: [
              "New ergonomic concepts are incorporated including; mosaic walls, multi-views on large screens, video servers coupled with shared storage, slow motion systems and live animation graphics, etc.",
              "We always provide a very high quality finish combined with great attention to detail.",
              "In choosing Studiotech as a partner to be responsible for your vehicles, you are guaranteeing the completion of your project in its entirety without any concessions in standards, always with well-thought-out solutions and a constant eye on the technology of the future.",
            ],
          },
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title={"Turn-Key DSNG & OB Solutions"}
        desc="From concept to delivery, we provide complete mobile broadcasting solutions that meet the demanding requirements of modern media operations. Each vehicle is custom-engineered to deliver exceptional performance in challenging environments."
        image={"/images/obvans/inside_obvans.jpg"}
        desc_p_two={"Our Technical Infrastructure:"}
        bulletPoints={[
          "→ HD/4K ready processing chains",
          "→ Multi-camera production systems",
          "→  audio mixing solutions",
          "→ Redundant power systems",
        ]}
        row_direction={true}
      />
      <TechnicalSpecificationsSection
        title="DSNG OB Van Technical Specifications"
        description="The DSNG (Digital Satellite News Gathering) OB van is a quick response satellite news gathering system that comes equipped with extraordinarily complex and versatile technology."
        specifications={[
          {
            title: "Core Technology",
            items: [
              "Automatic satellite alignment system",
              "Wireless transmission systems",
              "Professional editing software",
              "Video processors and control panels",
              "Digital video and sound mixers",
            ],
          },
          {
            title: "Ergonomic Design",
            items: [
              "Custom operating control panel",
              "Heat and soundproof covering",
              "Hydraulic supporting perches",
              "Integrated storage solutions",
              "Antistatic flooring",
            ],
          },
        ]}
        infrastructure={[
          {
            title: "Power Systems",
            description:
              "Built-in generator with exhaust system and electrical stabilization",
          },
          {
            title: "Climate Control",
            description:
              "Advanced heating and cooling with rack heat management",
          },
          {
            title: "Lighting",
            description: "Internal and external service lighting systems",
          },
        ]}
      />
      <div></div>

      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section ">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3 className="font-bold">Advanced DSNG Technology</h3>
            <p>
              Our DSNG vehicles feature state-of-the-art satellite communication
              systems with automatic alignment capabilities, ready for broadcast
              within minutes. Complete with wireless transmission systems,
              professional editing suites, and comprehensive audio/video
              processing equipment.
            </p>
          </div>
          <div className="text-content-block">
            <h3 className="font-bold">OB Van Excellence</h3>
            <p>
              Each OB van is custom-designed with ergonomic workspaces, advanced
              technological infrastructure, and robust power systems. From
              built-in generators to climate control, every detail is optimized
              for professional broadcasting operations.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default DsngObvans;
