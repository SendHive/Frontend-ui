import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <section className="pt-10 flex-col justify-center items-center">
        {/* Welcome Message */}
        <div className="mb-10 text-center">
          <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
            "Welcome back, Vivek! What's on your mind today? 💭"
          </h1>
        </div>

        {/* Responsive Row of Three Boxes */}
        <div className="flex flex-wrap justify-center gap-6 w-full px-4 sm:px-0">
          {/* Mail Status */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Send Mail</h2>
              <FaArrowRight
                onClick={() => navigate("/app/job")}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <p className="mt-3 font-semibold">Send Bulk Emails Effortlessly</p>
            <span className="mt-2">
              Initiate high-volume email campaigns with precision using this
              streamlined interface.
            </span>
            <div className="mt-auto flex justify-center">
              <button
                onClick={() => navigate("/app/job")}
                className="w-full sm:w-80 py-2 text-center bg-[#4CAF50] cursor-pointer rounded-lg hover:bg-[#81C784]"
              >
                Start
              </button>
            </div>
          </div>

          {/* SMTP Details */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">SMTP Details</h2>
              <FaArrowRight
                onClick={() => navigate("/app/smtp")}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <p className="mt-3 font-semibold">
              Easily Manage Your SMTP Configuration
            </p>
            <span className="mt-2">
              Efficiently configure and update your SMTP server settings to
              ensure seamless delivery of promotional emails.
            </span>
            <div className="mt-auto flex justify-center">
              <button
                onClick={() => navigate("/app/smtp")}
                className="w-full sm:w-80 py-2 text-center bg-[#4CAF50] cursor-pointer rounded-lg hover:bg-[#81C784]"
              >
                Configure
              </button>
            </div>
          </div>

          {/* User Management */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-80 w-full sm:w-80 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">User Management</h2>
              <FaArrowRight
                onClick={() => navigate("/app/user")}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <p className="mt-3 font-semibold">Control Access & Permissions</p>
            <span className="mt-2">
              Efficiently manage team members and their privileges within your
              email campaign system.
            </span>
            <div className="mt-auto flex justify-center">
              <button
                onClick={() => navigate("/app/user")}
                className="w-full sm:w-80 py-2 text-center bg-[#4CAF50] cursor-pointer rounded-lg hover:bg-[#81C784]"
              >
                Manage Users
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
