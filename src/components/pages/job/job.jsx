import React from "react";

const Job = () => {
  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center justify-center pt-16 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Add Users
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-2xl mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          {/* <TbUserSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
          <input
            type="text"
            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Users"
          />
        </div>
      </div>
    </div>
  );
};

export default Job;
