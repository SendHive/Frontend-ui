import React, { useState, useEffect } from "react";

const RequestBody = () => {
  const [storedTexts, setStoredTexts] = useState([
    { name: "Campaign 1", text: "Get 20% off now!" },
    { name: "Launch Promo", text: "Welcome to our new service!" },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editFields, setEditFields] = useState({
    name: "",
    text: "",
  });

  const [newInputValues, setNewInputValues] = useState({
    name: "",
    text: "",
  });

  const handleSave = () => {
    if (!newInputValues.name || !newInputValues.text) return;
    setStoredTexts((prev) => [
      ...prev,
      { name: newInputValues.name, text: newInputValues.text },
    ]);
    setNewInputValues({
      name: "",
      text: "",
    });
  };

  const handleEntryClick = (entry) => {
    console.log("the entry: ", entry);
    setSelectedEntry(entry);
    setEditFields({
      name: entry.name,
      text: entry.text,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setStoredTexts((prev) =>
      prev.map((item) =>
        item === selectedEntry
          ? { name: editFields.name, text: editFields.text }
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
          <div className="mt-3">
            {error}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Promo Text
          </label>
          <textarea
            value={newInputValues.text}
            name="text"
            onChange={(e) =>
              setNewInputValues({ ...newInputValues, text: e.target.value })
            }
            className="w-full max-h-[200px] border-2 border-gray-400 rounded-lg p-4 text-sm resize-none"
            placeholder="Write your promo text here..."
          />
          <div className="mt-3">
            {error}
          </div>
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
        <h2 className="text-lg font-semibold mb-4">Stored Messages</h2>
        <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {storedTexts.map((entry, idx) => (
            <li
              key={idx}
              className="cursor-pointer p-2 bg-gray-100 hover:bg-green-100 rounded-md text-sm text-gray-700"
              onClick={() => handleEntryClick(entry)}
            >
              <strong>{entry.name}</strong>
              <p className="text-xs text-gray-500 truncate">{entry.text}</p>
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
              Name
            </label>
            <input
              type="text"
              name="name"
              value={editFields.name}
              onChange={(e) =>
                setEditFields({ ...editFields, name: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Promo Text
            </label>
            <textarea
              name="text"
              value={editFields.text}
              onChange={(e) =>
                setEditFields({ ...editFields, text: e.target.value })
              }
              className="w-full p-2 h-32 border rounded-md resize-none mb-4"
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
  );
};

export default RequestBody;
