// components/UseCases.js
import React from "react";
import Image from "next/image";

const UseCases = ({ title, cases }) => {
  return (
    <section className="use-cases py-8">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="use-cases-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((useCase, index) => (
          <div
            key={index}
            className="use-case bg-gray-800 p-4 rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
            <p className="text-gray-300">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
