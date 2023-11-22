"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/validationSchemas";
import LoginModal from "../LoginModal/LoginModal";



const initialValues = {
  email: "",
  
};
export default function PasswordRecoveryModal({ toggleModalRegistration }) { 

  const [showModalLogin, setShowModalLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const toggleModal = () => {
    setShowModalLogin(!showModalLogin);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      console.log("values:", values);
      // Здесь будет отправка данных
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={loginSchema}
      >
        {!showModalLogin ? (
        <Form className="px-[0] py-[0] md:px-[62px] md:py-[114px]">
            <h2 className="text-center text-[24px] leading-[1] font-semibold text-white mt-[63px] md:mt-0">
            Password recovery
            </h2>
            <div className="">
              <label
                htmlFor="Business direction"
                className="block           
            font-semibold    
             text-white 
             mt-[24px] 
             text-[16px] 
             leading-[1.5]"
              >
                Email
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-4 border mt-[8px] rounded-[8px] leading-[1.5]"
                required
                placeholder="Enter your e-mail"
              />             
             
              <p className="text-white mt-[12px] text-[12px] leading-[1.3]">
              Don’t worry, it happens. Please enter your email address. We will send you an email resent your password 
              </p>
              
              <div className="flex-col justify-center mt-[32px]  flex ">
                <button
                  type="submit"
                  className="bg-captionBlue text-white rounded
                   hover:bg-captionBlueHover mx-[auto] font-bold
                    text-[16px] leading-[1] w-[271px] h-[45px] px-[40px] py-[12px]"
                >
                  Login
                </button>
                <button
                onClick={toggleModal}
                  type="button"
                  className="bg-captionalGrey text-white rounded mt-[12px]
                   hover:bg-captionBlueHover mx-[auto] font-bold
                    text-[16px] leading-[1] w-[271px] h-[45px] px-[40px] py-[12px]"
                >
                  Back
                </button>
              </div>
            </div>
          </Form>
          ) : (
            setIsForgotPassword && <LoginModal toggleModalRegistration={toggleModalRegistration} />
          )}        
      </Formik>    
    </>
  );
}








