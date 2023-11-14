"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/validationSchemas";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import { BasicModal } from "@/components";



const initialValues = {
  email: "",
  password: "",

};
export default function LoginModal({closeModal}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  // const [showRegisterForm, setshowRegisterForm] = useState(false);
  const [showModalRegistration, setShowModalRegistration] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(true);

  
  const toggleModal = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const toggleModalRegistration = () => {
    setShowModalRegistration(!showModalRegistration);
    setShowModalLogin(false);
    setTimeout(() => {
      closeModal();
      
    }, 500);
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
      {(!isForgotPassword && showModalLogin) ? <Form>
        <h2 className="text-center text-[24px] font-semibold text-white mt-[67px]">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="Business direction"
            className="block           
            font-semibold    
             text-white 
             mt-[24px] 
             text-[14px] 
             leading-[21px]
             rounded-[8px]"
          >
            Email
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border mt-[8px] rounded-[8px]"
            required
            placeholder="Enter your e-mail"
          />
          <label
            htmlFor="Business direction"
            className="block mt-[12px] font-semibold  text-white"
          >
            Password
          </label>
          <span className="relative">
          <input
           type={showPassword ? "text" : "password"}
            id="fullName"
            className="w-full p-4 border mt-[8px] rounded-[8px]"
            required
            placeholder="Enter your password"
          />
          <button
                    type="button"
                    className="absolute top-0 right-[12px]
                         text-captionBlueHover hover:text-captionBlue text-[14px] transition-all"
                    title={
                      !showPassword ? "Show Password" : "Hide Password"
                    }
                  >
                    {showPassword ? (
                      <VisibilityIcon
                        onClick={() => handleShowPassword(name)}
                        style={{ fontSize: "14px" }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => handleShowPassword(name)}
                        style={{ fontSize: "14px" }}
                      />
                    )}
                  </button>
          </span>
          {/* <p>
            *Something seems to have gone wrong. Check whether the password and
            user login were entered correctly. Please note that the password
            must consist of 8 characters
          </p> */}
          <div className="flex mt-[12px]">
            <input type="checkbox" name="checkbox" value="remember-me" />
            <label
            // for="checkbox"
            >
              <span className="text-white ml-[12px]">Remember Me</span>
            </label>
            <button 
            onClick={toggleModal}
            className="text-captionBlue ml-[auto]">Forgot password?</button>
          </div>
          <div className="flex-col justify-center mt-[30px]  flex ">
            <button
              type="submit"
              className="bg-captionBlue text-white px-4 py-2 rounded hover:bg-captionBlueHover mx-[auto] font-bold text-[16px] w-[271px] h-[45px]"
            >
              Login
            </button>
            <p className="text-white text-[12px] mt-[12px] mx-[auto]">
              Don’t have account?{" "}
              <a 
              onClick={toggleModalRegistration}
              className="text-captionBlue text-[12px]">
                Create new account
              </a>
            </p>
          </div>
        </div>
      </Form>:(showModalLogin && <p>isForgotPassword</p>)}
    </Formik>
      <BasicModal
          modalIsOpen={showModalRegistration}
          closeModal={toggleModalRegistration}
          widthLg="771px"
          heightLg="740px"
          widthMd="723px"
          heightMd="887px"
          widthSm="343px"
          heightSm="90vh"
        >
          <RegistrationModal
            modalIsOpen={showModalRegistration}
            closeModal={toggleModalRegistration}
          />
        </BasicModal>    
    </>
  );
}
