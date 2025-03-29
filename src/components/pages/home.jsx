import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start pt-20 px-4 sm:px-10">
      {/* Welcome Message */}
      <div className="mb-10">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          "Welcome back, Vivek! What's on your mind today? 💭"
        </h1>
      </div>

      {/* Row of Three Boxes, Aligned to Left */}
      <div className="flex flex-wrap sm:flex-nowrap gap-6">
        {/* Mail Status */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Mail Status</h2>
            <FaArrowRight className="w-5 h-5 cursor-pointer" />
          </div>
          <p className="mt-3 font-semibold">Send Bulk Emails Effortlessly</p>
          <span className="mt-2">
            Initiate high-volume email campaigns with precision using this
            streamlined interface.
          </span>
          <div className="mt-2 flex justify-center">
            <button className="w-80 py-2 text-center bg-green-300 cursor-pointer rounded-lg hover:bg-green-400 mt-12">
              Start
            </button>
          </div>
        </div>

        {/* SMTP Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">SMTP Details</h2>
            <FaArrowRight className="w-5 h-5 cursor-pointer" />
          </div>
          <p className="mt-3 font-semibold">Easily Manage Your SMTP Configuration</p>
          <span className="mt-2">
            Efficiently configure and update your SMTP server settings to ensure
            seamless delivery of promotional emails.
          </span>
          <div className="mt-2 flex justify-center">
            <button className="w-80 py-2 text-center bg-green-300 cursor-pointer rounded-lg hover:bg-green-400">
              Configure
            </button>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">User Management</h2>
            <FaArrowRight className="w-5 h-5 cursor-pointer" />
          </div>
          <p className="mt-3 font-semibold">Control Access & Permissions</p>
          <span className="mt-2">
            Efficiently manage team members and their privileges within your
            email campaign system.
          </span>
          <div className="mt-2 flex justify-center">
            <button className="w-80 py-2 text-center bg-green-300 cursor-pointer rounded-lg hover:bg-green-400 mt-11">
              Manage Users
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
