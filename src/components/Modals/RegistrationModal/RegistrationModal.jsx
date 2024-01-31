"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomCaptcha from "@/components/Home/CustomCaptcha/CustomCaptcha";

export default function RegistrationModal({ closeModal }) {
  const [titleModal, setTitleModal] = useState("Registration Form");

  const [businessDirection, setBusinessDirection] = useState(
    sessionStorage.getItem("businessDirection") || "Select Your Business"
  );
  const [fullName, setFullName] = useState(
    sessionStorage.getItem("fullName") || ""
  );

  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");

  const [phone, setPhone] = useState(sessionStorage.getItem("phone") || "");

  const [companyName, setCompanyName] = useState(
    sessionStorage.getItem("companyName") || ""
  );
  const [companyWebsite, setCompanyWebsite] = useState(
    sessionStorage.getItem("companyWebsite") || ""
  );
  const [message, setMessage] = useState(
    sessionStorage.getItem("message") || ""
  );

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  useEffect(() => {
    if (businessDirection && fullName && email && phone) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [businessDirection, fullName, email, phone]);

  useEffect(() => {
    sessionStorage.setItem("businessDirection", businessDirection);
    sessionStorage.setItem("fullName", fullName);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("companyName", companyName);
    sessionStorage.setItem("companyWebsite", companyWebsite);
    sessionStorage.setItem("message", message);
  }, [
    businessDirection,
    fullName,
    email,
    phone,
    companyName,
    companyWebsite,
    message,
  ]);
  const clearFields = () => {
    setBusinessDirection("");
    setFullName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setCompanyWebsite("");
    setMessage("");
    sessionStorage.removeItem("businessDirection");
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("companyName");
    sessionStorage.removeItem("companyWebsite");
    sessionStorage.removeItem("message");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      toast.error("Captcha validation failed.");
      return;
    }
    const data = {
      titleModal,
      businessDirection,
      fullName,
      email,
      phone,
      companyName,
      companyWebsite,
      message,
    };
    const dataReg = {
      businessDirection,
      fullName,
      email,
      phone,
      companyName,
      companyWebsite,
      message,
      username: email,
      password: "123456",
    };

    try {
      const contactsResponse = await fetch("/api/contacts", {
        method: "POST",

        body: JSON.stringify(data),
      });

      if (contactsResponse.ok) {
        const registrationResponse = await fetch(
          "https://nevadacms.onrender.com/api/auth/local/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataReg),
          }
        );
        if (registrationResponse.ok) {
          clearFields();
          toast.success("Registration successful!");
          setTimeout(() => {
            closeModal();
          }, 3000);
        } else {
          const registrationText = await registrationResponse.text();
          toast.error(`Registration failed: ${registrationText}`);
        }
      } else {
        const contactsText = await contactsResponse.text();
        toast.error(`Failed to send contact information: ${contactsText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div>
      <ToastContainer position="top-center z-30" autoClose={5000} />

      <h2 className="text-center text-[24px] font-semibold mt-6 text-[#000A11] mb-[12px] rounded-[8px]">
        {titleModal}
      </h2>
      <p
        className="text-[14px] text-captionalGrey  text-center
      w-[319px] md:-[523px] lg:w-[542px]  mb-[32px] mx-auto"
      >
        Registering on our website is easy and quick. To get started, obtain
        your personal "Account Number" - a unique identifier that will grant you
        access to our services and benefits. To do this, please fill out the
        "Get a Quote" form.
      </p>
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col  lg:flex-row   justify-center items-center 
        
        lg:gap-[50px] px-[19px] mb-[48px]"
        >
          <div>
            <div className="mb-4">
              <label
                htmlFor="businessDirection"
                className="block mt-6 font-medium ml-2"
              >
                Business direction <span className="text-red-500">*</span>
              </label>

              <select
                id="businessDirection"
                className="w-[327px] md:w-[342px] p-4 border rounded "
                value={businessDirection}
                onChange={(e) => setBusinessDirection(e.target.value)}
                required
              >
                <option value="Select Your Business" disabled>
                  Select Your Business
                </option>
                <option value="FBA, FBW, Private Label">
                  FBA, FBW, Private Label
                </option>
                <option value="Online arbitration">Online arbitration</option>
                <option value="FBM">FBM</option>
                <option value="Wholesale">Wholesale</option>
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-[327px] md:w-[342px] p-4 border rounded"
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
                className="w-[327px] md:w-[342px] p-4 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="w-[327px] md:w-[342px] p-4 border rounded"
              />
            </div>
          </div>
          <div>
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
                className="w-[327px] md:w-[342px] p-4 border rounded"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
                type="text"
                id="website"
                className="w-[327px] md:w-[342px] p-4 border rounded"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
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
                className="h-[121px] w-[327px] md:w-[342px] p-4 border rounded  
                
                resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <CustomCaptcha setCaptchaValid={setIsCaptchaValid} />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`${
              isButtonActive
                ? "bg-accentYellow hover:bg-accentHoverYellow"
                : "bg-gray-400 cursor-not-allowed"
            } text-white px-4 py-2 rounded ml-[auto] mr-[auto] font-bold text-[16px] w-[179px] h-[48px]`}
            disabled={!isButtonActive || !isCaptchaValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
