"use client";
import React from "react";
import {
  About,
  Faq,
  Header,
  Hero,
  Pricing,
  Services,
  ChatWindow,
  Partners,
  Certificates,
} from "@/components";
import GetQuoteButton from "@/components/UIElements/GetQueteButton/GetQuoteButton";
import { ModalRenderer } from "@/components";
// import { BasicModal, RegistrationModal, LoginModal } from "@/components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import useSWR from "swr";
// import { SessionProvider } from "next-auth/react";

export default function Home() {
  // const { data: loginForm, mutate: mutateLoginForm } = useSWR("loginForm");
  // const { data: registerForm, mutate: mutateRegisterForm } =
  //   useSWR("registerForm");

  // const toggleModalReg = () => {
  //   mutateRegisterForm(!registerForm);
  // };
  // const toggleModalLog = () => {
  //   mutateLoginForm(!loginForm);
  // };
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Partners />
      {/* <Certificates /> */}
      <Faq />
      <GetQuoteButton />
      {/* <ChatWindow /> */}
      {/* <div id="myportal" /> */}

      {/* {registerForm && (
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
      )} */}

      <ModalRenderer />
    </>
  );
}
