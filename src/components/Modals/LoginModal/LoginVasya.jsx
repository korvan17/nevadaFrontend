"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/validationSchemas";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PasswordRecoveryModal from "../PasswordRecoveryModal/PasswordRecoveryModal";

const initialValues = {
  email: "",
  password: "",
};
export default function LoginModal({ toggleModalRegistration }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const [showModalRegistration, setShowModalRegistration] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(true);

  const toggleModal = () => {
    setIsForgotPassword(!isForgotPassword);
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
        {!isForgotPassword ? (
          <Form className="px-[0] py-[0] md:px-[62px] md:py-[114px]">
            <h2 className="text-center text-[24px] leading-[1] font-semibold text-white mt-[63px] md:mt-0">
              Login
            </h2>
            <div className="">
              <label
                htmlFor="Business direction"
                className="block           
            font-semibold    
             text-white 
             mt-[24px] 
             text-[14px] 
             leading-[1.5]
             md:text-[16px]"
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
              <label
                htmlFor="Business direction"
                className="block mt-[12px] font-semibold  text-white text-[14px] leading-[1.5]"
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
                  title={!showPassword ? "Show Password" : "Hide Password"}
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
              <div className="flex mt-[12px] ">
                <input
                  type="checkbox"
                  name="checkbox"
                  value="remember-me"
                  className="w-[16px]"
                />
                <label
                // for="checkbox"
                >
                  <span className="text-white ml-[12px] text-[12px] leading-[1.5]">
                    Remember Me
                  </span>
                </label>
                <button
                  onClick={toggleModal}
                  className="text-captionBlue ml-[auto] text-[12px] leading-[1.5]"
                >
                  Forgot password?
                </button>
              </div>
              <div className="flex-col justify-center mt-[30px]  flex ">
                <button
                  type="submit"
                  className="bg-captionBlue text-white rounded
                   hover:bg-captionBlueHover mx-[auto] font-bold
                    text-[16px] leading-[1] w-[271px] h-[45px] px-[40px] py-[12px]"
                >
                  Login
                </button>
                <p className="text-white text-[12px] leading-[1.25] mt-[12px] mx-[auto]">
                  Don’t have account?{" "}
                  <a
                    onClick={toggleModalRegistration}
                    className="text-captionBlue text-[12px] leading-[1.25]"
                  >
                    Create new account
                  </a>
                </p>
              </div>
            </div>
          </Form>
        ) : (
          showModalLogin && (
            <PasswordRecoveryModal
              toggleModalRegistration={toggleModalRegistration}
            />
          )
        )}
      </Formik>
    </>
  );
}
