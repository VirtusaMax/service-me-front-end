import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <div>
              <h5 className="font-bold text-lg">Company Name</h5>
              <p className="text-sm text-gray-400">Short description about the company.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">About Us</a>
              <a href="#" className="hover:text-gray-300">Services</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>&copy; 2024 Service Me. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
