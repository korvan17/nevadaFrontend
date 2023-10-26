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
} from "@/components";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Faq />
      {/* <Footer /> */}
      {/* <ChatWindow /> */}
      {/* <div id="myportal" /> */}
    </>
  );
}
