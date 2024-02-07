"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReCAPTCHA from "react-google-recaptcha";

export default function PricingGetQuoteModal({ selectedTitle, closeModal }) {
  const [businessDirection, setBusinessDirection] = useState("");
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  useEffect(() => {
    if (fullName && email && phone && isCaptchaValid) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [fullName, email, phone, isCaptchaValid]);

  useEffect(() => {
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
    setFullName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setCompanyWebsite("");
    setMessage("");

    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("companyName");
    sessionStorage.removeItem("companyWebsite");
    sessionStorage.removeItem("message");
  };

  const passwordStart = process.env.NEXT_PUBLIC_PASSWORD_START;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      toast.info("Please wait, your previous submission is still processing.");
      return;
    }
    setIsSubmitting(true);

    if (!isCaptchaValid) {
      toast.error("Please complete the reCAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (fullName.length < 3) {
      toast.error("Full Name must be at least 3 characters.");
      setIsSubmitting(false);
      return;
    }

    if (phone.length > 15) {
      toast.error("Phone number must be at most 15 characters.");
      setIsSubmitting(false);
      return;
    }

    const dataReg = {
      businessDirection: selectedTitle,
      fullName,
      email,
      phone,
      companyName,
      companyWebsite,
      message,
      username: email,
      password: passwordStart,
    };

    try {
      const registrationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataReg),
        }
      );

      if (registrationResponse.ok) {
        const data = {
          titleModal: selectedTitle,
          businessDirection,
          fullName,
          email,
          phone,
          companyName,
          companyWebsite,
          message,
        };

        const contactsResponse = await fetch("/api/contacts", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (contactsResponse.ok) {
          clearFields();
          toast.success(
            "Registration and contact information submission successful!"
          );
          setTimeout(() => {
            closeModal();
          }, 3000);
        } else {
          const contactsText = await contactsResponse.text();
          toast.error(`Failed to send contact information: ${contactsText}`);
        }
      } else {
        const errorData = await registrationResponse.json();

        if (
          errorData &&
          errorData.error &&
          errorData.error.message.includes(
            "Email or Username are already taken"
          )
        ) {
          toast.error(
            "The email address you have entered is already registered. Please use a different email or sign in."
          );
        } else {
          let errorMessage = "Registration failed. Please try again.";
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          }
          toast.error(errorMessage);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error(`Error submitting form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  async function handleCaptchaSubmission(token) {
    if (!token) {
      setIsCaptchaValid(false);
      toast.error("Please verify that you are not a robot.");
    } else {
      try {
        const response = await fetch("/api/verifyCaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (data.success) {
          setIsCaptchaValid(true);
        } else {
          setIsCaptchaValid(false);
          toast.error("Captcha verification failed.");
        }
      } catch (error) {
        console.error("Error verification reCAPTCHA:", error);
        setIsCaptchaValid(false);
        toast.error("Captcha verification failed.");
      }
    }
  }

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <div>
      <ToastContainer position="top-center z-30" autoClose={5000} />
      <h2 className="text-center text-[24px] font-semibold mt-6 text-[#000A11]">
        {selectedTitle}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  lg:flex-row   justify-center items-center lg:gap-[50px] px-[19px] mb-[48px]">
          <div>
            <div className="mb-4">
              <h3 className="block mt-6 font-medium ml-2">
                {" "}
                Business direction
              </h3>

              <p className="ml-2">{selectedTitle}</p>
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
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 flex-wrap flex-col items-center">
          <div className="">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              size="normal"
              onChange={handleCaptchaSubmission}
            />
          </div>

          <div className="">
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
        </div>
      </form>
    </div>
  );
}
