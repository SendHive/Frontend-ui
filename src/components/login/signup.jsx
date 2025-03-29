import React, { useState } from "react";
import LoginTest from "../../assets/sign.png";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  console.log("SignUP called!!!!")
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("clicked handle");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="bg-white shadow-xl rounded-xl flex w-3/4 max-w-4xl overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="w-1/2 bg-green-50 p-10 flex flex-col items-center justify-center">
          <img src={LoginTest} alt="Exam Mastery" className="w-3/4 mb-6" />
        </div>
        <div className="w-1/2 p-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 flex items-center justify-center">
              🔒
              <span className="ml-2">
                Send <span className="text-green-600">Hive</span> SIGNUP
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm">Username</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="johnsmith007"
                className="w-full p-3 mt-1 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input
                type="text"
                name="email"
                placeholder="johnsmith@gmail.com"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="w-full p-3 mt-1 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="w-full p-3 mt-1 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Sign-in Button */}
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="w-full bg-gray-900 text-white py-3 mt-6 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center mt-1">{error}</p>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-gray-500 text-sm">or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Create Account */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already a user ?{" "}
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-green-600"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
