import React from 'react';

const JobCard = ({ name, location, phone, date, profileImage, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center p-6 mb-6">
      {/* Profile Image Section */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-500">
        <img
          src={profileImage} // Use the dynamic profile image passed as a prop
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="ml-6 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors">{name}</h2>
        <p className="text-sm text-gray-500">Category: <span className="font-medium text-purple-600">{category}</span></p>
        <p className="text-sm text-gray-500">Location: {location}</p>
        <p className="text-sm text-gray-500">Phone: {phone}</p>
        <p className="text-xs text-gray-400">Member since {date}</p>
      </div>

      {/* Action Button */}
      <div className="ml-auto flex items-center justify-center">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default JobCard;
