import React, { useState } from "react";
import JobCard from "../section/service_provider/JobCard";
import workprofile from "../assets/service_provider/workprofile.png";
import workprofile1 from "../assets/service_provider/workprofile1.png";
import workprofile2 from "../assets/service_provider/workprofile2.jpg";
import workprofile3 from "../assets/service_provider/workprofile3.png";
import bg1 from "../assets/service_provider/bg1.png";
import Navbar from "../components/custom-components/Navbar"; // Import Navbar
import TopNavbar from "../components/custom-components/TopNavBar"; // Import TopNavbar

const ServiceProvider = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const jobs = [
    { name: "Mike S.", location: "Colombo", phone: "070 455####", date: "Jun 2019", profileImage: workprofile1, category: "Cleaner" },
    { name: "John D.", location: "Galle", phone: "070 123####", date: "Aug 2020", profileImage: workprofile2, category: "Chef" },
    { name: "Sara P.", location: "Kandy", phone: "070 789####", date: "Feb 2021", profileImage: workprofile3, category: "Painter" },
  ];

  const filteredJobs = selectedCategory === "ALL" ? jobs : jobs.filter(job => job.category === selectedCategory);

  return (
    <>
      {/* Navbar */}
      <div className="bg-black text-white py-0.5 shadow-md">
        <Navbar />
      </div>

      {/* TopNavbar */}
      <div className="fixed top-14 w-full z-40 bg-black text-white py-0.5 shadow-md pt-5">
        <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pt-20 pb-6 mt-10">
        <div className="pt-12 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {/* Left Section: Image */}
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <img
              src={workprofile}
              alt="Worker"
              className="object-cover rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Right Section: Job Cards */}
          <div
            className="w-full h-full md:col-span-2 lg:col-span-2 bg-opacity-50 p-4 rounded-lg"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            {filteredJobs.map((job, index) => (
              <div className="pt-2" key={index}>
                <JobCard
                  name={job.name}
                  location={job.location}
                  phone={job.phone}
                  date={job.date}
                  profileImage={job.profileImage}
                  category={job.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
