import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CustomCaptcha = ({ setCaptchaValid }) => {
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    setCaptchaQuestion(`${num1} + ${num2}`);
    setCaptchaAnswer(num1 + num2);
  };

  const handleInputChange = (e) => {
    const input = parseInt(e.target.value);
    setUserInput(e.target.value);

    if (input === captchaAnswer) {
      setCaptchaValid(true);
    } else {
      if (e.target.value) {
        toast.error("Incorrect captcha. Try again!");
        generateCaptcha(); // Regenerate captcha if the answer is wrong
      }
      setCaptchaValid(false);
    }
  };

  return (
    <div>
      <label className="font-semibold text-[30px] leading-[24px] mr-2">
        {captchaQuestion} =
      </label>
      <input
        type="text"
        onChange={handleInputChange}
        value={userInput}
        className="border rounded"
        required
      />
    </div>
  );
};

export default CustomCaptcha;
