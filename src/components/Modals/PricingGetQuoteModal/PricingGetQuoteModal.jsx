"use client";
import React from "react";
export default function PricingGetQuoteModal({ selectedTitle }) {
  return (
    <div>
      <h2 className="text-center text-[24px] font-semibold mt-6 text-[#000A11]">
        Registration Form
      </h2>
      <div className="mb-4">
        <label
          htmlFor="Business direction"
          className="block mt-6 font-medium ml-2"
        >
          Business direction <span className="text-red-500">*</span>
        </label>
        <div>
          <h3 className="text-red-600 font-extrabold">{selectedTitle}</h3>
        </div>
        {/*   чтоб єтот див тоже уходил при отправки формі набекенд selectedTitle пропсом что надо сделать? */}
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
          htmlFor="phone"
          className="block mb-3 font-semibold ml-2 leading-[24px] text-[#000A11]"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full p-4 border rounded"
          required
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="companyName"
          className="block mb-3 font-semibold ml-2 leading-[24px]
          
           text-[#000A11]"
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
          htmlFor="website"
          className="block mb-3 font-semibold ml-2 
          
          leading-[24px] text-[#000A11]"
        >
          Company Website
        </label>
        <input type="url" id="website" className="w-full p-4 border rounded" />
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
        <button className="bg-accentYellow text-white px-4 py-2 rounded hover:bg-accentHoverYellow ml-[auto] mr-[auto] font-bold text-[16px] w-[179px] h-[48px]">
          Submit
        </button>
      </div>
    </div>
  );
}
