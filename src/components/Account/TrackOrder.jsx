import React from "react";

const TrackOrder = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-6 underline underline-offset-4">
        Track Your Order
      </h2>
      <p className="leading-5 text-slate-500">
        To track your order please enter your OrderID in the box below and press
        "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </p>
      <div>
        <div className="mt-4 ">
          <label className="block text-lg font-semibold text-gray-700 ">
            Order Id
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg font-semibold focus:border-green-500"
            placeholder="Find It In Your Order Confirmation Email"
          />
        </div>
        <div className="mt-4 ">
          <label className="block text-lg font-semibold text-gray-700 ">
            Billing Email
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg font-semibold focus:border-green-500 "
            placeholder="Email You Send During Checkout"
          />
        </div>
        <button className="button mt-4 w-24 h-10 bg-green-500 hover:bg-green-400 text-white font-medium text-lg">
          Track
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
