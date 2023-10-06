"use client";
import React from "react";
import Buttons from "../Buttons/Buttons";
const lang = ["EN", "UA", "RU"];

function UserControls() {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-center items-center gap-[18px]">
      <ul className="flex">
        {lang.map((e) => (
          <li key={e}>
            <button
              className="lg:text-captionalGrey font-medium flex items-center h-[16px] px-[4px] border-b  border-r border-r-mainWhite border-b-captionalGreyLight lg:border-b-captionalGrey   transition-all ease-out cursor-pointer text-captionalGreyLight hover:text-mainWhite active:text-mainWhite hover:border-b-mainWhite"
              type="button"
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap gap-[8px] items-center">
        <button className="lg:text-captionalGrey text-captionalGreyLight font-semibold	 hover:text-mainWhite transition-all ease-out cursor-pointer">
          Registration
        </button>
        <Buttons login={true}>Login</Buttons>
      </div>
    </div>
  );
}

export default UserControls;
