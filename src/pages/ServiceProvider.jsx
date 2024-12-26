import React, { useState } from "react";
import JobCard from "../section/service_provider/JobCard";
import workprofile from "../assets/service_provider/workprofile.png";
import workprofile1 from "../assets/service_provider/workprofile1.png";
import workprofile2 from "../assets/service_provider/workprofile2.jpg";
import workprofile3 from "../assets/service_provider/workprofile3.png";
import bg1 from "../assets/service_provider/bg1.png";
import Navbar from "../components/custom-components/Navbar"; // Import the Navbar component
import TopNavbar from "../components/custom-components/TopNavBar";  // Import TopNavbar

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
      {/* New Navbar at the top */}
      <Navbar /> {/* This is the new Navbar that will be above the TopNavbar */}

      {/* Top Navbar */}
      <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> 

      {/* Main Content Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="flex justify-center sm:col-span-2 lg:col-span-1">
            <img
              src={workprofile}
              alt="Worker"
              className="object-cover rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          <div className="w-full h-full sm:col-span-2 lg:col-span-2 bg-opacity-50" style={{ backgroundImage: `url(${bg1})` }}>
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
