import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default function PasswordRecoveryModal({ toggleModalRegistration }) {
  const handleFormSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/auth/forgot-password`,
        {
          email: values.email,
        }
      );
      console.log("Success:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setErrors({
        submit: "Failed to reset password. Please try again later.",
      });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="px-[0] py-[0] md:px-[62px] md:py-[114px]">
          <h2 className="text-center text-[24px] leading-[1] font-semibold text-white mt-[63px] md:mt-0">
            Password recovery
          </h2>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-white mt-[24px] text-[16px] leading-[1.5]"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="w-full p-4 border mt-[8px] rounded-[8px] leading-[1.5]"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-[12px] mt-[4px]"
            />
          </div>
          <p className="text-white mt-[12px] text-[12px] leading-[1.3]">
            Don’t worry, it happens. Please enter your email address. We will
            send you an email to reset your password.
          </p>
          <div className="flex-col justify-center mt-[32px] flex ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-captionBlue text-white rounded hover:bg-captionBlueHover mx-[auto] font-bold text-[16px] leading-[1] w-[271px] h-[45px] px-[40px] py-[12px]"
            >
              Send Reset Link
            </button>
            <button
              type="button"
              onClick={toggleModalRegistration}
              className="bg-captionalGrey text-white rounded mt-[12px] hover:bg-captionBlueHover mx-[auto] font-bold text-[16px] leading-[1] w-[271px] h-[45px] px-[40px] py-[12px]"
            >
              Back
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
