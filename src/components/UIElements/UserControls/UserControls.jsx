"use client";
import React from "react";
import Buttons from "../Buttons/Buttons";

import useSWR from "swr";

function UserControls() {
  const { data: loginForm, mutate: mutateLoginForm } = useSWR("loginForm");
  const { data: registerForm, mutate: mutateRegisterForm } =
    useSWR("registerForm");

  const toggleModalLogin = () => {
    mutateLoginForm(!loginForm);
  };
  const toggleModalRegistration = async () => {
    mutateRegisterForm(!registerForm);
  };
  return (
    <div
      className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap 
    justify-center gap-[8px] lg:gap-[18px] md:items-start lg:items-center"
    >
      <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:items-center gap-[8px] items-center md:items-start">
        <button
          onClick={toggleModalRegistration}
          className="lg:text-captionalGrey text-[16px] text-captionalGreyLight font-semibold   hover:text-mainWhite transition-all ease-out cursor-pointer"
        >
          Registration
        </button>
        <Buttons login={true} toggleModal={toggleModalLogin}>
          Login
        </Buttons>
      </div>
    </div>
  );
}

export default UserControls;