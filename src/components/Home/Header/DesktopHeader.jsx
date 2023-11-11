import Navigation from "./Navigation";
import React from "react";
import { UserControls } from "@/components/UIElements";
function DesktopHeader() {
  return (
    <div
      className="hidden 
      fixed top-0 z-20 bg-mainBlack text-mainWhite
      text-sm[16px] w-[100%]  pb-[8px]
      lg:block lg:pb-[16px] pt-[76px] 
      mg:py-[11px]"
    >
      <div
        className="
        w-[100%] absolute top-0 h-[56px] 
        flex items-center justify-center flex-col
         bg-captionBlue text-captionalWhite
        text-[16px] font-semibold 
        "
      >
        <a className="" href="mailto:info@ppcwarehouses.com">
          info@ppcwarehouses.com
        </a>
        <a className="" href="tel:+1 (702) 701-0078">
          +1 (702) 701-0078
        </a>
        {/* <Link
          className="rounded-[8px] bg-accentYellow text-[#FAFCF8] px-1"
          href="/dashboard"
        >
          Open Dash Page
        </Link> */}
      </div>
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
