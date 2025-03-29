import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">
        PAGE NOT FOUND
      </h2>
      <p className="text-gray-500 mt-2">404_page_message</p>
    </div>
  );
};

export default Error;
