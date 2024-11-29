import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "2600+", description: "Associates Worldwide" },
    { value: "40+", description: "Locations Worldwide" },
    { value: "30+", description: "Years in Business" },
    { value: "60+", description: "Countries Worldwide" },
    { value: "70", description: "Fortune 100 Clients" },
    {
      value: "100+",
      description: "SMPTE ST 2110 / ST 2022 Projects Delivered",
    },
  ];

  return (
    <section className="stats-section mt-16 px-4">
      <div className="vision-statement text-center max-w-3xl mx-auto mb-12">
        <h1 className=" text-[2.5rem]  font-bold text-center  mt-[50px] mb-[70px]">
          Building a World Without Boundaries
        </h1>
        <p className="text-[1.5rem] font-light opacity-[0.8]  mb-2">
          Where every experience transcends the technology that enables it.
        </p>
        <p className="font-extralight opacity-[0.8]">
          Diversified partners with clients to design and build immersive spaces
          that bring people together and keep them coming back.
        </p>
      </div>

      <div className="stats-grid grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card bg-gray-800 text-center p-6 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-4xl font-bold ">{stat.value}</h2>
            <p className="text-gray-800 font-[0.9rem]">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
