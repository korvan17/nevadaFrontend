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

export default function Home() {
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
    </>
  );
}
