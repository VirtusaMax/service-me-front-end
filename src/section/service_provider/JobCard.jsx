import React from 'react';
import profileimage from "../../assets/workprofile/profileimage.png";


const JobCard = ({ name, location, phone, date }) => {
  return (
    <div className="bg-white shadow-md rounded-md flex items-center p-4 mb-4">
    
      <img
        src={profileimage}  
        alt="Profile"
        className="rounded-full w-16 h-16 object-cover"
      />
    
      <div className="ml-4">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm text-gray-600">All Category | Member since {date}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">{phone}</p>
      </div>
     
      <div className="ml-auto">
        <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default JobCard;
