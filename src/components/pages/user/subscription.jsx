import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const Subscription = () => {
  const [showCVC, setShowCVC] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    fullName: "",
    cardNumber: "",
    expireDate: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const invoices = [
    {
      id: 1,
      name: "Invoice_2020/10.pdf",
      date: "Nov 02, 2020",
      checked: false,
    },
    {
      id: 2,
      name: "Invoice_2020/09.pdf",
      date: "Oct 02, 2020",
      checked: false,
    },
    {
      id: 3,
      name: "Invoice_2020/08.pdf",
      date: "Sep 02, 2020",
      checked: false,
    },
    {
      id: 4,
      name: "Invoice_2020/07.pdf",
      date: "Aug 02, 2020",
      checked: false,
    },
  ];

  const [invoiceList, setInvoiceList] = useState(invoices);
  const [activeTab, setActiveTab] = useState("Overview");

  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-4 sm:p-6">
            {/* Left Section - Business Plan Details */}
            <div className="border rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-white bg-black px-2 py-1 rounded-md text-sm font-light">
                    BUSINESS
                  </span>{" "}
                  Plan
                </h2>
                <p className="text-2xl font-bold text-gray-900">
                  $10{" "}
                  <span className="text-base font-normal text-gray-500">
                    /month
                  </span>
                </p>
              </div>

              <div className="mb-4">
                <span className="text-gray-700">12 of 20 SMTP details</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTab("Plans");
                }}
                className="w-full mb-4 px-4 py-2  text-black rounded-md bg-green-400 hover:bg-green-500 transition-colors"
              >
                Upgrade Plan
              </button>

              <p className="text-gray-500">Next Payment</p>

              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <h2 className="text-md font-medium">
                  <span className="text-black">On 30 November, 2025</span>{" "}
                </h2>

                <button className="bg-green-400 text-black hover:bg-green-500 transition-colors py-2 px-3 rounded-lg mt-3">
                  Manage Payments
                </button>
              </div>
            </div>

            {/* Right Section - Subscription Dropdown */}
            <div className="border rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Subscription</h3>
              <div className="space-y-4">
                <label className="block text-gray-600 text-sm">Plan</label>
                <select className="w-full p-2 border rounded-md focus:ring focus:ring-green-300">
                  <option>Demo</option>
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "Plans":
        return <h1>This is the Plans section</h1>;
      case "Invoices":
        return (
          <div className="w-full max-w-2xl mx-auto p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              Invoices
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex flex-wrap sm:flex-nowrap justify-between items-center p-3 sm:p-4 border border-gray-300 rounded-lg bg-gray-50 relative"
                >
                  <span className="text-gray-800 font-medium flex-1 truncate">
                    {invoice.name}
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base sm:ml-4">
                    {invoice.date}
                  </span>

                  {/* Three-dot menu */}
                  <div className="relative sm:ml-4">
                    <button
                      onClick={() => toggleMenu(invoice.id)}
                      className="p-2"
                    >
                      <BsThreeDotsVertical className="text-gray-700 text-lg" />
                    </button>

                    {menuOpen === invoice.id && (
                      <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg border rounded-md z-10">
                        <button
                          className="w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100"
                          onClick={() => alert(`Downloading ${invoice.name}`)}
                        >
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Payment details":
        return (
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="border-b lg:border-b-0 lg:border-r pr-0 lg:pr-6 pb-6 lg:pb-0">
              <h2 className="text-xl font-semibold mb-4">
                Select Payment Method
              </h2>
              <p className="text-gray-600 mb-4">Choose a payment method.</p>

              <div className="space-y-4">
                <button
                  className={`w-full px-4 py-3 rounded-md text-left ${
                    selectedMethod === "card"
                      ? "bg-green-400 hover:bg-green-500 transition-colors text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedMethod("card")}
                >
                  💳 Card
                </button>

                <button
                  className={`w-full px-4 py-3 rounded-md text-left ${
                    selectedMethod === "upi"
                      ? "bg-green-400 hover:bg-green-500 transition-colors text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedMethod("upi")}
                >
                  🔗 UPI
                </button>

                <button
                  className={`w-full px-4 py-3 rounded-md text-left ${
                    selectedMethod === "crypto"
                      ? "bg-green-400 hover:bg-green-500 transition-colors text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedMethod("crypto")}
                >
                  🪙 Crypto
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div>
              {selectedMethod === "card" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Card Payment</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={cardDetails.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expireDate"
                          value={cardDetails.expireDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="MM/YY"
                        />
                      </div>

                      {/* CVC Field with Eye Icon */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <div className="relative">
                          <input
                            type={showCVC ? "text" : "password"}
                            name="cvc"
                            value={cardDetails.cvc}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                            placeholder="123"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCVC(!showCVC)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                          >
                            {showCVC ? (
                              <IoEyeOutline className="mt-1" />
                            ) : (
                              <FaRegEyeSlash className="mt-1" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === "upi" && (
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">UPI Payment</h3>
                  <p className="text-gray-600 mb-4">
                    Enter your UPI ID for payment.
                  </p>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="yourname@upi"
                  />
                </div>
              )}

              {selectedMethod === "crypto" && (
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Crypto Payment</h3>
                  <p className="text-gray-600">
                    Use the QR code or copy the address.
                  </p>
                </div>
              )}

              {/* Proceed Payment Button */}
              <button className="w-full mt-6 px-4 py-3 bg-green-400 hover:bg-green-500 transition-colors text-white rounded-md ">
                Proceed Payment
              </button>
            </div>
          </div>
        );

      default:
        return <h1>Select a section</h1>;
    }
  };

  return (
    <div className="mx-auto p-4 md:p-6 bg-white w-3/5 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Subscription</h1>
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6 border-b pb-4">
        {["Overview", "Plans", "Invoices", "Payment details"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Subscription;
