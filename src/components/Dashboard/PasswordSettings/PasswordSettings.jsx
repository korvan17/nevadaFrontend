"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloseBtn from "./CloseBtn";
import { useSession } from "next-auth/react";
import PasswordSettingsForm from "./PasswordSettingsForm";

function PasswordSettings({ toggleSideBar }) {
  const [showPassword, setShowPassword] = useState({});
  const { data: session, status } = useSession();
  const handleShowPassword = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is authenticated, session:", session);
    } else {
      console.log("User is not authenticated");
    }
  }, [session, status]);

  const handleFormSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    
    if (status !== "authenticated") {
      setErrors({
        submit: "You must be authenticated to change your password.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/auth/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.jwt}`,
          },
          credentials: "include",
          body: JSON.stringify({
            currentPassword: values.current,
            password: values.new,
            passwordConfirmation: values.repeat,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Some error occurred");
      }
      console.log("Password changed:", data);
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: error.message || "Failed to change password." });
    }
    setSubmitting(false);
  };

  return (
    <motion.div
      className=" 
        bg-mainWhite pb-[48px]
        fixed top-[50%] left-[50%] z-50 origin-center translate-x-[-50%]  translate-y-[-50%] 

        w-[320px]  sm:w-[343px] lg:w-[640px]

        text-mainBlack text-[16px] leading-[24px] font-semibold"
    >
      <CloseBtn toggleSideBar={toggleSideBar} />
      <PasswordSettingsForm
        showPassword={showPassword}
        handleShowPassword={handleShowPassword}
        handleFormSubmit={handleFormSubmit}
      />
    </motion.div>
  );
}

export default PasswordSettings;
