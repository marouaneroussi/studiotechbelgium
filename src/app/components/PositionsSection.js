"use client";

import React, { useState } from "react";

const positions = [
  {
    title: "Project Manager",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "operations",
    description:
      "We are looking for a Project Manager to join StudioTech Belgium's dynamic team. You will manage audiovisual integration projects from A to Z, including budget control, planning, and team coordination. Requirements: Experience in AV or broadcast industry, excellent communication skills, and ability to manage multiple projects.",
  },
  {
    title: "Audiovisual System Engineer",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "engineering",
    description:
      "Join us as an Audiovisual System Engineer to design and implement cutting-edge AV solutions. You'll work with the latest broadcast and AV technologies. Requirements: Technical degree, knowledge of AV systems, and passion for innovative technology.",
  },
  {
    title: "Technical Support Engineer",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "engineering",
    description:
      "As a Technical Support Engineer, you'll provide first-line support for our broadcast and AV solutions. You'll troubleshoot issues and ensure optimal system performance. Requirements: Technical background, problem-solving skills, and customer service orientation.",
  },
  {
    title: "Sales Manager",
    location: "Brussels, Belgium",
    type: "Full-time",
    category: "sales",
    description:
      "We're seeking an experienced Sales Manager to develop our market presence. You'll work with key accounts and identify new business opportunities in the broadcast and AV sector. Requirements: Proven sales experience, industry knowledge, and strong networking abilities.",
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
          We're always looking for talented individuals who share our passion
          for innovation in broadcast technology. Explore our current
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
              <a
                href="https://studiotech.be/careers/apply"
                className="apply-btn bg-yellow-500 text-black rounded-full py-2 px-6 text-sm hover:bg-yellow-600 transition-all"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;
