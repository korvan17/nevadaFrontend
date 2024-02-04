import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import FormContent from "./FormContent";
import { passwordUpdateData } from "@/content";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { passwordChangeSchema } from "@/validationSchemas";

function PasswordSettingsForm({
  handleShowPassword,
  handleFormSubmit,
  showPassword,
}) {
  return (
    <Formik
      initialValues={{
        currentPassword: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={handleFormSubmit}
      validationSchema={passwordChangeSchema}
    >
      <Form id="passwordSettingsForm">
        <FormContent />
        <div className="px-[16px]">
          <b className="block mb-[24px] font-bold text-captionBlueDB ">
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
                        !showPassword[name] ? "Show Password" : "Hide Password"
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
  );
}

export default PasswordSettingsForm;
