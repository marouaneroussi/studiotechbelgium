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
    imageUrl: "/images/iptv/dreamcatcher-solution.png",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/Eq-evertz.jpg",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/evertz-solution.png",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/evertz-solution-2.jpg",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/evertz-solution-3.png",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/evertz-studio-streaming.jpg",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/ipx.png",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
  {
    imageUrl: "/images/iptv/connectivity-hub.jpg",
    imageAlt: "Evertz Solution",
    title: "Iptv & Web Streaming",
    description: "Evertz Solution",
  },
];

const useCaseData = {
  title: "Enterprise Streaming Platform ",
  cases: [
    {
      altText: "Multi-Platform Streaming",
      title: "Multi-Platform Streaming",
      description:
        "Deploy your content across multiple platforms with our advanced streaming infrastructure. Support for adaptive bitrate streaming, multi-protocol delivery (HLS, DASH, RTMP), and seamless integration with major CDNs.",
    },
    {
      altText: "IPTV Service Management",
      title: "IPTV Service Management",
      description:
        "End-to-end IPTV solutions including content ingestion, transcoding, middleware, and multi-screen delivery. Supporting both live and VOD content with advanced EPG and user management features.",
    },
    {
      altText: "Cloud-Based Infrastructure",
      title: "Cloud-Based Infrastructure",
      description:
        "Scalable cloud architecture ensuring high availability and optimal performance. Load balancing, auto-scaling, and global content distribution through leading cloud providers.",
    },
  ],
};
const featuresData = [
  {
    iconPath:
      "M61.44,21.18c12.88,0,23.33,10.45,23.33,23.33c0,12.88-10.45,23.33-23.33,23.33S38.11,57.4,38.11,44.51 C38.11,31.63,48.55,21.18,61.44,21.18L61.44,21.18L61.44,21.18z M105.78,87.97c-0.54,0.63-1.28,0.97-2.04,1.03 c-0.77,0.06-1.58-0.18-2.23-0.72c-0.65-0.54-1-1.29-1.06-2.05l0-0.01c-0.05-0.77,0.18-1.57,0.72-2.22 c5.2-6.07,9.14-12.52,11.76-19.16c2.63-6.65,3.93-13.5,3.86-20.36c-0.05-6.79-1.45-13.62-4.22-20.33 c-2.71-6.54-6.73-12.97-12.11-19.12c-0.54-0.63-0.79-1.42-0.73-2.19c0.05-0.77,0.39-1.53,1.01-2.09l0.02-0.02 c0.62-0.54,1.41-0.77,2.18-0.72c0.77,0.05,1.53,0.4,2.09,1.02c5.86,6.72,10.24,13.74,13.19,20.92c3.04,7.39,4.57,14.95,4.64,22.48 c0.07,7.63-1.37,15.21-4.24,22.55c-2.87,7.3-7.16,14.36-12.83,20.97L105.78,87.97L105.78,87.97z M92.11,75.32 c-0.56,0.62-1.32,0.97-2.1,1.01c-0.77,0.05-1.57-0.21-2.19-0.76c-0.62-0.56-0.97-1.32-1.01-2.1c-0.05-0.77,0.2-1.57,0.76-2.19 l0.01-0.01c3.88-4.38,6.8-8.86,8.73-13.37c1.92-4.5,2.86-9.04,2.79-13.58c-0.07-4.46-1.13-8.96-3.23-13.43 c-2.06-4.41-5.13-8.81-9.23-13.15l-0.02-0.03c-0.57-0.6-0.83-1.37-0.8-2.13c0.03-0.77,0.35-1.54,0.94-2.11l0.04-0.04 c0.6-0.57,1.37-0.83,2.13-0.81c0.77,0.02,1.54,0.35,2.12,0.94l0.01,0.01c4.62,4.9,8.07,9.91,10.4,14.98l0.01,0.03 c2.38,5.17,3.59,10.41,3.68,15.65c0.09,5.31-0.98,10.59-3.16,15.78c-2.17,5.15-5.45,10.22-9.79,15.13 C92.19,75.2,92.16,75.26,92.11,75.32L92.11,75.32z M35.34,71.32c0.55,0.62,0.8,1.41,0.75,2.17c-0.05,0.77-0.39,1.54-1.01,2.1 c-0.62,0.56-1.41,0.81-2.18,0.77c-0.77-0.05-1.54-0.39-2.1-1.01c-4.39-4.97-7.71-10.09-9.91-15.3c-2.18-5.18-3.26-10.45-3.17-15.75 c0.09-5.24,1.31-10.49,3.69-15.68l0.01-0.03c2.33-5.06,5.78-10.07,10.38-14.95l0.03-0.03c0.58-0.59,1.35-0.9,2.12-0.93 c0.77-0.02,1.55,0.25,2.15,0.83c0.61,0.58,0.93,1.36,0.95,2.13c0.02,0.77-0.25,1.55-0.83,2.15c-4.09,4.36-7.16,8.77-9.23,13.18 c-2.09,4.47-3.16,8.96-3.24,13.4c-0.07,4.53,0.88,9.07,2.8,13.55c1.91,4.48,4.8,8.92,8.6,13.25c0.06,0.02,0.12,0.05,0.16,0.1 L35.34,71.32L35.34,71.32z M21.69,84l0.03,0.03c0.53,0.64,0.76,1.43,0.71,2.2c-0.06,0.77-0.41,1.51-1.04,2.05l-0.05,0.04 c-0.64,0.53-1.43,0.76-2.2,0.7c-0.77-0.06-1.52-0.42-2.06-1.06c-5.67-6.62-9.97-13.68-12.83-20.98C1.37,59.65-0.07,52.07,0,44.44 c0.08-7.54,1.6-15.1,4.64-22.49C7.6,14.77,11.97,7.74,17.83,1.04c0.54-0.62,1.29-0.97,2.07-1.02c0.77-0.05,1.57,0.19,2.21,0.73 l0.01,0.01c0.62,0.54,0.97,1.29,1.02,2.07c0.05,0.77-0.19,1.57-0.73,2.21l-0.01,0.01C17.03,11.19,13,17.61,10.3,24.15 c-2.77,6.71-4.17,13.54-4.22,20.33c-0.05,6.89,1.26,13.75,3.88,20.41C12.58,71.52,16.51,77.94,21.69,84L21.69,84z M69.74,45.96 c1.19-0.77,1.18-1.62,0-2.3L57.47,36.6c-0.97-0.61-1.98-0.25-1.95,1.01l0.04,14.26c0.08,1.37,0.87,1.75,2.02,1.11L69.74,45.96 L69.74,45.96L69.74,45.96z M61.44,25.92c10.27,0,18.59,8.32,18.59,18.59c0,10.27-8.32,18.59-18.59,18.59 c-10.27,0-18.59-8.32-18.59-18.59C42.85,34.24,51.17,25.92,61.44,25.92L61.44,25.92L61.44,25.92z",
    title: "IPTV & Web Streaming",
    description:
      "Advanced streaming solutions with support for live and on-demand content delivery across multiple platforms and devices. Seamless integration with major CDNs and OTT services.",
  },
  {
    hasGroup: false,
    iconPath:
      "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z",
    title: "Cloud Infrastructure",
    description:
      "Reliable cloud-based streaming architecture with automatic scaling, load balancing, and global content delivery networks for optimal performance.",
  },
  {
    hasGroup: false,
    iconPath:
      "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z",
    title: "Multi-Screen Experience",
    description:
      "Deliver content to any screen with our responsive streaming technology. Support for mobile, desktop, smart TVs, and custom applications with synchronized playback.",
  },
];
const iptv = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Enterprise IPTV & Streaming Solutions"
        description="Professional end-to-end streaming infrastructure for broadcasters, enterprises and content providers"
        image={
          "url('/images/iptv/connectivity-hub.jpg') no-repeat center center / cover"
        }
      />
      <InfoSection
        title={"IPTV & Web Streaming Solutions"}
        desc="The broadcast landscape is rapidly evolving beyond traditional linear television. Today's consumers demand content accessibility across all platforms and devices, anytime and anywhere. As broadcast and media specialists, Studiotech stays ahead of these market transformations."
        image={"/images/iptv/dreamcatcher-evertz.png"}
        desc_p_two={"Our broadcast lighting includes:"}
        bulletPoints={[
          "→ Professional hardware and software integration",
          "→  End-to-end media workflow management ",
          "→  Multi-format encoding and transcoding ",
          "→  Live streaming and archiving solutions  ",
        ]}
      />
      <FeaturesSection features={featuresData} />

      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section ">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3 className="font-bold">IPTV Distribution Networks</h3>
            <p>
              Our IPTV solutions deliver high-quality content across enterprise
              networks with minimal latency. We implement robust content
              distribution networks (CDNs) that ensure smooth delivery of live
              and on-demand content to thousands of concurrent users, with
              advanced features like channel management, EPG integration, and
              multi-screen support.
            </p>
          </div>
          <div className="text-content-block">
            <h3 className="font-bold">Web Streaming Architecture</h3>
            <p>
              Our web streaming platform leverages cutting-edge adaptive bitrate
              streaming technologies, supporting protocols like HLS and DASH.
              The architecture includes sophisticated load balancing, edge
              caching, and content protection mechanisms to deliver
              broadcast-quality experiences to viewers worldwide.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default iptv;
