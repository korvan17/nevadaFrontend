import Navigation from "./Navigation";
import React from "react";
import { UserControls } from "@/components/UIElements";
function DesktopHeader() {
  return (
    <div
      className="hidden lg:block fixed top-0 z-20 bg-mainBlack text-mainWhite
     text-sm[16px] w-[100%] pt-[39px] pb-[8px]  mg:py-[11px] lg:pt-[46px] lg:pb-[16px]"
    >
      <div className="gap-[20px] text-[16px] font-semibold	 w-[100%] absolute top-0 h-[30px] hidden lg:flex items-center justify-center bg-captionBlue text-captionalWhite">
        <a href="mailto:info@ppcwarehouses.com">info@ppcwarehouses.com</a>
        <a href="tel:+1 (702) 701-0078">+1 (702) 701-0078</a>
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
