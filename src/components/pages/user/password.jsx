import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const PasswordChangeForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialChar: false,
  });

  const handleCancel = () => {
    setRequirements({
      uppercase: false,
      lowercase: false,
      numbers: false,
      specialChar: false,
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Update requirements checks
    setRequirements({
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      numbers: /[0-9]/.test(newPassword),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });
  };

  return (
    <div className="w-3/5 mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>

      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          New Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            placeholder="Enter new password"
          />
          {/* Eye icon button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <IoEyeOutline className="mt-1" />
            ) : (
              <FaRegEyeSlash className="mt-1" />
            )}
          </button>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Password must contain:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span
              className={`h-4 w-4 rounded-full ${
                requirements.uppercase ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span
              className={`ml-2 text-sm ${
                requirements.uppercase ? "text-green-600" : "text-red-600"
              }`}
            >
              At least one uppercase letter (A-Z)
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`h-4 w-4 rounded-full ${
                requirements.lowercase ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span
              className={`ml-2 text-sm ${
                requirements.lowercase ? "text-green-600" : "text-red-600"
              }`}
            >
              At least one lowercase letter (a-z)
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`h-4 w-4 rounded-full ${
                requirements.numbers ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span
              className={`ml-2 text-sm ${
                requirements.numbers ? "text-green-600" : "text-red-600"
              }`}
            >
              At least one number (0-9)
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`h-4 w-4 rounded-full ${
                requirements.specialChar ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span
              className={`ml-2 text-sm ${
                requirements.specialChar ? "text-green-600" : "text-red-600"
              }`}
            >
              At least one special character (!@#$%^&*)
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-4 flex justify-end space-x-3">
        <button
          onClick={() => {
            setPassword("");
            handleCancel();
          }}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          disabled={!Object.values(requirements).every(Boolean)}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
            Object.values(requirements).every(Boolean)
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
