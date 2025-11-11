// src/app/components/OfficesSection.js
"use client";

import React, { useState } from "react";
import WorldMap from "./WorldMap"; // ✅ default import
import { offices } from "../../lib/officesData"; // ✅ named import

const REGIONS = ["All", "Europe", "Middle East", "Africa", "North America", "Asia-Pacific"];

export default function OfficesSection() {
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredOffices =
    activeRegion === "All"
      ? offices
      : offices.filter((office) => office.region === activeRegion);

  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Studiotech Offices Around the World
      </h2>

      <div className="flex justify-center mb-6 flex-wrap gap-3">
        {REGIONS.map((region) => (
          <button
            key={region}
            className={`px-4 py-2 rounded-full border ${
              activeRegion === region ? "bg-blue-600 text-white" : "bg-white text-black"
            }`}
            onClick={() => setActiveRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <WorldMap activeRegion={activeRegion} />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
        {filteredOffices.map((office,key) => (
          <div key={key} className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">{office.name}</h3>
            <p className="text-sm text-gray-600">{office.region}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
