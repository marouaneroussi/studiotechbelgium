"use client";

import Link from "next/link";
import React, { useState } from "react";

const positions = [
  {
    title: "Sales Engineer",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "engineering",
    description:
      "Studiotech Belgium is seeking for our office in Belgium a Sales Engineer, bilingual in Dutch/French. Knowledge of English at an intermediate level is required.",
    file_path : "files/sales.doc"
    },
  {
    title: "IT Specialist",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "engineering",
    description:
      "Studiotech Belgium is seeking an IT specialist based in our Brussels office, with a real passionfor IT-centric technologies and operational models within a broadcasting environment.  Willing to travel as required.",
    file_path : "files/it-specialist.pdf"
    },
  
  {
    title: "Electricien",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "Electrician",
    description:
      "Studiotech Belgium is seeking a hands-on Industrial Electrician based in our Brussels office, with a real passion for basic electronics and electricity, with the ability to travel as required.",
   file_path : "files/electrician.docx"
    },
    {
    title: "Broadcast Engineer",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "engineering",
    description:
      "Studiotech Belgium is seeking for our office in Belgium an experienced Purchasing Manager based in our Brussels office.",
    file_path : "files/broadcast.pdf"
    },
  {
    title: "Purchasing Manager",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "purchase",
    description:
      "Studiotech Belgium is seeking for our office in Belgium an experienced Purchasing Manager based in our Brussels office.",
    file_path : "files/purchasing-manager.pdf"
    },
];

const PositionsSection = () => {
  const [filter, setFilter] = useState("all");
  const [fadeKey, setFadeKey] = useState(0); // Unique key for triggering re-render

  const filteredPositions =
    filter === "all"
      ? positions
      : positions.filter((position) => position.category === filter);

  const handleFilterChange = (newFilter) => {
    setFadeKey((prevKey) => prevKey + 1); // Trigger fade-out and fade-in
    setFilter(newFilter);
  };

  return (
    <section className="positions-section ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-4xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Join Our Growing Team
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-200 text-lg">
          We&apos;re always looking for talented individuals who share our
          passion for innovation in broadcast technology. Explore our current
          opportunities below.
        </p>

        <div className="positions-filter py-6 px-8 rounded-lg mb-16 flex justify-center gap-6 flex-wrap shadow-md">
          <button
            className={`filter-btn ${
              filter === "all" ? "active" : ""
            } text-yellow-400`}
            onClick={() => handleFilterChange("all")}
          >
            All Positions ({positions.length})
          </button>
          <button
            className={`filter-btn ${
              filter === "engineering" ? "active" : ""
            } text-yellow-400`}
            onClick={() => handleFilterChange("engineering")}
          >
            Engineering (
            {positions.filter((pos) => pos.category === "engineering").length})
          </button>
          <button
            className={`filter-btn ${
              filter === "sales" ? "active" : ""
            } text-yellow-400`}
            onClick={() => handleFilterChange("sales")}
          >
            Sales ({positions.filter((pos) => pos.category === "sales").length})
          </button>
          <button
            className={`filter-btn ${
              filter === "operations" ? "active" : ""
            } text-yellow-400`}
            onClick={() => handleFilterChange("operations")}
          >
            Operations (
            {positions.filter((pos) => pos.category === "operations").length})
          </button>
        </div>

        <div
          key={fadeKey} // Key ensures fade animation on filter change
          className="positions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in"
        >
          {filteredPositions.map((position, index) => (
            <div
              key={index}
              className="position-card bg-opacity-10 backdrop-blur-md border border-gray-600 rounded-lg p-6 flex flex-col justify-between min-h-[300px] shadow-md"
            >
              <div>
                <h3 className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  {position.title}
                </h3>
                <div className="position-meta flex gap-4 mb-4 text-gray-300 text-sm">
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
                <p className="position-description text-gray-300 mb-6">
                  {position.description}
                </p>
              </div>
              <Link
                href={position.file_path}
                className="apply-btn bg-yellow-500 text-black rounded-full py-2 px-6 text-sm hover:bg-yellow-600 transition-all"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;
