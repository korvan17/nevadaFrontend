"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  email: '',
  password: '',
  // display: getDisplayType(),
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    businessDirection: document.getElementById("Select Your Business").value,
    fullName: document.getElementById("fullName").value,
    companyName: document.getElementById("companyName").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    comments: document.getElementById("comments").value,
  };

  try {
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default function LoginModal() {
  return (
    <div className="">
      <h2 className="text-center text-[24px] font-semibold text-white mt-[67px]" >
        Login
      </h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label
            htmlFor="Business direction"
            className="block           
            font-semibold    
             text-white 
             mt-[24px] 
             text-[14px] 
             leading-[1.5]
             rounded-[8px]"
          >
            Email
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border mt-[8px] rounded-[8px]"
            required
            placeholder="Enter your e-mail"
          />
           <label
            htmlFor="Business direction"
            className="block mt-[12px] font-semibold  text-white"
          >
            Password
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border mt-[8px] rounded-[8px]"
            required
            placeholder="Enter your password"
          />
          <p>
          *Something seems to have gone wrong. Check whether the password and user login were entered correctly. Please note that the password must consist of 8 characters
          </p>
          <div>
            <input type="checkbox" name="checkbox" value="remember-me"/>
            <label 
            // for="checkbox"
            ><span></span>Remember Me</label>
          </div>
          <div className="flex-col justify-center">
          <button
            type="submit"
            className="bg-captionBlue text-white px-4 py-2 rounded hover:bg-captionBlueHover ml-[auto] mr-[auto] font-bold text-[16px] w-[179px] h-[48px]"
          >
            Login
          </button>
          <p className="text-white">Don’t have account? <span className="text-captionBlue">Create new account</span></p>
        </div>
        </div>
      </form>
    </div>



  //   <Formik
  //   initialValues={initialValues}
  //   onSubmit={handleSubmit}
  //   // validationSchema={loginSchema}
  // >
  //   <Form className="">
  //     <div className="">
  //       <div className="">
  //         <ErrorMessage
  //           name="email"
  //           render={message => <p className="">{message}</p>}
  //         />
  //         <Field
  //           className=""
  //           type="text"
  //           name="email"
  //           placeholder="Enter your email"
  //         />
  //       </div>
  //       <div className="">
  //         <ErrorMessage
  //           name="password"
  //           render={message => <p className="">{message}</p>}
  //         />
  //         <Field
  //           className=""
  //           // type={showPassword ? 'text' : 'password'}
  //           name="password"
  //           placeholder="Confirm a password"
  //         />
  //         <div className="">
  //           <svg
  //             width={18}
  //             height={18}
  //             className=""
  //             // onClick={handleTogglePassword}
  //           >
  //             {/* <use href={svgSprite + '#icon-eye'} /> */}
  //           </svg>
  //         </div>
  //       </div>
  //     </div>

  //     <button className="" type="submit">
  //       Log In Now
  //     </button>
  //   </Form>
  // </Formik>
  );
}
