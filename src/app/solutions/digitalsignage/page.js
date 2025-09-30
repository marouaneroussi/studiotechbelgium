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
    imageUrl: "/images/digital_signage/EY0A2742.jpg",
    imageAlt: "Interactive video wall installation showing dynamic content",
    title: "Digital Signage",
    description: "Multi-touch enabled digital signage solution",
  },
  {
    imageUrl: "/images/digital_signage/european-parliement.jpg",
    imageAlt: "Transparent LED display showing ambient content",
    title: "Digital Signage",
    description: "European Parliement",
  },
  {
    imageUrl: "/images/digital_signage/public_entrance.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description:
      "Public entrance. Information offered by server and large LCD screens network",
  },
  {
    imageUrl: "/images/digital_signage/pleanary-session.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description:
      "Plenary session room displayed in real time on a  four L.E.D screens videowal seamlessly",
  },
  {
    imageUrl: "/images/digital_signage/public_entrance.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description:
      "Display of delegates&apos; names on screens L.C.D. mounted on lifts. ",
  },
  {
    imageUrl: "/images/digital_signage/sonatray.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description:
      "Display of delegates&apos; names on screens L.C.D. mounted on lifts. The composition, made by computer, is addressed through the network",
  },

  {
    imageUrl: "/images/digital_signage/evertz-min.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description: "Evertz Solutions",
  },

  {
    imageUrl: "/images/digital_signage/video-wall.jpg",
    imageAlt: "Digital Signage",
    title: "Digital Signage",
    description: "Display in an access corridor on L.E.D video wall seamless",
  },
];

const useCaseData = {
  title: "Digital Signage Applications",
  cases: [
    {
      altText: "Digital signage in retail environment",
      title: "Retail",
      description:
        "Enhance shopping experiences with promotional displays and wayfinding",
    },
    {
      altText: "Corporate office digital signage",
      title: "Corporate",
      description: "Improve internal communications and visitor experiences",
    },
    {
      altText: "Educational institution digital signage",
      title: "Education",
      description: "Keep students and staff informed with campus-wide displays",
    },
  ],
};
const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z",
    title: "Dynamic Content",
    description:
      "Display engaging multimedia content that updates in real-time",
  },
  {
    hasGroup: false,
    iconPath: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    title: "Multi-Screen Management",
    description: "Centrally control content across multiple displays",
  },
  {
    hasGroup: false,
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z",
    title: "Analytics & Reporting",
    description: "Track engagement and optimize your content strategy",
  },
];
const DigitalSignagePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Digital Signage"
        description="Transform your space with dynamic digital displays and content management systems"
        image={"url('/images/dg.jpg') no-repeat center center / cover"}
      />
      <InfoSection
        title={"Our team are here to provide the right digital signage system"}
        desc="A successful digital signage setup involves numerous critical elements. Key factors include the selection of appropriate hardware, software, and content management systems. How the screens are connected, the scale of the deployment, and strategies for ongoing content creation all play essential roles in a seamless digital signage solution."
        image={"/images/digital_signage/public_entrance.jpg"}
        desc_p_two={
          "Our skilled professionals possess deep expertise in creating and delivering high-quality signage systems. We offer flexible solutions designed to adapt to your needs, ensuring engaging and impactful content delivery."
        }
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title={
          "Enhancing Public Entrances with Advanced Digital Signage Solutions"
        }
        desc="At public entrances, digital signage and LCD display networks play a pivotal role in creating a welcoming and informative experience for visitors"
        image={"/images/digital_signage/public_entrance.jpg"}
        desc_p_two={
          "By leveraging large screens and server-based content distribution, businesses can broadcast essential information, offering everything from wayfinding guidance to event announcements."
        }
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3>Versatile Display Solutions</h3>
            <p>
              In public places like airports and shopping centres, digital
              displays on large screens are used to inform and persuade.
            </p>
            <p>
              Displays can as easily be used in the reception area of your
              business, meeting rooms, student lounges, cafeterias, call
              centres, manufacturing floors...virtually any public space or
              network.
            </p>
            <p>
              What you display is only limited by what you can imagine and
              create.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Comprehensive Integration</h3>
            <p>
              Our portfolio of leading brands demonstrates everything from
              wireless microphones and digital intercoms, to multiple video
              projection onto large screens, lighting and display solutions.
            </p>
            <p>
              Studiotech can help you realise all your integrated digital
              signage projects for small, medium and large installations.
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
