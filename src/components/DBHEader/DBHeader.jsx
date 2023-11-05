import React from "react";
import { DarkLogo } from "../Icons";
import NavBar from "./NavBar";

function DBHeader() {
  return (
    <header
      className="
    fixed top-0 left-0
    bg-mainWhite w-full text-mainBlack text-[18px]
    pt-[16px] pb-[12px]
    "
    >
      <div className="container">
        <a href="#" className="flex gap-[5px] mb-[12px]">
          <DarkLogo />
          Prime Preparation Center
        </a>
        <NavBar />
      </div>
    </header>
  );
}

export default DBHeader;
