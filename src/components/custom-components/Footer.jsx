import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import googlePlayBadge from "../../assets/footer_section/playbutton.png";

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0E0524 , #FFC107)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Responsive Icons */}
        <i
          className="fas fa-cogs text-gray-700 opacity-20"
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            fontSize: 'clamp(40px, 5vw, 70px)',  
          }}
        ></i>
        <i
          className="fas fa-tools text-gray-700 opacity-20"
          style={{
            position: 'absolute',
            top: '50%',
            right: '15%',
            fontSize: 'clamp(30px, 4vw, 50px)',
          }}
        ></i>
        <i
          className="fas fa-briefcase text-gray-700 opacity-20"
          style={{
            position: 'absolute',
            top: '75%',
            right: '6%',
            fontSize: 'clamp(30px, 4vw, 45px)',
          }}
        ></i>
        <i
          className="fas fa-wrench text-gray-700 opacity-20"
          style={{
            position: 'absolute',
            top: '10%',
            right: '18%',
            fontSize: 'clamp(20px, 3vw, 40px)',
          }}
        ></i>
         
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold text-lg mb-4">About Service Me</h5>
            <p className="text-sm text-gray-200 leading-relaxed">
              Service Me connects you with trusted professionals and service providers for all your needs. Explore jobs, find providers, and learn more about our services.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/jobs" className="hover:text-yellow-300">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/service-providers" className="hover:text-yellow-300">
                  Service Providers
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-yellow-300">
                  How it Works
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-yellow-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-right md:text-left">
            <h5 className="font-bold text-lg mb-4">Get the App</h5>
            <p className="text-sm text-gray-200 mb-2">
              Download our app to access services on the go!
            </p>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300"
            >
              <span className="text-sm">Google Play</span>
              <img src={googlePlayBadge} alt="Google Play" className="w-5" />
            </a>
          </div>
        </div>
        <hr className="border-gray-400 my-10" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p className="mb-4 md:mb-0">
            &copy; 2024 <span className="text-yellow-400">Service Me</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
