import React from 'react';
import './AboutUs.css';
import chalaniImage1 from '../assets/truck.png';
import chalaniImage2 from '../assets/workers.png';
import chalaniImage3 from '../assets/help.png';
import chalaniImage4 from '../assets/ok_hand.png';

const aboutUsData = [
  {
    img: chalaniImage1,
    title: "FAST & RELIABLE HOME SERVICES",
    description: "Looking for a fast fix, a spotless home, or a well-kept lawn? We connect you with trusted local experts ready to help!",
    alt: "Truck",
  },
  {
    img: chalaniImage2,
    title: "LOCAL EXPERTS AT YOUR SERVICE",
    description: "Find skilled freelancers in your neighborhood for any home task: repairs, cleaning, yard work, and more, all at your convenience.",
    alt: "Worker",
  },
  {
    img: chalaniImage3,
    title: "SUPPORTING YOUR COMMUNITY",
    description: "We believe in empowering local professionals while simplifying your life. Every service supports your community and is completed with utmost care.",
    alt: "Support_Hand",
  },
  {
    img: chalaniImage4,
    title: "SIMPLIFY YOUR LIFE",
    description: "Book easily, communicate directly, and enjoy hassle-free service—all in one platform!",
    alt: "Ok_Hand",
  },
];

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
}

export default AboutUs;
