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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <About />
      <Services />
      <Pricing />
      <Partners />
      {/* <Certificates /> */}
      <Faq />
      <GetQuoteButton />
      {/* <ChatWindow /> */}
      {/* <div id="myportal" /> */}

      <ModalRenderer />
    </>
  );
}
