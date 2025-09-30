// src/app/solutions/page.js
import Footer from "@/app/components/Footer";
import InfoSection from "@/app/components/InfoSection";
import Navbar from "@/app/components/Navbard";
import HeroSection from "@/app/components/SolutionComponents/HeroSection";
import React from "react";
import FeaturesSection from "@/app/components/SolutionComponents/FeaturesSection";
import UseCases from "@/app/components/SolutionComponents/UseCases";
import Gallery from "@/app/components/SolutionComponents/Gallery";

const items = [
  {
    imageUrl: "/images/lighting/arri-lighting.jpg",
    imageAlt: "Belgium TV Com studio",
    title: "Lighting",
    description: "Belgium TV Com studio",
  },
  {
    imageUrl: "/images/lighting/belgium-tv-com-3.jpg",
    imageAlt: "Algeria Sonatrach Room of 24 February",
    title: "Lighting",
    description: "Algeria Sonatrach Room of 24 February",
  },
  {
    imageUrl: "/images/lighting/Belgium-European-Parliament.jpg",
    imageAlt: "Belgium European Parliament",
    title: "Lighting",
    description: "Belgium European Parliament",
  },
  {
    imageUrl: "/images/lighting/belgium-parliement.jpg",
    imageAlt: "Belgium European Parliament",
    title: "Lighting",
    description: "Belgium European Parliament",
  },
];

const useCaseData = {
  title: "Lighting Solutions ",
  cases: [
    {
      altText: "News Studios",
      title: "News Studios",
      description:
        "Professional lighting solutions for news broadcasts and interview sets",
    },
    {
      altText: "Production Studios",
      title: "Production Studios",
      description:
        "Comprehensive lighting systems for television and film production",
    },
    {
      altText: "Live Events",
      title: "Live Events",
      description:
        "Dynamic lighting solutions for live broadcasts and streaming events",
    },
  ],
};
const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1z",
    title: "Broadcast Control",
    description:
      "Advanced DMX/Network controlled lighting systems for professional broadcasting",
  },
  {
    hasGroup: false,
    iconPath: "M7 2v11h3v9l7-12h-4l4-8z",
    title: "Studio Solutions",
    description:
      "Complete lighting packages for news studios, production sets, and virtual environments",
  },
  {
    hasGroup: false,
    iconPath:
      "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9s9-4.03 9-9s-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7z",
    title: "Production Lighting",
    description:
      "Dynamic lighting effects and controls for live production environments",
  },
];
const DigitalSignagePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Professional Broadcast Lighting Systems"
        description="State-of-the-art studio lighting solutions for broadcasting, television production, and live events with intelligent controls and dynamic configurations"
        image={
          "url('/images/lighting/lighting.jpg') no-repeat center center / cover"
        }
      />
      <InfoSection
        title={"Studio-Grade Lighting Excellence"}
        desc="Transform your broadcast environment with our professional-grade lighting systems. From news studios to live production spaces, our solutions deliver precise control, superior color accuracy, and reliable performance for any broadcast scenario."
        image={"/images/lighting/Belgium TV Com studio.jpg"}
        desc_p_two={"Our broadcast lighting includes:"}
        bulletPoints={[
          "→ Studio LED Arrays",
          "→ DMX Control Systems",
          "→ Color Temperature Management",
          "→ Dynamic Effect Lighting ",
          "→ Production Console Integration",
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title={"Next-Generation Broadcast Lighting"}
        desc="Experience the pinnacle of broadcast lighting technology with our comprehensive lighting solutions. Our systems combine cutting-edge LED technology with intelligent controls to deliver unmatched performance and reliability for modern broadcasting environments."
        image={"/images/lighting_studios.jpg"}
        desc_p_two={"Key system highlights:"}
        bulletPoints={[
          "→ Advanced LED Panel Arrays with RGBW Capability",
          "→ Wireless DMX/Art-Net Control Systems",
          "→ Precision Color Temperature Adjustment (2800K-6500K)",
          "→ Scene Preset Management ",
          "→ Energy-Efficient Design with Power Monitoring",
        ]}
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section ">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3 className="font-bold">Intelligent Lighting Control</h3>
            <p>
              Modern broadcast environments demand sophisticated lighting
              control systems that can adapt to various production needs. Our
              comprehensive solutions cover everything from DMX automation to
              advanced color temperature management, ensuring your productions
              maintain consistent, professional lighting quality.
            </p>
            <p>
              We understand the unique challenges of broadcast lighting, from
              multi-camera setups to dynamic lighting scenes, and provide
              scalable solutions that adapt to your production requirements.
            </p>
          </div>
          <div className="text-content-block">
            <h3 className="font-bold">Studio Lighting Management</h3>
            <p>
              Our broadcast lighting solutions provide robust management tools
              for scene presets, power distribution, and performance monitoring.
              We understand the complexities of managing professional studio
              lighting and offer solutions that optimize both quality and
              efficiency.
            </p>
            <p>
              From automated daylight compensation to detailed energy
              consumption reports, our platform ensures your lighting systems
              perform optimally while maintaining the highest standards of
              broadcast quality and technical reliability.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default DigitalSignagePage;
