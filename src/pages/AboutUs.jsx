import React from 'react';
import './AboutUs.css';
import chalaniImage1 from '../assets/truck.png';
import chalaniImage2 from '../assets/workers.png';
import chalaniImage3 from '../assets/help.png';
import chalaniImage4 from '../assets/ok_hand.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>ABOUT US</h2>
      <div className="about-us-container">
        <div className="about-us-item">
        <img src={chalaniImage1} alt="Truck" />
          <h3><b>FAST & RELIABLE HOME SERVICES</b></h3>
          <p>Looking for a fast fix, a spotless home, or a well-kept lawn? We connect you with trusted local experts ready to help!</p>
        </div>
        
        <div className="about-us-item">
        <img src={chalaniImage2} alt="Worker" />
          <h3><b>LOCAL EXPERTS AT YOUR SERVICE</b></h3>
          <p>Find skilled freelancers in your neighborhood for any home task: repairs, cleaning, yard work, and more, all at your convenience.</p>
        </div>
        
        <div className="about-us-item">
        <img src={chalaniImage3} alt="Support_Hand" />
          <h3><b>SUPPORTING YOUR COMMUNITY</b></h3>
          <p>We believe in empowering local professionals while simplifying your life. Every service supports your community and is completed with utmost care.</p>
        </div>
        
        <div className="about-us-item">
        <img src={chalaniImage4} alt="Ok_Hand" />
          <h3><b>SIMPLIFY YOUR LIFE</b></h3>
          <p>Book easily, communicate directly, and enjoy hassle-free service—all in one platform!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
