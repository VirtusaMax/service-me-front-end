import React from 'react';
import './AboutUs.css';
import aboutUsData from '../../constants/aboutUsData';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>ABOUT US</h2>
      <div className="about-us-container">
        {aboutUsData.map((item, index) => (
          <div key={index} className="about-us-item">
            <img src={item.img} alt={item.alt} />
            <h3><b>{item.title}</b></h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
