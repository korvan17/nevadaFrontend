"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify"; // Подключаем ToastContainer и функцию toast
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const code = new URLSearchParams(window.location.search).get("code");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match"); // Используем toast для показа сообщения
      return;
    }

    try {
      const response = await axios.post("/api/auth/reset-password", {
        code,
        password,
        passwordConfirmation: confirmPassword,
      });

      if (response.data) {
        toast.success("Password reset successfully. Please log in.");
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <ToastContainer />
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 border border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-lg"
              >
                Reset Password
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-2 text-center text-sm text-red-500">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
