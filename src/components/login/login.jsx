import React from "react";
import LoginTest from "../../assets/login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    console.log("Submit was hit")
  };
  let navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="bg-white shadow-xl rounded-xl flex w-3/4 max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-green-50 p-10 flex flex-col items-center justify-center">
          <img src={LoginTest} alt="Exam Mastery" className="w-3/4 mb-6" />
        </div>

        <div className="w-1/2 p-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 flex items-center justify-center">
              🔒
              <span className="ml-2">
                AUTH <span className="text-green-600">HUB</span> LOGIN
              </span>
            </h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input
                type="text"
                name="email"
                placeholder="johnsmith007@gmail.com"
                className="w-full p-3 mt-1 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className="w-full p-3 mt-1 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Sign-in Button */}
          <button
            onClick={() => {
              console.log("Log in");
              handleSubmit();
            }}
            className="w-full bg-gray-900 text-white py-3 mt-6 rounded-lg hover:bg-gray-800 transition"
          >
            Log in
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
            Are you new?{" "}
            <button
              onClick={() => {
                navigate("/sign");
              }}
              className="text-green-600"
            >
              Create an Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
