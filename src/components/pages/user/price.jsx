import { React, useState } from "react";
const Price = () => {
  let temp2 = 30;
  const pricingData = {
    Basic: { 500: 10, 1500: 20, 2500: 30 },
    Standard: { 3500: 50, 5000: 75, 7500: 100 },
    Premium: { 8500: 100, 9500: 150, 10000: 200 },
  };
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const [selectedContacts, setSelectedContacts] = useState(
    Object.keys(pricingData["Basic"])[0]
  );
  const handlePlanChange = (e) => {
    const newPlan = e.target.value;
    setSelectedPlan(newPlan);
    setSelectedContacts(Object.keys(pricingData[newPlan])[0]);
  };

 
  // Get the dynamic price & email count
  const price = pricingData[selectedPlan][selectedContacts] || 0;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-4 sm:p-6">
      <div className="border rounded-lg p-4 sm:p-6 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-black  px-2 py-1 rounded-md text-2xl font-medium">
              Basic Plan
            </span>{" "}
          </h2>
          <p className="text-4xl font-bold text-gray-900">
            $10{" "}
            <span className="text-base font-normal text-gray-500">/month</span>
          </p>
        </div>

        <div className="mb-4">
          <span className="text-gray-700">12 of 20 mail sent</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-green-600 h-2.5 mb-4 rounded-full"
              style={{ width: `${temp2}%` }}
            ></div>
          </div>
        </div>
        <p className="text-gray-500">Next Payment</p>
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <h2 className="text-md font-medium">
            <span className="text-black">On 30 November, 2025</span>{" "}
          </h2>
        </div>
      </div>

      {/* Right Section - Subscription Dropdown */}
      <div className="border rounded-lg p-4 sm:p-6 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-black px-2 py-1 rounded-md text-2xl font-medium">
              Upgrade
            </span>
          </h2>
          <p className="text-xl font-bold text-gray-900">
            ${price}{" "}
            <span className="text-base font-normal text-gray-500">/month</span>
          </p>
        </div>

        {/* Plan Selection */}
        <div className="space-y-4 mb-4">
          <label className="block text-gray-600 text-sm">Plan</label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            value={selectedPlan}
            onChange={handlePlanChange}
          >
            {Object.keys(pricingData).map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        {/* Contacts Selection */}
        <div className="space-y-4 mb-2">
          <label className="block text-gray-600 text-sm">Contacts</label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
            value={selectedContacts}
            onChange={(e) => setSelectedContacts(e.target.value)}
          >
            {Object.keys(pricingData[selectedPlan])
              .filter((key) => key !== "emailLimit") // Exclude emailLimit key
              .map((contacts) => (
                <option key={contacts} value={contacts}>
                  {contacts}
                </option>
              ))}
          </select>
        </div>

        {/* Email Limit Display */}
        <span className="text-gray-600">
          Send up to {selectedContacts*12} emails each month.
        </span>
      </div>
    </div>
  );
};

export default Price;
