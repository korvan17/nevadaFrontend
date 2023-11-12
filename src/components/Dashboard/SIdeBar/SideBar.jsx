import { CloseMenuIcon } from "@/components/Icons";
import React from "react";

function SideBar({ toggleSideBar, children }) {
  return (
    <div
      className="fixed top-0 left-0
      h-full w-full px-[9px] py-[16px]
      bg-mainBlack
  "
    >
      SideBar
      <button
        className="w-[24px] h-[24px] absolute top-[24px] left-[12px] flex items-center justify-center"
        onClick={toggleSideBar}
        type="button"
      >
        <CloseMenuIcon />
      </button>
      {children}
    </div>
  );
}

export default SideBar;
