import React from "react";
import JobCard from "../section/service_provider/JobCard";
import workprofile1 from "../assets/service_provider/workprofile1.png"; // First profile image
import workprofile2 from "../assets/service_provider/workprofile2.jpg"; // Second profile image
import workprofile3 from "../assets/service_provider/workprofile3.png"; // Third profile image


const ServiceProvider = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <img
            src={workprofile1} // Change this to show a different worker image
            alt="Worker"
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <JobCard
            name="Mike S."
            location="Colombo"
            phone="070 455####"
            date="Jun 2019"
            profileImage={workprofile1}  // First profile image
          />
          <JobCard
            name="John D."
            location="Galle"
            phone="070 123####"
            date="Aug 2020"
            profileImage={workprofile2}  // Second profile image
          />
          <JobCard
            name="Sara P."
            location="Kandy"
            phone="070 789####"
            date="Feb 2021"
            profileImage={workprofile3}  // Third profile image
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
