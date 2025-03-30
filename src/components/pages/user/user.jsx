import UserAccount from "./accountInfo";
import PasswordChangeForm from "./password";
import Subscription from "./subscription";
import { useState } from "react";
import { TiHome } from "react-icons/ti";

const User = () => {
  const [activeTab, setActiveTab] = useState("User Account");

  const renderContent = () => {
    switch (activeTab) {
      case "User Account":
        return <UserAccount />;
      case "Reset Password":
        return <PasswordChangeForm />;
      case "Subscription Details":
        return <Subscription />;
      default:
        return <h1>Select a section</h1>;
    }
  };
  return (
    <>
      <section className="min-h-screen flex flex-col justify-start px-4 sm:px-10 bg-[#C8E6C9]">
        <div className="flex items-center mt-2">
          <TiHome className="text-xl text-green-500 cursor-pointer" />
          <span className="ml-5 text-green-600 text-lg font-medium">Home</span>
        </div>
        <div className="py-3 w-3/5 px-2 mx-auto mt-5">
          <div className="grid grid-cols-3 gap-1 w-full rounded-lg">
            {["User Account", "Reset Password", "Subscription Details"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mt-3 px-3 py-2 text-sm font-medium  ${
                    activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
        <div className="mt-3">{renderContent()}</div>
      </section>
    </>
  );
};

export default User;
