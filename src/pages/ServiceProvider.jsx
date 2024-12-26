import React, { useState } from "react";
import JobCard from "../section/service_provider/JobCard";
import workprofile from "../assets/service_provider/workprofile.png"; // Worker image
import workprofile1 from "../assets/service_provider/workprofile1.png"; // First profile image
import workprofile2 from "../assets/service_provider/workprofile2.jpg"; // Second profile image
import workprofile3 from "../assets/service_provider/workprofile3.png"; // Third profile image
import icon1 from "../assets/service_provider/icons/icon1.png"; // Icon 1
import icon2 from "../assets/service_provider/icons/icon2.png"; // Icon 2
import icon3 from "../assets/service_provider/icons/icon3.png"; // Icon 3
import icon4 from "../assets/service_provider/icons/icon4.png"; // Icon 4
import icon5 from "../assets/service_provider/icons/icon5.png"; // Icon 5
import icon6 from "../assets/service_provider/icons/icon6.png"; // Icon 6
import icon7 from "../assets/service_provider/icons/icon7.png"; // Icon 7
import icon8 from "../assets/service_provider/icons/icon8.png"; // Icon 8
import icon9 from "../assets/service_provider/icons/icon9.png"; // Icon 9
import bellIcon from "../assets/service_provider/icons/bell.png"; // Bell icon
import postJobIcon from "../assets/service_provider/icons/postJob.png"; // Icon for Post Job
import findJobIcon from "../assets/service_provider/icons/findJob.png"; // Icon for Find Job

const ServiceProvider = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const jobs = [
    { name: "Mike S.", location: "Colombo", phone: "070 455####", date: "Jun 2019", profileImage: workprofile1, category: "Cleaner" },
    { name: "John D.", location: "Galle", phone: "070 123####", date: "Aug 2020", profileImage: workprofile2, category: "Chef" },
    { name: "Sara P.", location: "Kandy", phone: "070 789####", date: "Feb 2021", profileImage: workprofile3, category: "Painter" },
  ];

  const filteredJobs = selectedCategory === "ALL" ? jobs : jobs.filter(job => job.category === selectedCategory);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between bg-gray-100 p-4 text-gray-800 shadow-sm">
        {/* Middle Section */}
        <div className="hidden sm:flex sm:space-x-3">
          <div
            className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
            onClick={() => setSelectedCategory("ALL")}
          >
            <span className="font-bold">ALL</span>
          </div>
          {[{ icon: icon1, label: "Cleaner" },
            { icon: icon2, label: "Chef" },
            { icon: icon3, label: "Painter" },
            { icon: icon4, label: "Mechanic" },
            { icon: icon5, label: "Plumber" },
            { icon: icon6, label: "Beautician" },
            { icon: icon7, label: "Elder Care" },
            { icon: icon8, label: "Child Care" },
            { icon: icon9, label: "Driver" }].map((item, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
                onClick={() => setSelectedCategory(item.label)}
              >
                <img src={item.icon} alt={item.label} className="w-8 h-8" />
              </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="flex flex-col items-center bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-300">
            <img src={postJobIcon} alt="Post Job" className="w-8 h-8 mb-1" />
            <span className="text-sm font-bold">POST JOB</span>
          </button>
          <button className="flex flex-col items-center bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-300">
            <img src={findJobIcon} alt="Find Work" className="w-8 h-8 mb-1" />
            <span className="text-sm font-bold">FIND WORK</span>
          </button>
          <button className="p-2 bg-white hover:bg-gray-200 rounded-full shadow-sm transition duration-300">
            <img src={bellIcon} alt="Notifications" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="flex justify-center sm:col-span-2 lg:col-span-1">
            <img
              src={workprofile} // Worker image
              alt="Worker"
              className="object-cover rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Job Cards Section */}
          <div className="w-full sm:col-span-2 lg:col-span-2">
            {filteredJobs.map((job, index) => (
              <JobCard
                key={index}
                name={job.name}
                location={job.location}
                phone={job.phone}
                date={job.date}
                profileImage={job.profileImage} // Profile image for the job
                category={job.category} // Category prop passed here
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
