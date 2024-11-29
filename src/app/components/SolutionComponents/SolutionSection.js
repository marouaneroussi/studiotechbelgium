// SolutionsSection.js
import React from "react";
import SolutionCard from "./SolutionCard";
const SolutionsSection = () => {
  const solutions = [
    {
      imageSrc: "/images/solutions/virtual-studio.jpg",
      altText:
        "Corporate video production studio with professional camera equipment",
      title: "Virtual Studio",
      description:
        "Empowering businesses with impactful, professional video solutions that captivate audiences.",
      link: "/solutions/virtualstudio",
    },
    {
      imageSrc: "/images/solutions/conference-room.jpg",
      altText: "Modern conference room with video conferencing technology",
      title: "Conference & Collaboration",
      description:
        "Seamlessly connect teams with high-end video conferencing and collaboration solutions.",
      link: "/solutions/conference-room",
    },
    {
      imageSrc: "/images/solutions/television-channel.jpg",
      altText: "Interactive digital display with touch interface",
      title: "Television Channel",
      description:
        "Enhance engagement with state-of-the-art interactive displays for dynamic presentations.",
      link: "/solutions/televisionchannel",
    },
    {
      imageSrc: "/images/solutions/Dsng.jpg",
      altText:
        "Professional streaming setup with cameras and broadcast equipment",
      title: "Dsng & Broadcast",
      description:
        "Reliable streaming solutions for events and webcasts that expand your digital reach.",
      link: "/solutions/dsng-obvan",
    },
    {
      imageSrc: "/images/solutions/transmission-satellite.jpg",
      altText: "Professional audio recording studio with mixing console",
      title: "Transmission Satellite",
      description:
        "Immersive audio experiences crafted with precision and high-quality sound engineering.",
      link: "/solutions/transmission",
    },
    {
      imageSrc: "/images/solutions/lighting.jpg",
      altText: "Professional stage lighting setup with colorful illumination",
      title: "Lighting Solutions",
      description:
        "Transformative lighting solutions for impactful visual experiences in any setting.",
      link: "/solutions/lighting",
    },
    {
      imageSrc: "/images/solutions/Digital-Signage.jpg",
      altText: "Professional audio recording studio with mixing console",
      title: "Digital Signage",
      description:
        "Immersive audio experiences crafted with precision and high-quality sound engineering.",
      link: "/solutions/digitalsignage",
    },
    {
      imageSrc: "/images/solutions/webstreaming.jpg",
      altText: "Professional stage lighting setup with colorful illumination",
      title: "IPTV Web Streaming",
      description:
        "Transformative lighting solutions for impactful visual experiences in any setting.",
      link: "/solutions/iptv-webstreaming",
    },
    {
      imageSrc: "/images/solutions/conference-room.jpg",
      altText: "Modern conference room with video conferencing technology",
      title: "Conference & Collaboration",
      description:
        "Seamlessly connect teams with high-end video conferencing and collaboration solutions.",
      link: "/solutions/conference-room",
    },
  ];
  return (
    <section className="solutions-section">
      {solutions.map((solution, index) => (
        <SolutionCard
          key={index}
          imageSrc={solution.imageSrc}
          altText={solution.altText}
          title={solution.title}
          description={solution.description}
          link={solution.link}
        />
      ))}
    </section>
  );
};

export default SolutionsSection;
