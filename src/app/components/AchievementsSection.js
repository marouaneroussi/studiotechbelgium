"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "RTS – Senegal",
    subtitle: "Broadcast Infrastructure Modernisation",
    description:
      "Complete modernisation of two TV studios, control rooms and mobile DSNG units in Senegal by Studiotech Belgium.",
    link: "/solutions/broadcast-senegal",
    imageUrl: "/images/obvans.jpg",
  },
  {
    title: "Mobile Studio System",
    subtitle: "Multi-Camera News Gathering Solution",
    description:
      "Field-deployable multi-camera mobile studio system developed and delivered by Studiotech Belgium.",
    link: "/solutions/mobile-studio",
    imageUrl: "/images/services/mobile-studio-system.jpeg",
  },
  {
    title: "Betar Radio – Bangladesh",
    subtitle: "Digital Radio Station Implementation",
    description:
      "Turnkey installation of five-studio radio station + master control rooms and RF transmission for Betar in Dhaka.",
    link: "/solutions/radio-bangladesh",
    imageUrl: "/images/services/radio_bangladesh.jpg",
  },
  {
    title: "Broadcast Sports VAR & OB Vans",
    subtitle: "OB Vans & Live Production for African Championships",
    description:
      "Design and delivery of OB Vans and live production systems for major African sports events by Studiotech Belgium.",
    link: "/solutions/ob-vans-sports",
    imageUrl: "/images/services/var.jpg",
  },
  {
    title: "DSNG/OB Truck – Niger",
    subtitle: "10-Camera HD Production Truck",
    description:
      "Supply and commissioning of a 10-camera HD production truck for the Republic of Niger by Studiotech Belgium.",
    link: "/solutions/truck-niger",
    imageUrl: "/images/services/Production-truck.jpeg",
  },
  {
    title: "Transmission & Digital Workflow Solutions",
    subtitle: "Turnkey Transmission Networks & Digital Integration",
    description:
      "End-to-end digital workflow and transmission network projects executed globally by Studiotech Belgium.",
    link: "/solutions/transmission-workflow",
    imageUrl: "/images/services/transmission_workflow.jpg",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-black">
      <h2 className="text-center text-5xl font-bold text-[#fecc00] mb-16">
        OUR WORK
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-6">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group relative rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative h-80 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-90"></div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <h4 className="text-md text-[#fecc00] font-semibold">
                {item.subtitle}
              </h4>
              <p className="mt-2 text-sm opacity-90">{item.description}</p>
              <Link
                href={item.link}
                className="inline-block mt-3 text-[#fecc00] font-medium hover:underline"
              >
                Explore More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/news"
          className="px-10 py-4 rounded-xl font-semibold bg-[#fecc00] text-black hover:bg-[#ffdd44] transition"
        >
          View All Case Studies
        </Link>
      </div>
    </section>
  );
}
