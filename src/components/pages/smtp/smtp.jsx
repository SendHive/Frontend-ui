import React, { useState, useEffect } from "react";
import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const SMTP = () => {
  const navigate = useNavigate();
  const [storedTexts, setStoredTexts] = useState([
    {
      host: "gmail.com",
      email: "sendHive@admin.in",
      password: "12345678",
      port: "587",
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editFields, setEditFields] = useState({
    host: "",
    email: "",
    password: "",
    port: "",
  });

  const [newInputValues, setNewInputValues] = useState({
    host: "",
    email: "",
    password: "",
    port: "",
  });

  const handleSave = () => {
    if (!newInputValues.host || !newInputValues.email) return;
    setStoredTexts((prev) => [
      ...prev,
      {
        host: newInputValues.host,
        email: newInputValues.email,
        password: newInputValues.password,
        port: newInputValues.port,
      },
    ]);
    setNewInputValues({
      host: "",
      email: "",
      password: "",
      port: "",
    });
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
    setEditFields({
      host: entry.host,
      port: entry.port,
      password: entry.password,
      email: entry.email,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setStoredTexts((prev) =>
      prev.map((item) =>
        item === selectedEntry
          ? {
              host: editFields.host,
              email: editFields.email,
              password: editFields.password,
              port: editFields.port,
            }
          : item
      )
    );
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleDelete = () => {
    setStoredTexts((prev) => prev.filter((item) => item !== selectedEntry));
    setIsModalOpen(false);
  };

  return (
    <section className="min-h-screen flex flex-col justify-start px-4 sm:px-10 bg-[#D3E9D7]">
      <div className="flex items-center mt-2">
        <TiHome
          className="text-xl text-green-500 cursor-pointer"
          onClick={() => navigate("/app/hub")}
        />
        <span className="ml-5 text-green-600 text-lg font-medium">Home</span>
      </div>
      <div className="mt-20">
        <div className="w-[95%] md:w-4/5 lg:w-3/5 mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
          {/* Left Column */}
          <div className="md:w-[70%] border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">SMTP Details</h2>
                <div className="group relative">
                  <button className="w-5 h-5 rounded-full bg-green-200 text-white text-sm font-bold flex items-center justify-center cursor-default">
                    i
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    Add SMTP Details
                  </div>
                </div>
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Host
              </label>
              <input
                type="text"
                name="host"
                value={newInputValues.host}
                onChange={(e) =>
                  setNewInputValues({ ...newInputValues, host: e.target.value })
                }
                className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                placeholder="Enter hostname"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={newInputValues.email}
                onChange={(e) =>
                  setNewInputValues({
                    ...newInputValues,
                    email: e.target.value,
                  })
                }
                className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                placeholder="Enter email"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="text"
                name="password"
                value={newInputValues.password}
                onChange={(e) =>
                  setNewInputValues({
                    ...newInputValues,
                    password: e.target.value,
                  })
                }
                className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                placeholder="Enter password"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Port
              </label>
              <input
                type="text"
                name="port"
                value={newInputValues.port}
                onChange={(e) =>
                  setNewInputValues({ ...newInputValues, port: e.target.value })
                }
                className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                placeholder="Enter port"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                disabled={
                  !Object.values(newInputValues).every(
                    (val) => val.trim() !== ""
                  )
                }
                className={`px-4 py-2 rounded-md  ${
                  Object.values(newInputValues).every(
                    (val) => val.trim() !== ""
                  )
                    ? "bg-green-500 text-white hover:bg-green-300"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                Save
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-[30%]">
            <h2 className="text-lg font-semibold mb-4">Stored SMTP </h2>
            <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {storedTexts.map((entry, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer p-2 bg-gray-100 hover:bg-green-100 rounded-md text-sm text-gray-700"
                  onClick={() => handleEntryClick(entry)}
                >
                  <strong>{entry.host}</strong>
                  <p className="text-xs text-gray-500 truncate">
                    {entry.email}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-[90%] md:w-1/2 lg:w-1/3 shadow-lg max-h-[90vh] overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Edit Promo</h3>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Host
                </label>
                <input
                  type="text"
                  name="host"
                  value={editFields.host}
                  onChange={(e) =>
                    setEditFields({ ...editFields, host: e.target.value })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={editFields.email}
                  onChange={(e) =>
                    setEditFields({ ...editFields, email: e.target.value })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={editFields.password}
                  onChange={(e) =>
                    setEditFields({ ...editFields, password: e.target.value })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Port
                </label>
                <input
                  type="text"
                  name="port"
                  value={editFields.port}
                  onChange={(e) =>
                    setEditFields({ ...editFields, port: e.target.value })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />

                <div className="flex justify-between">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SMTP;
