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
    imageUrl: "/images/conference_room/algeria-sonatrach-room.jpg",
    imageAlt: "Algeria Sonatrach Room of 24 February",
    title: "Conference Room",
    description: "Algeria Sonatrach Room of 24 February",
  },
  {
    imageUrl: "/images/conference_room/conference-chairman.jpg",
    imageAlt: "Room of 24 February - Chairman Table",
    title: "Conference Room",
    description: "Room of 24 February - Chairman Table",
  },
  {
    imageUrl: "/images/conference_room/room-of-24.jpg",
    imageAlt: "Room of 24 February, custom design",
    title: "Conference Room",
    description: "Room of 24 February, custom design",
  },
  {
    imageUrl: "/images/conference_room/Armchairs-designated-sontatrach.jpg",
    imageAlt: "Armchairs designated for Sonatrach",
    title: "Conference Room",
    description: "Armchairs designated for Sonatrach",
  },
  {
    imageUrl: "/images/conference_room/technical-board-room.jpg",
    imageAlt: "Technical board Room of 24 February",
    title: "Conference Room",
    description: "Technical board Room of 24 February",
  },
  {
    imageUrl:
      "/images/conference_room/Simultaneous-interpreting-booth-with-ISO-standards.jpg",
    imageAlt: "Simultaneous interpreting booth with ISO standards",
    title: "Conference Room",
    description: "Simultaneous interpreting booth with ISO standards",
  },

  {
    imageUrl: "/images/conference_room/Sonatrach-Algeria-Irara-Room.jpg",
    imageAlt:
      "Sonatrach Algeria Irara Room in network with the Salle du 24 Février",
    title: "Conference Room",
    description:
      "Sonatrach Algeria Irara Room in network with the Salle du 24 Février",
  },

  {
    imageUrl: "/images/conference_room/Sonatrach-Algeria-Irara-Room.jpg",
    imageAlt:
      "Room Irara, realization architecture installation containing and content",
    title: "Conference Room",
    description:
      "Room Irara, realization architecture installation containing and content",
  },
];

const useCaseData = {
  title: " Conference Room Solutions ",
  cases: [
    {
      altText: "Executive Boardrooms",
      title: "Executive Boardrooms",
      description:
        "Premium conferencing solutions with advanced audio-visual systems and sophisticated control interfaces",
    },
    {
      altText: "Huddle Rooms",
      title: "Huddle Rooms",
      description:
        "Compact but powerful meeting spaces with essential collaboration tools and video conferencing capabilities",
    },
    {
      altText: "Training Rooms",
      title: "Training Rooms",
      description:
        "Versatile spaces equipped with presentation tools, interactive displays, and flexible seating arrangements",
    },
  ],
};
const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z",
    title: "Video Conferencing",
    description:
      "Professional video conferencing capabilities with HD cameras and display systems",
  },
  {
    hasGroup: false,
    iconPath:
      "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
    title: "Room Management",
    description:
      "Smart scheduling and booking systems for efficient space utilization",
  },
  {
    hasGroup: false,
    iconPath:
      "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z",
    title: "Collaboration Tools",
    description:
      "Interactive displays and wireless presentation solutions for seamless sharing",
  },
];
const DigitalSignagePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Modern Conference Room Solutions"
        description="Transform your meeting spaces with state-of-the-art conferencing technology, collaborative tools, and intelligent room management systems"
        image={
          "url('/images/conference_room/modern-conference-room.jpg') no-repeat center center / cover"
        }
      />
      <InfoSection
        title={"Transform Your Conference Spaces"}
        desc="Elevate your meeting rooms with our comprehensive conference solutions that combine cutting-edge technology with practical innovation. We provide everything you need to create productive meeting spaces that enhance collaboration and communication."
        image={"/images/conference_room/corporate-presentation.jpg"}
        desc_p_two={"Our conference room solutions include:"}
        bulletPoints={[
          "→ Video conferencing systems",
          "→ Room scheduling tools",
          "→ Interactive displays",
          "→ Audio solutions ",
          "→ Wireless presentation systems",
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title={"Revolutionize Your Meeting Experience"}
        desc="Step into the future of business communication with our state-of-the-art conference room solutions. Our integrated systems combine intelligent automation, crystal-clear audiovisual technology, and intuitive controls to create meeting spaces that inspire collaboration and drive productivity to new heights."
        image={"/images/conference_room/videoprojecteur.jpg"}
        desc_p_two={"Our conference room solutions include:"}
        bulletPoints={[
          "→ Automated room controls",
          "→ 4K video conferencing",
          "→ Smart scheduling displays",
          "→ Spatial audio systems ",
          "→ Cloud integration",
        ]}
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section ">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3 className="font-bold">Smart Room Integration</h3>
            <p>
              Modern conference spaces demand intelligent integration of various
              technologies to create seamless meeting experiences. Our
              comprehensive solutions cover everything from room automation to
              advanced presentation systems, ensuring your meetings run smoothly
              and efficiently.
            </p>
            <p>
              We understand the unique challenges of modern collaboration, from
              hybrid meetings to multimedia content sharing, and provide
              scalable solutions that adapt to your organization's needs.
            </p>
          </div>
          <div className="text-content-block">
            <h3 className="font-bold">Meeting Space Management</h3>
            <p>
              Our conference room solutions provide robust management tools for
              room scheduling, resource allocation, and usage analytics. We
              understand the complexities of managing modern meeting spaces and
              offer solutions that optimize utilization.
            </p>
            <p>
              From automated check-in systems to detailed usage reports, our
              platform ensures your meeting spaces are used effectively while
              maintaining the highest standards of user experience and
              technological reliability.
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
