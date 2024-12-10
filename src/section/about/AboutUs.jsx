import React from "react";
import aboutUsData from "../../data/aboutUsData.json";

const AboutUs = () => {
  return (
    <section className="bg-[#F6F1F1] text-left p-8">
      <h2 className="font-bold mt-28 mb-2 text-4xl text-yellow-400">ABOUT US</h2>
      <div className="bg-yellow-400 mt-5 rounded-lg shadow-lg p-6 grid gird-col-1 sm:grid-cols-2 xl:grid-cols-4 mx-auto">
        {aboutUsData.map((item, index) => (
          <div key={index} className="sm:text-left max-w-[282px] m-8">
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
