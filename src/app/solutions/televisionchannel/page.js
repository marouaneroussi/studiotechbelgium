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
    imageUrl: "/images/televisionchannel/chaines_TV_02.jpg",
    imageAlt: "advanced virtual studio broadcast",
    title: "Virtual Studio",
    description: "advanced virtual studio broadcast studiotech",
  },
  {
    imageUrl: "/images/televisionchannel/studiotech-office.jpg",
    imageAlt: "Belgium Studiotech offices",
    title: "Television Channel",
    description: "Belgium Studiotech offices",
  },
  {
    imageUrl: "/images/televisionchannel/rtn.jpg",
    imageAlt: "Belgium RTL-TVi studios",
    title: "Television Channel",
    description: "Belgium RTL-TVi studios",
  },
  {
    imageUrl: "/images/televisionchannel/ortn-niger.jpg",
    imageAlt: "Ortn Niger Television Studio",
    title: "Television Channel",
    description: "Ortn Niger Television Studio",
  },
  {
    imageUrl: "/images/televisionchannel/ort-niger-mixer.jpg",
    imageAlt: "ort-niger-mixer",
    title: "Television Channel",
    description: "Belgium Studiotech offices",
  },
  {
    imageUrl: "/images/televisionchannel/chaines_TV_05.jpg",
    imageAlt: "Belgium RTL-TVi studio",
    title: "Television Channel",
    description: "Belgium RTL-TVi studio ",
  },
  {
    imageUrl: "/images/televisionchannel/table de montage multiviewers.JPG",
    imageAlt: "table de montage multiviewers",
    title: "Television Channel",
    description: "table de montage multiviewers",
  },

  {
    imageUrl: "/images/televisionchannel/assembling_09c.jpg",
    imageAlt: "Belgium RTL-TVi studio",
    title: "Television Channel",
    description: "Belgium RTL-TVi studio",
  },
];

const useCaseData = {
  title: "Television Channel Solutions",
  cases: [
    {
      altText: "News Broadcasting",
      title: "News Broadcasting",
      description:
        "Comprehensive news channel management with automated playout systems, live production tools, and real-time graphics integration",
    },
    {
      altText: "Sports Network",
      title: "Sports Network",
      description:
        "End-to-end sports channel solutions including multi-camera production, instant replay systems, and statistical overlay tools",
    },
    {
      altText: "Entertainment Channel",
      title: "Entertainment Channel",
      description:
        "Complete entertainment channel management with scheduling automation, content management, and dynamic graphics systems",
    },
  ],
};

const featuresData = [
  {
    hasGroup: false,
    iconPath:
      "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z",
    title: "Live Broadcasting",
    description:
      "Professional live broadcasting capabilities with multi-camera support and real-time streaming",
  },
  {
    hasGroup: false,
    iconPath:
      "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z",
    title: "Content Management",
    description:
      "Advanced scheduling and playout automation for seamless programming",
  },
  {
    hasGroup: false,
    iconPath:
      "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z",
    title: "Channel Distribution",
    description:
      "Multi-platform distribution with support for cable, satellite, and digital streaming",
  },
];

const televisionChannel = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        hasparticles={true}
        hasBanner={false}
        title="Television Channel Solutions"
        description="Elevate your television channel with cutting-edge broadcast technology, dynamic virtual sets, and comprehensive media solutions"
        image="url('/images/televisionchannel/broadcast-control-room.jpg') no-repeat center center / cover"
      />
      <InfoSection
        title="Professional Television Broadcasting Infrastructure"
        desc="We provide comprehensive television channel solutions encompassing broadcast equipment, virtual studio environments, channel branding, and transmission infrastructure. From local stations to national networks, our expertise ensures seamless integration and reliable broadcasting operations."
        desc_p_two={
          "Based on state-of-the-art, reliable and efficient technology, our solutions enable:"
        }
        image="/images/televisionchannel/chaines_TV_05.jpg"
        bulletPoints={[
          "→ Channel playout automation",
          "→ Multi-channel broadcasting",
          "→ Integrated graphics & branding",
          "→ Live production capabilities",
          "→ Content scheduling & management",
        ]}
      />
      <FeaturesSection features={featuresData} />
      <InfoSection
        title="Advanced Broadcasting Technology Solutions"
        desc="Take your television channel to new heights with our comprehensive broadcast solutions that combine state-of-the-art technology with creative innovation. We provide everything you need to create compelling programming that engages viewers and drives ratings. Our television channel solutions include:"
        image="/images/televisionchannel/chaines_TV_02.jpg"
        row_direction={true}
      />
      <UseCases title={useCaseData.title} cases={useCaseData.cases} />
      <section className="text-content-section">
        <div className="text-content-wrapper">
          <div className="text-content-block">
            <h3>End-to-End Broadcast Solutions</h3>
            <p>
              Modern television channels require sophisticated broadcast
              infrastructure to deliver high-quality content 24/7. Our
              comprehensive solutions cover everything from master control rooms
              to playout automation, ensuring seamless operations across your
              entire broadcast chain.
            </p>
            <p>
              We understand the unique challenges of television broadcasting,
              from content scheduling to regulatory compliance, and provide
              scalable solutions that grow with your channel.
            </p>
          </div>
          <div className="text-content-block">
            <h3>Channel Management Excellence</h3>
            <p>
              Our television channel solutions provide robust management tools
              for content scheduling, advertising integration, and
              multi-platform distribution. We understand the complexities of
              running a modern TV channel and offer solutions that streamline
              operations.
            </p>
            <p>
              From program rights management to automated content delivery
              systems, our platform ensures your channel runs smoothly 24/7
              while maintaining the highest broadcast standards and quality.
            </p>
          </div>
        </div>
      </section>
      <Gallery items={items} />
      <Footer />
    </>
  );
};

export default televisionChannel;
