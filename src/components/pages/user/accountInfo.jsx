import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiUser, FiMail } from "react-icons/fi";
import { useState } from "react";

const UserAccount = () => {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Coop");
  const [email, setEmail] = useState("jane234@example.com");
  const [phone, setPhone] = useState("(209) 555-0104");
  const [dob, setDob] = useState("3");
  const [country, setCountry] = useState("Bangladesh");

  return (
    <div className="w-3/5  mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 text-sm">First Name</label>
          <div className="relative">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            />
            <FiUser className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 text-sm">Last Name</label>
          <div className="relative">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            />
          </div>
        </div>
      </div>

      {/* Email & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 text-sm">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            />
            <FiMail className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 text-sm">Subscription</label>
          <div className="relative">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            />
          </div>
        </div>
      </div>

      {/* Date of Birth & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 text-sm">SMTP Count</label>
          <div className="relative">
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            />
            <CiLocationArrow1 className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 text-sm">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
          >
            <option>Bangladesh</option>
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
