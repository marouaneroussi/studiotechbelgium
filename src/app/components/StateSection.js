"use client";

import React from "react";
import {
  Users,
  Globe,
  Building2,
  Map,
  Star,
  BadgeCheck,
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      value: "2600+",
      description: "Associates Worldwide",
      icon: Users,
    },
    {
      value: "40+",
      description: "Locations Worldwide",
      icon: Globe,
    },
    {
      value: "30+",
      description: "Years in Business",
      icon: Building2,
    },
    {
      value: "60+",
      description: "Countries Worldwide",
      icon: Map,
    },
    {
      value: "70",
      description: "Fortune 100 Clients",
      icon: Star,
    },
    {
      value: "100+",
      description: "SMPTE ST 2110 / ST 2022 Projects Delivered",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="stats-section mt-16 px-4">
      <div className="vision-statement text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-[2.5rem] font-bold mt-[50px] mb-[70px]">
          Building a World Without Boundaries
        </h1>
        <p className="text-[1.5rem] font-light opacity-80 mb-2">
          Where every experience transcends the technology that enables it.
        </p>
        <p className="font-extralight opacity-80">
          Diversified partners with clients to design and build immersive spaces
          that bring people together and keep them coming back.
        </p>
      </div>

      <div className="stats-grid grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="stat-card bg-[#FECC00] text-center p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-black opacity-90" />
              </div>

              <h2 className="text-4xl font-extrabold text-black mb-1">
                {stat.value}
              </h2>
              <p className="text-black text-sm font-medium opacity-80">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
