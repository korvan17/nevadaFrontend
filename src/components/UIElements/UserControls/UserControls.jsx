"use client";
import React from "react";
import Link from "next/link";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
import { BasicModal } from "@/components";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";
import RegistrationModal from "@/components/Modals/RegistrationModal/RegistrationModal";

const lang = ["EN", "UA", "RU"];

function UserControls() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegistration, setShowModalRegistration] = useState(false);

  const toggleModalLogin = () => {
    setShowModalLogin(!showModalLogin);
  };
  const toggleModalRegistration = () => {
    setShowModalRegistration(!showModalRegistration);
  };
  return (
    <div
      className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap 
    justify-center gap-[8px] lg:gap-[18px] md:items-start lg:items-center"
    >
      <ul className="flex justify-center">
        {lang.map((e) => (
          <li
            className="last:border-r-0 border-b border-r border-r-captionalGreyLight
             border-b-captionalGreyLight lg:border-b-captionalGrey lg:border-r-captionalGrey
             hover:border-b-mainWhite hover:border-r-mainWhite
             
             transition-all ease-out "
            key={e}
          >
            <button
              className="lg:text-captionalGrey font-medium text-[16px] flex items-center h-[16px] px-[4px]     transition-all ease-out cursor-pointer text-captionalGreyLight hover:text-mainWhite active:text-mainWhite "
              type="button"
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:items-center gap-[8px] items-center md:items-start">
        <button
          onClick={toggleModalRegistration}
          className="lg:text-captionalGrey text-[16px] text-captionalGreyLight font-semibold	 hover:text-mainWhite transition-all ease-out cursor-pointer"
        >
          Registration
        </button>
        <Buttons login={true} toggleModal={toggleModalLogin}>
          Login
        </Buttons>
      </div>
      {showModalLogin && (
        <BasicModal
          widthLg="497px"
          heightLg="627px"
          widthMd="497px"
          heightMd="627px"
          widthSm="360px"
          heightSm="498px"
          modalIsOpen={showModalLogin}
          closeModal={toggleModalLogin}
          backgroundColor="#021827"
          closeButtonColor="rgba(2, 24, 39, 1)"
          closeButtonBackgroundColor="rgba(250, 252, 248, 1)"
        >
          <LoginModal
            modalIsOpen={showModalLogin}
            closeModal={toggleModalLogin}
          />
        </BasicModal>
      )}
      {showModalRegistration && (
        <BasicModal
          modalIsOpen={showModalRegistration}
          closeModal={toggleModalRegistration}
          widthLg="771px"
          heightLg="740px"
          widthMd="723px"
          heightMd="887px"
          widthSm="343px"
          heightSm="892px"
        >
          <RegistrationModal
            modalIsOpen={showModalRegistration}
            closeModal={toggleModalRegistration}
          />
        </BasicModal>
      )}
    </div>
  );
}

export default UserControls;
