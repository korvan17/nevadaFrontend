import React from "react";
import {
  About,
  Faq,
  Footer,
  Header,
  Hero,
  Pricing,
  Services,
  ChatWindow,
  Partners,
  Certificates,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Partners />
      <Certificates />
      <Faq />
      {/* <Footer /> */}
      {/* <ChatWindow /> */}
      {/* <div id="myportal" /> */}
    </>
  );
}
