import React, { useState } from "react";
import icon1 from "../../assets/service_provider/icons/icon1.png";
import icon2 from "../../assets/service_provider/icons/icon2.png";
import icon3 from "../../assets/service_provider/icons/icon3.png";
import icon4 from "../../assets/service_provider/icons/icon4.png";
import icon5 from "../../assets/service_provider/icons/icon5.png";
import icon6 from "../../assets/service_provider/icons/icon6.png";
import icon7 from "../../assets/service_provider/icons/icon7.png";
import icon8 from "../../assets/service_provider/icons/icon8.png";
import icon9 from "../../assets/service_provider/icons/icon9.png";
import bellIcon from "../../assets/service_provider/icons/bell.png";
import postJobIcon from "../../assets/service_provider/icons/postJob.png";
import findJobIcon from "../../assets/service_provider/icons/findJob.png";

const TopNavbar = ({ selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { icon: icon1, label: "Cleaner" },
    { icon: icon2, label: "Chef" },
    { icon: icon3, label: "Painter" },
    { icon: icon4, label: "Mechanic" },
    { icon: icon5, label: "Plumber" },
    { icon: icon6, label: "Beautician" },
    { icon: icon7, label: "Elder Care" },
    { icon: icon8, label: "Child Care" },
    { icon: icon9, label: "Driver" },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 text-gray-800 shadow-sm">
      {/* Left Section for Categories */}
      <div className="hidden sm:flex sm:space-x-3">
        {/* 'ALL' Category */}
        <div
          className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
          onClick={() => setSelectedCategory("ALL")}
        >
          <span className="font-bold">ALL</span>
        </div>
        {/* Render Other Categories */}
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
            onClick={() => setSelectedCategory(item.label)}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
          </div>
        ))}
      </div>

      {/* Dropdown for Smaller Screens */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none"
        >
          <span className="text-gray-800 font-bold">Categories</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-40">
            {/* Dropdown Item for 'ALL' */}
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedCategory("ALL");
                setIsDropdownOpen(false);
              }}
            >
              All
            </div>
            {/* Dropdown Items for Other Categories */}
            {categories.map((item, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedCategory(item.label);
                  setIsDropdownOpen(false);
                }}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section for Actions */}
      <div className="flex items-center space-x-4">
        {/* Post Job Button */}
        <button className="flex flex-col items-center bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-300">
          <img src={postJobIcon} alt="Post Job" className="w-4 h-4 mb-1" />
          <span className="text-sm font-bold">POST JOB</span>
        </button>
        {/* Find Work Button */}
        <button className="flex flex-col items-center bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-300">
          <img src={findJobIcon} alt="Find Work" className="w-4 h-4 mb-1" />
          <span className="text-sm font-bold">FIND WORK</span>
        </button>
        {/* Notifications Button */}
        <button className="p-2 bg-white hover:bg-gray-200 rounded-full shadow-sm transition duration-300">
          <img src={bellIcon} alt="Notifications" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
