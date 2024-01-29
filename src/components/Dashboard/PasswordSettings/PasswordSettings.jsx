"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { passwordUpdateData } from "@/content";
import { passwordChangeSchema } from "@/validationSchemas";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Image from "next/image";
import FormContent from "./FormContent";
import CloseBtn from "./CloseBtn";

const initialValues = {
  current: "",
  new: "",
  repeat: "",
};

function PasswordSettings({ toggleSideBar }) {
  const [showPassword, setShowPassword] = useState({});
  const [focusedInput, setFocusedInput] = useState(null);

  const handleShowPassword = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
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
    <motion.div
      className=" 
        bg-mainWhite pb-[48px]
        fixed top-[50%] left-[50%] z-50 origin-center translate-x-[-50%]  translate-y-[-50%] 

        w-[320px]  sm:w-[343px] 

        text-mainBlack text-[16px] leading-[24px] font-semibold"
    >
      <CloseBtn toggleSideBar={toggleSideBar} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={passwordChangeSchema}
      >
        <Form id="passwordSettingsForm" className="">
          <FormContent />
          <div className="px-[16px]">
            <b className="block mb-[24px] font-bold text-captionBlueDB">
              Change password
            </b>
            <ul className="mb-[32px] ">
              {passwordUpdateData.map(({ label, name }) => {
                return (
                  <li key={name} className=" mb-[12px] last:mb-0">
                    <label htmlFor={name} className="block mb-[8px]">
                      {label}
                    </label>
                    <ErrorMessage
                      name={name}
                      render={(message) => (
                        <p className="text-alertRed mb-[2px] text-[12px] leading-[10px]">
                          {message}
                        </p>
                      )}
                    />
                    <span className="relative">
                      <Field
                        className="w-[206px] py-[8px] px-[12px] rounded-[4px] ba-mainWhite text-mainBlack"
                        type={showPassword[name] ? "text" : "password"}
                        name={name}
                        id={name}
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-[12px]
                           text-captionBlueHover hover:text-captionBlue text-[14px] transition-all"
                        title={
                          !showPassword[name]
                            ? "Show Password"
                            : "Hide Password"
                        }
                      >
                        {showPassword[name] ? (
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
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            htmlFor="passwordSettingsForm"
            className="ml-[16px] text-captionalWhite button bg-captionBlueHover transition-all ease-out hover:bg-captionBlue rounded-[8px] py-[8px] px-[24px]"
            type="submit"
            title="Click to submit"
          >
            Done
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
}

export default PasswordSettings;
