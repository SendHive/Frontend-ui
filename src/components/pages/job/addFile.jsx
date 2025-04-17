import React, { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

const AddFile = () => {
  const fileInputRef = useRef(null);
  const [storedFiles, setStoredFiles] = useState([
    "document1.csv",
    "presentation.csv",
  ]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setErrorMsg("");

    if (file) {
      const fileName = file.name;
      const isCSV = fileName.toLowerCase().endsWith(".csv");

      if (!isCSV) {
        setErrorMsg("Only .csv files are allowed.");
        return;
      }

      if (storedFiles.includes(fileName)) {
        setErrorMsg("This file is already added.");
        return;
      }

      setStoredFiles((prev) => [...prev, fileName]);
    }
  };

  return (
    <div className="w-[95%] md:w-4/5 lg:w-3/5 mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
      {/* Left Column */}
      <div className="md:w-[70%] border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Add File</h2>
          <div className="group relative">
            <button className="w-5 h-5 rounded-full bg-green-200 text-white text-sm font-bold flex items-center justify-center cursor-default">
              i
            </button>
            <div className="absolute right-0 top-full mt-1 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Upload only CSV files
            </div>
          </div>
        </div>

        {/* Upload Square */}
        <div
          onClick={() => fileInputRef.current.click()}
          className="w-full h-60 md:h-80 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="flex flex-col items-center">
            <FiPlus className="text-3xl text-gray-600" />
            <span className="text-sm text-gray-500 mt-1">Click to upload CSV</span>
          </div>
        </div>

        {/* Hidden Input */}
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Error Message */}
        {errorMsg && (
          <p className="mt-3 text-red-500 text-sm font-medium">{errorMsg}</p>
        )}
      </div>

      {/* Right Column */}
      <div className="md:w-[30%]">
        <h2 className="text-lg font-semibold mb-4">Stored Files</h2>
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {storedFiles.map((file, idx) => (
            <li
              key={idx}
              className="cursor-pointer p-2 bg-gray-100 hover:bg-green-100 rounded-md text-sm text-gray-700"
              onClick={() => localStorage.setItem("selectedFile", file)}
            >
              {file}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddFile;
