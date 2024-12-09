import React from "react";
import backgroundImage from "../../assets/work_section/worksbg.png"; // Adjust path as per your project structure

const HowItWorks = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 px-14 h-[600px] w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Title Section */}
        <h2 className="text-yellow-400 text-3xl font-extrabold mb-8 text-left drop-shadow-lg">
          HOW IT WORKS?
        </h2>

        {/* Video Placeholder */}
        <div className="bg-gray-300 flex justify-center items-center py-20 px-6 md:py-32 md:h-[400px]">
          <p className="text-xl font-bold text-indigo-900">
            NEED TO ADD VIDEO FOR THIS SPACE
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
