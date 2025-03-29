import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-green-100">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="w-6 h-6 bg-[#4CAF50] rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        </button>
        <span className="text-xl font-bold text-[#333]">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            SendHive
          </button>
        </span>
      </div>

      {/* Centered Navigation Links */}
      <div className="flex-grow flex justify-center">
        <div className="flex space-x-9">
          <div className="text-[#333] hover:text-[#4CAF50] cursor-pointer">
            Solutions
          </div>
          <div className="text-[#333] hover:text-[#4CAF50] cursor-pointer">
            Pricing
          </div>
          <div className="text-[#333] hover:text-[#4CAF50] cursor-pointer">
            About Us
          </div>
        </div>
      </div>

      {/* Login and Button */}
      <div className="flex items-center space-x-6">
        <div className="text-[#333] hover:text-[#00C29F] cursor-pointer">
          Log In
        </div>
        <button className="bg-[#00BFA6] text-white px-4 py-2 rounded-md hover:bg-[#00C29F]">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
