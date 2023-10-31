"use client";
import React from "react";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    businessDirection: document.getElementById("Select Your Business").value,
    fullName: document.getElementById("fullName").value,
    companyName: document.getElementById("companyName").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    comments: document.getElementById("comments").value,
  };

  try {
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default function GetQuoteWidgetModal() {
  return (
    <div>
      <h2 className="text-center text-[24px] font-semibold mt-6 text-[#000A11]">
        Contacts Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="Business direction"
            className="block mt-6 font-medium ml-2"
          >
            Business direction <span className="text-red-500">*</span>
          </label>
          <select
            id="Select Your Business"
            className="w-full p-4 border rounded"
            required
            defaultValue="Select Your Business"
          >
            <option disabled>Select Your Business</option>
            <option>FBA, FBW, Private Label</option>
            <option>Online arbitration</option>
            <option>FBM</option>
            <option>Wholesale</option>
          </select>
        </div>
        <div className="mt-[18px]">
          <label
            htmlFor="fullName"
            className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="companyName"
            className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full p-4 border rounded"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="website"
            className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
          >
            Company Website
          </label>
          <input
            type="url"
            id="website"
            className="w-full p-4 border rounded"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
          >
            Comments
          </label>
          <textarea
            id="comments"
            rows="5"
            className="w-full p-4 border rounded  resize-none"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-accentYellow text-white px-4 py-2 rounded hover:bg-accentHoverYellow ml-[auto] mr-[auto] font-bold text-[16px] w-[179px] h-[48px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
