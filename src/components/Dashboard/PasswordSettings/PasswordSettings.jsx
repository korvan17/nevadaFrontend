"use client";
import React, { useState } from "react";

import { passwordUpdateData } from "@/content";
import { passwordChangeSchema } from "@/validationSchemas";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Image from "next/image";
import securityIcon from "../../Icons/shield-lock.png";

const initialValues = {
  current: "",
  new: "",
  repeat: "",
};

function PasswordSettings() {
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={passwordChangeSchema}
    >
      <Form
        id="passwordSettingsForm"
        className="text-mainWhite text-[16px] leading-[24px] font-semibold"
      >
        <div className="flex items-center justify-center gap-[8px] mb-[44px]">
          <Image
            width={24}
            height={24}
            src={securityIcon}
            alt="security icon"
          />
          <div>
            <h2 className="text-mainWhite">Password settings</h2>
            <p className="text-captionalWhite text-[12px] leading-[16px] font-normal	">
              Change password
            </p>
          </div>
        </div>
        <b className="block mb-[24px] font-bold">Change password</b>
        <ul className="mb-[48px]">
          {passwordUpdateData.map(({ label, name }) => {
            return (
              <li key={name} className=" mb-[24px] last:mb-0">
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
                    className="w-[206px] py-[8px] rounded-[4px] ba-mainWhite text-mainBlack"
                    type={showPassword[name] ? "text" : "password"}
                    name={name}
                    id={name}
                  />
                  {showPassword[name] ? (
                    <VisibilityIcon
                      onClick={() => handleShowPassword(name)}
                      className="absolute top-[4px] right-[12px]
                       text-captionBlueHover text-[14px]"
                      style={{ fontSize: "14px" }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => handleShowPassword(name)}
                      className="absolute top-[4px] right-[12px]
                       text-captionBlueHover text-[14px]"
                      style={{ fontSize: "14px" }}
                    />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <button
          htmlFor="passwordSettingsForm"
          className="bg-captionBlueHover rounded-[8px] py-[15px] px-[39px]"
          type="submit"
        >
          Done
        </button>
      </Form>
    </Formik>
  );
}

export default PasswordSettings;
