import React from "react";
import backgroundImage from "../../assets/work_section/worksbg.png";

const HowItWorks = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 px-14 h-[600px] w-full top-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full">
        {/* Title */}
        <h2 className="text-yellow-400 text-3xl font-extrabold mb-8 text-left">
          HOW IT WORKS?
        </h2>

        {/* Gray video box with expanded width */}
        <div className="bg-gray-300 flex justify-center items-center py-20 px-6 md:py-32 md:h-[400px] w-full">
          <p className="text-xl font-bold text-indigo-900">
            NEED TO ADD VIDEO FOR THIS SPACE
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
