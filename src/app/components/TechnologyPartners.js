"use client";
import Image from "next/image";
import React, { useState } from "react";

const partners = [
  {
    src: "/images/partners/11_Evertz_Logo_2.png",
    hoverSrc: "/images/partners/11_Evertz_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/4_Barco_logo_2.png",
    hoverSrc: "/images/partners/4_Barco_logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/32_Sennheiser-Logo_2.png",
    hoverSrc: "/images/partners/32_Sennheiser-Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/30_Ross_Video_Logo_2.png",
    hoverSrc: "/images/partners/30_Ross_Video_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/34_Shure_Logo_2.png",
    hoverSrc: "/images/partners/34_Shure_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/35_Sony_logo_2.png",
    hoverSrc: "/images/partners/35_Sony_logo_1.png",
    alt: "Absen logo",
  },

  {
    src: "/images/partners/33_SHARP-NEC-logo_2.png",
    hoverSrc: "/images/partners/33_SHARP-NEC-logo_1.png",
    alt: "Absen logo",
  },

  {
    src: "/images/partners/22_Microsoft_logo_2.png",
    hoverSrc: "/images/partners/22_Microsoft_logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/25_NewTek_logo_2.png",
    hoverSrc: "/images/partners/25_NewTek_logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/29_Riedel_Logo_2.png",
    hoverSrc: "/images/partners/29_Riedel_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/1_Belden_Logo_2.png",
    hoverSrc: "/images/partners/1_Belden_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/1_BOSCH_Logo_2.png",
    hoverSrc: "/images/partners/1_BOSCH_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/7_grass-valley_Logo_2.png",
    hoverSrc: "/images/partners/7_grass-valley_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/21_Logitech_logo_2.png",
    hoverSrc: "/images/partners/21_Logitech_logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/10_planar_logo_2.png",
    hoverSrc: "/images/partners/10_planar_logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/aeq.png",
    hoverSrc: "/images/partners/aeq.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/arri-logo-2.png",
    hoverSrc: "/images/partners/ARRI_AG_Corporate_Logo.svg.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/Avid_logo_1.png",
    hoverSrc: "/images/partners/Avid_logo_2.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/29_Riedel_Logo_2.png",
    hoverSrc: "/images/partners/29_Riedel_Logo_1.png",
    alt: "Absen logo",
  },
  {
    src: "/images/partners/1_Belden_Logo_2.png",
    hoverSrc: "/images/partners/1_Belden_Logo_1.png",
    alt: "Absen logo",
  },
];

const TechnologyPartners = () => {
  return (
    <section className="all-partners">
      <h2>Our Technology Partners</h2>
      <div className="partner-logo-grid">
        {partners.map((partner, index) => (
          <PartnerLogo
            key={index}
            src={partner.src}
            hoverSrc={partner.hoverSrc}
            alt={partner.alt}
          />
        ))}
      </div>
    </section>
  );
};

const PartnerLogo = ({ src, hoverSrc, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div
      className="logo-item"
      onMouseEnter={() => setCurrentSrc(hoverSrc)}
      onMouseLeave={() => setCurrentSrc(src)}
    >
      <Image src={currentSrc} alt={alt} width={200} height={200} />
    </div>
  );
};

export default TechnologyPartners;
