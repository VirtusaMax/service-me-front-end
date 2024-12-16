import React from "react";
import backgroundImage from "../../assets/work_section/worksbg.png";
import ReactPlayer from "react-player";

const HowItWorks = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 px-14 h-[600px] w-full top-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>

      <div className="relative z-10 w-full">
        <h2 className="text-yellow-400 text-3xl font-extrabold mb-8 text-left">
          HOW IT WORKS?
        </h2>
         
          
          <div className="w-[640px] h-[360px] md:w-50 md:h-100 ml-20">
          <ReactPlayer
            url="https://youtu.be/0x5mf8BUJZY?si=xNZbFJSKlt9bKY4A"
            width="100%"
            height="100%"
            controls
          />
         
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
