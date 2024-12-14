import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import googlePlayBadge from "../../assets/footer_section/playbutton.png";

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white "
      style={{
        backgroundImage: 'linear-gradient(135deg, #0E0524 , #FFC107)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 90"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-white"
          ></path>
        </svg>
      </div>

    
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
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
              <li>
                <a href="/contact" className="hover:text-yellow-300">
                  Contact Us
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
