import React from "react";
import aboutUsData from "../../data/aboutUsData.json";

const AboutUs = () => {
  return (
    <section className="bg-white text-left p-8">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">ABOUT US</h2>
      <div className="bg-yellow-400 rounded-lg shadow-lg p-8 flex flex-wrap justify-left max-w-screen-xxl mx-auto">
        {aboutUsData.map((item, index) => (
          <div key={index} className="text-left max-w-[282px] m-8">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
            <p className="text-sm leading-relaxed text-black-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
