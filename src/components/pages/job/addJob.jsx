import React, { useState, useEffect } from "react";

const AddJob = () => {
  const [storedTexts, setStoredTexts] = useState([
    {
      name: "Campaign 1",
      file: "trial customer",
      requestBody: "20% promo",
      smtp: "admin emails",
      status: "IN_PROGRESS",
    },

    {
      name: "Campaign 2",
      file: "trial customer",
      requestBody: "40% promo",
      smtp: "admin emails",
      status: "SUCCESS",
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [editFields, setEditFields] = useState({
    name: "",
    file: "",
    requestBody: "",
    smtp: "",
    status: "",
  });

  const [newInputValues, setNewInputValues] = useState({
    name: "",
    file: "",
    requestBody: "",
    smtp: "",
    status: "IN_PROGRESS",
  });

  const handleSave = () => {
    if (
      !newInputValues.name ||
      !newInputValues.file ||
      !newInputValues.requestBody ||
      !newInputValues.smtp
    )
      return;
    setStoredTexts((prev) => [
      ...prev,
      {
        name: newInputValues.name,
        file: newInputValues.file,
        requestBody: newInputValues.requestBody,
        smtp: newInputValues.smtp,
      },
    ]);
    setNewInputValues({
      name: "",
      file: "",
      requestBody: "",
      smtp: "",
      status:""
    });
  };

  const handleEntryClick = (entry) => {
    console.log("the entry: ", entry);
    setSelectedEntry(entry);
    setEditFields({
      name: entry.name,
      file: entry.file,
      requestBody: entry.requestBody,
      smtp: entry.smtp,
      status: entry.status
    });
    setIsModalOpen(true);
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
    <div className="w-[95%] md:w-4/5 lg:w-3/5 mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
      {/* Left Column */}
      <div className="md:w-[70%] border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Promo Text</h2>
            <div className="group relative">
              <button className="w-5 h-5 rounded-full bg-green-200 text-white text-sm font-bold flex items-center justify-center cursor-default">
                i
              </button>
              <div className="absolute right-0 top-full mt-1 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Stores all the common RequestBody
              </div>
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={newInputValues.name}
            onChange={(e) =>
              setNewInputValues({ ...newInputValues, name: e.target.value })
            }
            className="w-full mb-4 p-2 border border-gray-400 rounded-md"
            placeholder="Enter name"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Emails
          </label>
          <select
            name="file"
            value={newInputValues.file}
            onChange={(e) =>
              setNewInputValues({ ...newInputValues, file: e.target.value })
            }
            className="w-full mb-4 p-2 border border-gray-400 rounded-md"
          >
            <option value="">Select Email Group</option>
            <option value="trial customer">trial customer</option>
            <option value="existing customer">existing customer</option>
            <option value="newsletter">newsletter</option>
          </select>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Promo Text
          </label>
          <select
            name="requestBody"
            value={newInputValues.requestBody}
            onChange={(e) =>
              setNewInputValues({
                ...newInputValues,
                requestBody: e.target.value,
              })
            }
            className="w-full mb-4 p-2 border border-gray-400 rounded-md"
          >
            <option value="">Select Promo Text</option>
            <option value="20% promo">20% promo</option>
            <option value="Black Friday Deal">Black Friday Deal</option>
            <option value="Free Shipping">Free Shipping</option>
          </select>

          {/* SMTP Dropdown */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SMTP Details
          </label>
          <select
            name="smtp"
            value={newInputValues.smtp}
            onChange={(e) =>
              setNewInputValues({ ...newInputValues, smtp: e.target.value })
            }
            className="w-full mb-4 p-2 border border-gray-400 rounded-md"
          >
            <option value="">Select SMTP</option>
            <option value="admin emails">admin emails</option>
            <option value="support emails">support emails</option>
            <option value="marketing emails">marketing emails</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            disabled={
              !Object.values(newInputValues).every((val) => val.trim() !== "")
            }
            className={`px-4 py-2 rounded-md  ${
              Object.values(newInputValues).every((val) => val.trim() !== "")
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
        <h2 className="text-lg font-semibold mb-4">Running Jobs</h2>
        <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {storedTexts.map((entry, idx) => (
            <li
              key={idx}
              className="cursor-pointer p-2 bg-gray-100 hover:bg-green-100 rounded-md text-sm text-gray-700"
              onClick={() => handleEntryClick(entry)}
            >
              <strong>{entry.name}</strong>
              <p className="text-xs text-gray-500 truncate">{entry.file}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-1/2 lg:w-1/3 shadow-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Job Details</h3>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={editFields.name}
              onChange={(e) =>
                setEditFields({ ...editFields, name: e.target.value })
              }
              readOnly
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emails
            </label>
            <input
              name="file"
              value={editFields.file}
              onChange={(e) =>
                setEditFields({ ...editFields, file: e.target.value })
              }
              readOnly
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Promo Text
            </label>
            <input
              name="requestBody"
              value={editFields.requestBody}
              onChange={(e) =>
                setEditFields({ ...editFields, requestBody: e.target.value })
              }
              readOnly
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              SMTP Details
            </label>

            <input
              name="smtp"
              value={editFields.smtp}
              onChange={(e) =>
                setEditFields({ ...editFields, smtp: e.target.value })
              }
              readOnly
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Status
            </label>

            <input
              name="status"
              value={editFields.status}
              onChange={(e) =>
                setEditFields({ ...editFields, status: e.target.value })
              }
              readOnly
              className="w-full p-2 mb-4 border rounded-md"
            />

            <div className="flex justify-between">
              <button
                onClick={handleDelete}
                disabled={editFields.status !== "SUCCESS"}
                className={`px-4 py-2 rounded-md ${
                  editFields.status !== "SUCCESS"
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-red-400 text-white hover:bg-red-600" 
                }`}
              >
                Delete
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-green-500  hover:bg-green-300 text-white px-4 py-2 rounded-md"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddJob;
