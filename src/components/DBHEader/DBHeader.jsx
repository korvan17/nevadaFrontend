import React from "react";
import { DarkLogo } from "../Icons";
import NavBar from "./NavBar";
import { LanguageSwitcher } from "../UIElements";

function DBHeader() {
  return (
    <header
      className="
    fixed top-0 left-0
    bg-mainWhite w-full 
    pt-[16px] pb-[12px] 
    leading-[19px] text-[18px]  font-bold text-mainBlack
    "
    >
      <div className="container">
        <a
          href="#"
          className="flex gap-[5px] items-center 
        mb-[12px] "
        >
          <DarkLogo />
          Prime Preparation Center
        </a>
        <LanguageSwitcher />
        <NavBar />
      </div>
    </header>
  );
}

export default DBHeader;
