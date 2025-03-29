import React from "react";

const Job = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start pt-20 px-4 sm:px-10 bg-[#C8E6C9]">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="font-medium text-4xl sm:text-xl md:text-2xl lg:text-3xl">
          Mail Sender Service
        </h1>
        <button className="bg-[#4CAF50] hover:bg-[#81C784] text-white px-4 py-2 rounded-md ">
          + Create
        </button>
      </div>
    </section>
  );
};

export default Job;
