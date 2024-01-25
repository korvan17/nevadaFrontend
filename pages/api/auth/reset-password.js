"use client";
import axios from "axios";

export default async function resetPassword(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const { code, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const response = await axios.post(
      "https://nevadacms.onrender.com/api/auth/reset-password",
      {
        code,
        password,
        passwordConfirmation,
      }
    );

    if (response.data) {
      return res.status(200).json({ message: "Password has been reset." });
    } else {
      return res.status(500).json({ message: "Error resetting password." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
