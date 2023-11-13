import * as yup from "yup";

const passwordChangeSchema = yup.object({
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      "Invalid password format"
    )
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be no more than 64 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
});

export default passwordChangeSchema;
