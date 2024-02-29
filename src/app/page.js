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
  ModalRender,
} from "@/components";
import GetQuoteButton from "@/components/UIElements/GetQueteButton/GetQuoteButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TelegramButton from "@/components/Home/TelegramButton/TelegramButton";

export default function Home() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Partners />
      {/* <Certificates /> */}
      <Faq />
      <GetQuoteButton />
      <TelegramButton />
      <ModalRender />
    </>
  );
}
