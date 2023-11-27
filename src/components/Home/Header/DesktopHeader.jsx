import Navigation from "./Navigation";
import React from "react";
import { UserControls } from "@/components/UIElements";
import HeaderContacts from "./HeaderContacts";
function DesktopHeader() {
  return (
    <div
      className="hidden 
      fixed top-0 z-20 bg-mainBlack text-mainWhite
      text-sm[16px] w-[100%]  pb-[8px]
      lg:block lg:pb-[16px] pt-[76px] 
      mg:py-[11px]"
    >
      <HeaderContacts />
      <div className="container">
        <div className="flex">
          <Navigation />
          <UserControls />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
