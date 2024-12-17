import React from "react";
import JobCard from "../section/workprofile/JobCard";
import workprofile from "../assets/workprofile/workprofile.png";

const WorkerProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      
        <div className="flex justify-center">
          <img
            src={workprofile}
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
          />
          <JobCard
            name="Mike S."
            location="Colombo"
            phone="070 455####"
            date="Jun 2019"
          />
          <JobCard
            name="Mike S."
            location="Colombo"
            phone="070 455####"
            date="Jun 2019"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
