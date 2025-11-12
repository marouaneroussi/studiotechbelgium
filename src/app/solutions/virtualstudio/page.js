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
    imageUrl: "/images/virtual_studio/advanced-virtual-studio-broadcast.jpg",
    imageAlt: "advanced virtual studio broadcast",
    title: "Virtual Studio",
    description: "advanced virtual studio broadcast studiotech",
  },
  {
    imageUrl: "/images/virtual_studio/studio_animatrise.jpg",
    imageAlt: "Demo within Studiotech Belgium plants",
    title: "Virtual Studio",
    description: "Demo within Studiotech Belgium plants",
  },
  {
    imageUrl: "/images/virtual_studio/SDN by Evertz IP.jpg",
    imageAlt: "SDN by Evertz IP",
    title: "Virtual Studio",
    description: "Evertz technologies distributed by Studiotech Belgium",
  },
  {
    imageUrl: "/images/virtual_studio/virtual-studio-keywall.jpg",
    imageAlt: "Evertz technologies distributed by Studiotech Belgium",
    title: "Virtual Studio",
    description: "Virtual studio Keywall developed with Studiotech Belgium",
  },
  {
    imageUrl: "/images/virtual_studio/dreamcatcher.jpg",
    imageAlt: "Evertz technologies",
    title: "Virtual Studio",
    description: "Evertz technologies distributed by Studiotech Belgium",
  },
  {
    imageUrl: "/images/virtual_studio/keywall_04.jpg",
    imageAlt: "Demo within Studiotech Belgium plants",
    title: "Virtual Studio",
    description: "Demo within Studiotech Belgium plants ",
  },
  {
    imageUrl: "/images/virtual_studio/keywall_02c.jpg",
    imageAlt: "Weather forecast TV5 Monde by Keywall",
    title: "Virtual Studio",
    description: "Weather forecast TV5 Monde by Keywall",
  },

  {
    imageUrl: "/images/virtual_studio/keywall.jpg",
    imageAlt: "Weather forecast RTBF by Keywall",
    title: "Virtual Studio",
    description: "Weather forecast RTBF by Keywall",
  },
];

const useCaseData = {
  title: " Virtual Studio Applications ",
  cases: [
    {
      altText: "Broadcast News",
      title: "Broadcast News",
      description:
        "State-of-the-art virtual news studios and weather presentation",
    },
    {
      altText: "Dynamic sports analysis",
      title: "Sports",
      description: "Dynamic sports analysis and virtual replay environments",
    },
    {
      altText: "Immersive entertainment and game show environments",
      title: "Entertainment",
      description: "Immersive entertainment and game show environments",
    },
  ],
};

const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M15 13V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2zm-2 0H5V5h8v8zm8-4h-2v2h2v2h-2v2h2v2h-2v2h2v-2h2v2h-2v2h4V7h-4v2zm0 4h-2v-2h2v2z",
    title: "Real-time Production",
    description:
      "High-quality SD/HD production capabilities with seamless integration",
  },
  {
    hasGroup: false,
    iconPath:
      "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z",
    title: "Camera Tracking",
    description: "Precise camera tracking and motion control integration",
  },
  {
    hasGroup: false,
    iconPath:
      "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",
    title: "Set Design",
    description: "Custom virtual set design and augmented reality elements",
  },
];

const virtualStudio = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Virtual Studio Solutions"
        description="Create immersive broadcast environments with cutting-edge virtual studio technology"
        image="url('/images/solutions/lighting.jpg') no-repeat center center / cover"
      />
      <InfoSection
        title="Advanced Virtual Studio Solutions"
        desc="Studiotech is experienced in providing complete virtual studio solutions across television production, post production, cinema, industry and education."
        image="/images/virtual_studio/Modern-Broadcast-Studio.jpg"
        bulletPoints={[
          "→ Real-time production in SD or HD",
          "→ 2D or 3D environments",
          "→ Single or multi-camera setups",
          "→ Optional camera tracking for all studio sizes",
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title="Advanced Virtual Studio Solutions"
        desc="Studiotech provides complete virtual studio solutions for various sectors."
        image="/images/virtual_studio/advanced-virtual-studio-broadcast.jpg"
        bulletPoints={[
          "Real-time production in SD or HD",
          "2D or 3D environments",
          "Single or multi-camera setups",
          "Optional camera tracking for all studio sizes",
        ]}
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3>Innovative Broadcasting Solutions</h3>
            <p>
              In today’s fast-paced media environment, virtual studios provide
              the flexibility and innovation required to captivate audiences.
              From traditional formats to more experimental styles, our
              solutions adapt to your creative needs.
            </p>
            <p>
              We enable storytelling that goes beyond traditional boundaries
              with immersive designs and leading technology.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Comprehensive Integration</h3>
            <p>
              Our virtual studio solutions integrate seamlessly with existing
              systems, allowing for easy updates and enhancements as technology
              evolves.
            </p>
            <p>
              With powerful hardware and software, we ensure your broadcasts are
              reliable and impactful.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default virtualStudio;
