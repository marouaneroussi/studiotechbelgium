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
    imageUrl: "/images/transmission/transmission-satellite.JPG",
    imageAlt: "Belgium VRT link",
    title: "TRANSMISSION",
    description: "Belgium VRT link",
  },
  {
    imageUrl: "/images/transmission/belgium-vrt-link.jpg",
    imageAlt: "Belgium VRT link",
    title: "TRANSMISSION",
    description: "Belgium VRT link",
  },
  {
    imageUrl: "/images/transmission/DSC_4049.jpg",
    imageAlt: "Belgium VRT link",
    title: "TRANSMISSION",
    description: "Belgium VRT link",
  },

  {
    imageUrl: "/images/transmission/P1080338.JPG",
    imageAlt: "Belgium VRT link",
    title: "TRANSMISSION",
    description: "Belgium VRT link",
  },
  {
    imageUrl: "/images/transmission/DSC_0052.JPG",
    imageAlt: "Mauritania TVM transmission tower",
    title: "TRANSMISSION",
    description: "Belgium VRT link",
  },
  {
    imageUrl: "/images/transmission/mauritania-tvm.JPG",
    imageAlt: "Mauritania TVM transmission tower",
    title: "TRANSMISSION",
    description: "Mauritania TVM transmission tower",
  },
  {
    imageUrl: "/images/transmission/mauritania-tvm-2.JPG",
    imageAlt: "Mauritania TVM transmission tower",
    title: "TRANSMISSION",
    description: "Mauritania TVM transmission tower",
  },
  {
    imageUrl: "/images/transmission/DSC_0074.JPG",
    imageAlt: "Mauritania TVM transmission tower",
    title: "TRANSMISSION",
    description: "Mauritania TVM transmission tower",
  },
];

const useCaseData = {
  title: " Satellite Transmission Excellence ",
  cases: [
    {
      altText: "Global Satellite Network",
      title: "Global Satellite Network",
      description:
        "Access our extensive network of geostationary satellites providing worldwide coverage with exceptional signal quality and reliability. Multiple frequency bands available including C, Ku, and Ka for optimal transmission in any conditions.",
    },
    {
      altText: "Cutting-Edge Uplink Technology",
      title: "Cutting-Edge Uplink Technology",
      description:
        "State-of-the-art uplink systems featuring automatic satellite acquisition, DVB-S2X modulation, and advanced encoding capabilities. Our transmission chain ensures broadcast-grade quality with minimal latency.",
    },
    {
      altText: "24/7 Network Operations",
      title: "24/7 Network Operations",
      description:
        "Round-the-clock monitoring and support from our dedicated Network Operations Center. Real-time signal quality analysis, interference detection, and immediate technical assistance whenever needed.",
    },
    {
      altText: "Redundant Infrastructure",
      title: "Redundant Infrastructure",
      description:
        "Full redundancy architecture with hot-standby systems, backup power supplies, and alternative signal paths. Our infrastructure is designed to maintain 99.99% uptime for critical broadcasts.",
    },
    {
      altText: "Flexible Bandwidth Solutions",
      title: "Flexible Bandwidth Solutions",
      description:
        "Scalable bandwidth allocation to match your transmission needs, from occasional use to full-time channels. Dynamic resource management ensures optimal capacity utilization.",
    },
    {
      altText: "Advanced Signal Processing",
      title: "Advanced Signal Processing",
      description:
        "Latest compression technologies and signal processing capabilities, supporting HD/UHD content delivery. Built-in error correction and signal optimization for premium broadcast quality.",
    },
  ],
};

const featuresData = [
  {
    hasGroup: true,
    iconPath:
      "M78.27,38.12c3.55-0.53,6.86,1.91,7.4,5.46c0.53,3.55-1.91,6.86-5.46,7.39c-2.5,0.38-4.89-0.73-6.26-2.66 c-3.57,0.93-6.69,2.33-9.49,4.22c-2.45,1.65-4.67,3.69-6.77,6.13c0.49,0.44,0.97,0.92,1.42,1.43c-0.01,0.55-0.42,1.34-0.8,1.79 c-10.22,12.67-19.42,32.79-22.49,54.84c-0.28,2.04-0.51,4.09-0.69,6.15h-5.2c0.19-2.3,0.44-4.58,0.76-6.85 c3-21.46,11.58-41.2,21.41-54.56l-0.14-0.1c-0.43-0.33-0.74-0.75-0.92-1.22l-4.97-2.97c-0.27-0.09-0.54-0.23-0.78-0.4 c-0.1-0.07-0.19-0.15-0.27-0.23l-13.19-7.89C18.9,63.78,11.24,82.96,7.6,102.58c-1.26,6.77-2.05,13.58-2.41,20.3H0 c0.37-7.03,1.18-14.16,2.5-21.24C6.43,80.5,14.85,59.81,29.27,43.69c0.81-0.99,2.23-1.27,3.35-0.6l0.35,0.21 c1.31-2.91,2.24-5.92,2.85-9c0.58-2.95,0.87-5.96,0.89-9.02c-2.35-0.79-4.18-2.83-4.58-5.45c-0.56-3.72,2-7.2,5.73-7.76 c3.72-0.56,7.2,2,7.76,5.73c0.42,2.81-0.94,5.48-3.23,6.86c0.02,3.67-0.29,7.25-0.98,10.73c-0.73,3.71-1.89,7.33-3.54,10.86 l1.64,0.99c3.86-4.82,7.05-10.17,9.59-16c2.5-5.73,4.39-11.93,5.71-18.58c-1.67-1.01-2.9-2.73-3.21-4.82 c-0.56-3.72,2-7.2,5.73-7.76c3.72-0.56,7.2,2,7.76,5.73c0.5,3.34-1.51,6.48-4.62,7.5c-1.41,7.23-3.44,13.98-6.16,20.2 c-2.65,6.07-5.93,11.65-9.88,16.69l0.87,0.52l0.62,0.37c3.14-4.22,6.38-8.37,9.69-12.45c3.6-4.42,7.29-8.77,11.06-13.05 c-0.05-0.22-0.1-0.43-0.13-0.66c-0.55-3.66,1.97-7.08,5.63-7.63c3.66-0.55,7.08,1.97,7.63,5.63c0.55,3.66-1.97,7.08-5.63,7.63 c-1.35,0.2-2.67-0.01-3.82-0.55c-3.48,3.96-6.92,8.03-10.32,12.21c-3.11,3.82-6.17,7.75-9.18,11.78l1.21,0.72l1,0.6 c2.52-2.99,5.21-5.49,8.22-7.51c3.46-2.33,7.31-4.03,11.75-5.13C73.71,40.35,75.7,38.5,78.27,38.12L78.27,38.12z M19.21,122.88 c0.13-1.7,0.29-3.39,0.48-5.07c2.53-21.67,10.92-41.79,20.71-55.55c0.52-0.72,1.53-0.9,2.27-0.38c0.72,0.52,0.9,1.53,0.38,2.27 c-9.51,13.37-17.65,32.94-20.12,54.03c-0.18,1.56-0.33,3.12-0.45,4.69H19.21L19.21,122.88z M78.86,42 c1.41-0.21,2.72,0.76,2.93,2.17c0.21,1.41-0.76,2.72-2.17,2.93c-1.41,0.21-2.72-0.76-2.93-2.17C76.48,43.52,77.45,42.21,78.86,42 L78.86,42z M57.97,4.27c1.41-0.21,2.72,0.76,2.93,2.17c0.21,1.41-0.76,2.72-2.17,2.93c-1.41,0.21-2.72-0.76-2.93-2.17 C55.59,5.8,56.56,4.48,57.97,4.27L57.97,4.27z M38.5,16.26c1.41-0.21,2.72,0.76,2.93,2.17c0.21,1.41-0.76,2.72-2.17,2.93 c-1.41,0.21-2.72-0.76-2.93-2.17C36.12,17.79,37.09,16.48,38.5,16.26L38.5,16.26z M72.79,21.38c1.41-0.21,2.72,0.76,2.93,2.17 c0.21,1.41-0.76,2.72-2.17,2.93c-1.41,0.21-2.72-0.76-2.93-2.17C70.41,22.9,71.38,21.59,72.79,21.38L72.79,21.38z",
    title: "Fiber Optic Networks",
    description:
      "High bandwidth data transmission through advanced fiber infrastructure for broadcast-quality signals",
  },
  {
    iconPath:
      "M16.25,65.07c0.72,0.86,0.64,2.14-0.22,2.86c-0.86,0.72-2.14,0.64-2.86-0.22C4.41,57.47-0.11,45.88,0,34.15 C0.11,22.7,4.58,11.19,13.75,0.68c0.72-0.83,2-0.91,2.86-0.19c0.83,0.72,0.92,2,0.19,2.86C8.29,13.08,4.13,23.7,4.05,34.18 C3.97,44.94,8.13,55.58,16.25,65.07L16.25,65.07z M52.1,40.15c1.14,14.1,3.71,27.26,7.45,38.83H34.46 c3.77-11.71,6.39-25.04,7.58-39.36l-0.05-0.05c-1.39-1.39-2.22-3.27-2.22-5.38c0-2.11,0.86-3.99,2.22-5.38 c1.39-1.39,3.27-2.22,5.38-2.22c2.11,0,3.99,0.86,5.38,2.22c1.39,1.39,2.22,3.27,2.22,5.38c0,1.17-0.26,2.26-0.73,3.25 C53.69,38.56,52.97,39.47,52.1,40.15L52.1,40.15z M60.87,82.87c0.96,2.7,1.99,5.31,3.09,7.81H30.08c1.08-2.5,2.1-5.11,3.06-7.81 H60.87L60.87,82.87z M65.75,94.59c3.12,6.42,17.66,24.17,17.66,25.69c0,0.87-0.22,1.74-0.67,2.61H67.26 c0.15-17.31-21.69-25.55-33.78-13.86c-3.6,3.48-5.48,8.28-6.34,13.86H11.94c-0.48-0.85-0.65-1.77-0.59-2.74 c0.1-1.59,13.94-19.26,16.95-25.55H65.75L65.75,94.59z M26.84,55.22c0.75,0.83,0.67,2.11-0.17,2.86c-0.83,0.75-2.11,0.67-2.86-0.17 c-6.74-7.62-10.2-15.69-10.06-23.87c0.14-7.96,3.66-15.94,10.84-23.57c0.78-0.8,2.05-0.86,2.86-0.08c0.8,0.78,0.86,2.05,0.08,2.86 c-6.46,6.88-9.65,13.92-9.76,20.85c-0.11,7.15,2.99,14.31,9.04,21.16L26.84,55.22L26.84,55.22z M36.21,45.85 c0.69,0.86,0.58,2.13-0.31,2.83c-0.86,0.69-2.13,0.58-2.83-0.3c-3.63-4.46-5.52-9.32-5.55-14.25c-0.03-4.8,1.77-9.62,5.46-14.14 c0.69-0.86,1.97-1,2.83-0.31c0.86,0.69,1,1.97,0.31,2.83c-3.08,3.77-4.57,7.74-4.57,11.59c0,3.96,1.61,7.96,4.63,11.7L36.21,45.85 L36.21,45.85z M81.52,67.7c-0.72,0.86-2,0.94-2.86,0.22c-0.86-0.72-0.94-2-0.22-2.86c8.12-9.48,12.31-20.16,12.2-30.89 C90.56,23.7,86.4,13.08,77.89,3.35c-0.72-0.83-0.64-2.11,0.19-2.86c0.83-0.72,2.11-0.64,2.86,0.19 c9.18,10.51,13.64,22.02,13.75,33.47C94.8,45.88,90.28,57.47,81.52,67.7L81.52,67.7z M70.9,57.88c-0.75,0.83-2.02,0.92-2.86,0.17 c-0.83-0.75-0.92-2.02-0.17-2.86c6.07-6.85,9.15-14,9.04-21.16c-0.11-6.96-3.3-14-9.76-20.85c-0.78-0.8-0.72-2.08,0.08-2.86 c0.8-0.78,2.08-0.72,2.86,0.08C77.28,18.04,80.8,26,80.94,33.98c0.14,8.18-3.3,16.25-10.06,23.87L70.9,57.88L70.9,57.88z M61.64,48.37c-0.69,0.86-1.97,1-2.83,0.3c-0.86-0.69-1-1.97-0.31-2.83c3.05-3.74,4.63-7.74,4.63-11.7c0-3.88-1.47-7.82-4.57-11.59 c-0.69-0.86-0.58-2.14,0.31-2.83c0.86-0.69,2.14-0.58,2.83,0.3c3.69,4.52,5.49,9.34,5.46,14.14c-0.03,4.94-1.91,9.76-5.55,14.25 L61.64,48.37L61.64,48.37z",
    title: "Satellite Systems",
    description:
      "Fixed and mobile satellite solutions including DSNG vehicles and fly-away systems",
  },
  {
    hasGroup: false,
    iconPath:
      "M2.998 5.58a5.55 5.55 0 0 1 1.62-3.88l-.71-.7a6.45 6.45 0 0 0 0 9.16l.71-.7a5.55 5.55 0 0 1-1.62-3.88zm1.06 0a4.42 4.42 0 0 0 1.32 3.17l.71-.71a3.27 3.27 0 0 1-.76-1.12 3.45 3.45 0 0 1 0-2.67 3.22 3.22 0 0 1 .76-1.13l-.71-.71a4.46 4.46 0 0 0-1.32 3.17zm7.65 3.21l-.71-.71c.33-.32.59-.704.76-1.13a3.449 3.449 0 0 0 0-2.67 3.22 3.22 0 0 0-.76-1.13l.71-.7a4.468 4.468 0 0 1 0 6.34zM13.068 1l-.71.71a5.43 5.43 0 0 1 0 7.74l.71.71a6.45 6.45 0 0 0 0-9.16zM9.993 5.43a1.5 1.5 0 0 1-.245.98 2 2 0 0 1-.27.23l3.44 7.73-.92.4-.77-1.73h-5.54l-.77 1.73-.92-.4 3.44-7.73a1.52 1.52 0 0 1-.33-1.63 1.55 1.55 0 0 1 .56-.68 1.5 1.5 0 0 1 2.325 1.1zm-1.595-.34a.52.52 0 0 0-.25.14.52.52 0 0 0-.11.22.48.48 0 0 0 0 .29c.04.09.102.17.18.23a.54.54 0 0 0 .28.08.51.51 0 0 0 .5-.5.54.54 0 0 0-.08-.28.58.58 0 0 0-.23-.18.48.48 0 0 0-.29 0zm.23 2.05h-.27l-.87 1.94h2l-.86-1.94zm2.2 4.94l-.89-2h-2.88l-.89 2h4.66z",
    title: "Broadcast Transmitters",
    description:
      "TV and FM transmitters with omni-directional antenna systems for wide area coverage",
  },
];

const transmission = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Comprehensive Transmission Solutions"
        description="Expert integration of broadcast transmission systems including fiber optics, satellite, transmitters and wave links"
        image="url('/images/transmission/transmission.JPG') no-repeat center center / cover"
      />
      <InfoSection
        title="Build Your Broadcast Future"
        desc="At Studiotech, we specialize in building comprehensive radio and TV organizations from the ground up. Our expertise spans the entire transmission spectrum, offering seamless integration of multiple signal delivery methods: from fiber optics and broadcast transmitters to satellite uplinks/downlinks and wave links. With years of industry experience, we ensure successful implementation of these complex systems, creating robust and reliable broadcast networks."
        desc_p_two={
          "Based on state-of-the-art, reliable and efficient technology, our solutions enable:"
        }
        image="/images/transmission/Daring Urban Climber.jpg"
        bulletPoints={[
          "→ Fiber Optic Networks",
          "→ Satellite Uplink/Downlink Systems",
          "→ TV/FM Transmitters",
          "→ Wave Link Solutions",
          "→ Fly-away Systems",
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title="Next-Generation Satellite Infrastructure"
        desc="Our cutting-edge satellite transmission facilities represent the pinnacle of broadcasting technology. With a global network of teleports and advanced monitoring systems, we deliver unparalleled signal quality and reliability. Our infrastructure supports everything from occasional use to 24/7 broadcast channels, with redundant systems ensuring continuous operation."
        image="/images/transmission/transmission-satellite.JPG"
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3>Comprehensive Transmission Solutions</h3>
            <p>
              The core business of Studiotech consists in the build up of radio
              and TV organisations. The ready to send signal can be transmitted
              in different ways through our main systems: fibre optics,
              broadcast transmitters, satellite uplinks/downlinks and wave
              links. Our extensive experience enables us to successfully
              implement all of these solutions.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Fiber Optic Excellence</h3>
            <p>
              In countries where the infrastructure is sufficiently developed,
              fiber optics provides the most efficient signal transfer solution.
              The fiber's broadband capabilities allow management of very large
              data streams. We implement and configure all broadcast world
              interfaces with expertise.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Wave Link Technology</h3>
            <p>
              Wave links provide coverage up to 50km or more in point-to-point
              configurations, enabling transmission of pictures and sound from
              ENG cameras in wireless setups. This system's key advantages are
              its exceptional mobility and rapid deployment capabilities.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Broadcast Transmitter Systems</h3>
            <p>
              The most common transmission method remains TV and FM transmitters
              paired with omni-directional antenna systems, typically installed
              on pylons. Based on your coverage requirements, we can recommend
              optimal combinations of antenna types and transmitter power
              outputs.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default transmission;
