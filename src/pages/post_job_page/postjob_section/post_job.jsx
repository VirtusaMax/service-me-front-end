import React from "react";
import FilteringNavBar from "./FilteringNavBar";
import jobData from "../../../data/postJobCardData.json";

const PostJob = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <FilteringNavBar />

      {/* Main Content Section */}
      <div className="flex flex-1 p-6 gap-4">
        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-6 flex-1" style={{ gridTemplateRows: "repeat(3, minmax(0, 1fr))" }}>
          {jobData.slice(0, 6).map((job, i) => ( 
            <div
              key={i}
              className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl w-[428px] h-[211px]"
            >
              <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                  src={job.profileImage}
                  alt="Profile"
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-700">{job.name}</h3>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-700 mb-4 truncate">{job.description}</p>
              <p className="text-gray-500 text-xs">Date: {job.date}</p>

              <div className="flex justify-between mt-4 px-20 bg-custom-blue">
                <button className="bg-custom-blue px-10 py-2 rounded text-white">
                  Contact
                </button>
                <button className="bg-custom-blue px-10 py-2 rounded text-white">Share</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block w-1/3">
          <img
            src="src/assets/post_job/cle_1.jpg"
            alt="House Cleaning"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
