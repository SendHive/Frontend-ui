import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const SMTP = () => {
  let navigate = useNavigate();
  const [smtpDetails, setSMTPDetails] = useState({
    server: "",
    port: "",
    username: "",
    password: "",
  });

  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Handle modal open
  const openModal = (entry) => {
    setSelectedEntry(entry);
    setIsEditing(false);
    setIsOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setIsOpen(false);
    setIsEditing(false);
  };

  // Handle input change in modal
  const handleInputChange = (e) => {
    setSelectedEntry({
      ...selectedEntry,
      [e.target.name]: e.target.value,
    });
  };

  // Save the updated entry
  const handleSave = () => {
    setEntries(
      entries.map((entry) =>
        entry.server === selectedEntry.server ? selectedEntry : entry
      )
    );
    setIsEditing(false);
    setIsOpen(false);
  };

  // Handle new SMTP entry
  const handleAddEntry = () => {
    if (!smtpDetails.server || !smtpDetails.port) {
      setIsActive(false);
      return;
    }
    setEntries([...entries, smtpDetails]);
    setSMTPDetails({ server: "", port: "", username: "", password: "" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-start px-4 sm:px-10 bg-[#D3E9D7]">
      {/* Home Icon */}
      <div className="flex items-center mt-2">
        <TiHome className="text-xl text-green-500 cursor-pointer" onClick={() => navigate("/app/hub")}/>
        <span className="ml-5 text-green-600 text-lg font-medium cursor-pointer" onClick={() => navigate("/app/hub")}>Home</span>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-4 mt-44 w-4/5 mx-auto">
        {/* Left Side - Add SMTP Entry */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            New SMTP Entry
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              name="server"
              placeholder="SMTP Server"
              value={smtpDetails.server}
              onChange={(e) =>
                setSMTPDetails({ ...smtpDetails, server: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="number"
              name="port"
              placeholder="Port"
              value={smtpDetails.port}
              onChange={(e) =>
                setSMTPDetails({ ...smtpDetails, port: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={smtpDetails.username}
              onChange={(e) =>
                setSMTPDetails({ ...smtpDetails, username: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={smtpDetails.password}
              onChange={(e) =>
                setSMTPDetails({ ...smtpDetails, password: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={handleAddEntry}
              disabled={
                !Object.values(smtpDetails).every((val) => val.trim() !== "")
              }
              className={`w-3/5 mx-auto text-white p-2 rounded-md flex justify-center items-center  ${
                Object.values(smtpDetails).every((val) => val.trim() !== "")
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add SMTP
            </button>
          </div>
        </div>

        {/* Right Side - List of Entries */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            SMTP Entries
          </h2>
          <div className="space-y-3">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
              >
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {entry.server}
                  </p>
                  <p className="text-xs text-gray-500">Port: {entry.port}</p>
                </div>
                <HiDotsVertical
                  className="text-gray-600 cursor-pointer"
                  onClick={() => openModal(entry)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Viewing/Editing SMTP Details */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            SMTP Details
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              name="server"
              value={selectedEntry?.server || ""}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 border rounded-md ${
                !isEditing ? "bg-gray-100" : ""
              }`}
            />
            <input
              type="number"
              name="port"
              value={selectedEntry?.port || ""}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 border rounded-md ${
                !isEditing ? "bg-gray-100" : ""
              }`}
            />
            <input
              type="text"
              name="username"
              value={selectedEntry?.username || ""}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 border rounded-md ${
                !isEditing ? "bg-gray-100" : ""
              }`}
            />
            <input
              type="password"
              name="password"
              value={selectedEntry?.password || ""}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 border rounded-md ${
                !isEditing ? "bg-gray-100" : ""
              }`}
            />
          </div>
          <div className="mt-4 flex justify-end gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
            )}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default SMTP;
