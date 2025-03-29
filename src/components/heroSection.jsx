import React from "react";
import MainImag from "../assets/main-2.png"
const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 w-full max-w-6xl">
        {/* Left Section: Text, Form, and Trustpilot */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-[#333] leading-tight">
            Easily send email <br /> and boost your <br />
            business
          </h1>
          <p className="text-lg text-[#666]">
            Marketing should not be complicated to get great results. With a
            single tool you can manage your email campaigns, SMS, landing pages
            and much more.
          </p>

          {/* Sign-Up Form */}
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
            />
            <button className="bg-[#00BFA6] text-white px-4 py-3 rounded-md hover:bg-[#00BFA6]">
              Get Started
            </button>
          </div>

  
        </div>

        {/* Right Section: Dashboard Image Placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500"><img className="bg-green-100" src={MainImag} alt="main"/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;