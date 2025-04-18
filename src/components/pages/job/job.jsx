import { TiHome } from "react-icons/ti";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddJob from "./addJob";
import AddFile from "./addFile";
import RequestBody from "./requestBody";

const Job = () => {
  useEffect(() => {
    let currTab = sessionStorage.getItem("tab");
    if (!currTab) {
      setActiveTab("Job Details");
    } else {
      setActiveTab(currTab);
    }
  }, []);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Job Details");

  const renderContent = () => {
    switch (activeTab) {
      case "Job Details":
        return <AddJob />;
      case "Add Email":
        return <AddFile />;
      case "Upload Request":
        return <RequestBody />;
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-start px-4 sm:px-10 bg-[#D3E9D7]">
      <div className="flex items-center mt-2">
        <TiHome
          className="text-xl text-green-500 cursor-pointer"
          onClick={() => {
            navigate("/app/hub");
          }}
        />
        <span className="ml-5 text-green-600 text-lg font-medium">Home</span>
      </div>

      <div className="py-3 w-full sm:w-3/5 px-2 mx-auto mt-3">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-1 w-full rounded-lg overflow-x-auto">
          {["Job Details", "Add Email", "Upload Request"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                sessionStorage.setItem("tab", tab);
              }}
              className={`mt-3 px-3 py-2 text-sm font-medium text-center whitespace-nowrap ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3">{renderContent()}</div>
    </section>
  );
};

export default Job;
