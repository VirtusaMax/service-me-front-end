import React from "react";

const HouseCleanerInterface = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
        <div className="flex space-x-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-yellow-400 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-yellow-500"
            >
              🔗 {/* Replace this with actual icons */}
            </div>
          ))}
        </div>
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-500">POST JOB</a>
          <a href="#" className="hover:text-yellow-500">FIND WORK</a>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-1 p-6 gap-4">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-700">Chalani Jayakodi</h3>
                  <p className="text-gray-500 text-sm">Mahawagama</p>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-700 mb-4">I need a House Cleaner..............</p>
              <p className="text-gray-500 text-xs">Date: 2024/12/18</p>

              <div className="flex justify-between mt-4">
                <button className="bg-yellow-400 px-4 py-2 rounded text-white hover:bg-yellow-500">
                  Contact
                </button>
                <button className="text-gray-600 hover:text-gray-800">Share</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block w-1/3">
          <img
            src="https://via.placeholder.com/400x600"
            alt="House Cleaning"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HouseCleanerInterface;