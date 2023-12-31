"use client";
import React from "react";
import { BasicModal, RegistrationModal, LoginModal } from "@/components";
import useSWR from "swr";
import { SessionProvider } from "next-auth/react";

function ModalRender() {
  const { data: loginForm, mutate: mutateLoginForm } = useSWR("loginForm");
  const { data: registerForm, mutate: mutateRegisterForm } =
    useSWR("registerForm");

  const toggleModalReg = () => {
    mutateRegisterForm(!registerForm);
    document.body.style.overflow = "auto";
  };
  const toggleModalLog = () => {
    mutateLoginForm(!loginForm);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {registerForm && (
        <BasicModal
          modalIsOpen={registerForm}
          closeModal={toggleModalReg}
          widthLg="771px"
          heightLg="740px"
          widthMd="723px"
          heightMd="887px"
          widthSm="343px"
          heightSm="90vh"
        >
          <RegistrationModal
            modalIsOpen={registerForm}
            closeModal={toggleModalReg}
          />
        </BasicModal>
      )}
      {loginForm && (
        <BasicModal
          widthLg="497px"
          heightLg="627px"
          widthMd="497px"
          heightMd="627px"
          widthSm="360px"
          heightSm="498px"
          modalIsOpen={loginForm}
          closeModal={toggleModalLog}
          backgroundColor="#021827"
          closeButtonColor="rgba(2, 24, 39, 1)"
          closeButtonBackgroundColor="rgba(250, 252, 248, 1)"
          padding="12px"
        >
          <SessionProvider>
            <LoginModal
              modalIsOpen={loginForm}
              closeModal={toggleModalLog}
              toggleModalRegistration={toggleModalLog}
            />
          </SessionProvider>
        </BasicModal>
      )}
    </>
  );
}

export default ModalRender;
