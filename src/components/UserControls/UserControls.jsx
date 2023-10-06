"use client";
import React from "react";
import Buttons from "../Buttons/Buttons";
const lang = ["EN", "UA", "RU"];

function UserControls() {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-center  gap-[8px] lg:gap-[18px] md:items-start lg:items-center">
      <ul className="flex ">
        {lang.map((e) => (
          <li
            className="last:border-r-0 border-b border-r border-r-captionalGreyLight border-b-captionalGreyLight lg:border-b-captionalGrey lg:border-r-captionalGrey transition-all ease-out hover:border-b-mainWhite hover:border-r-mainWhite "
            key={e}
          >
            <button
              className="lg:text-captionalGrey font-medium text-[16px] flex items-center h-[16px] px-[4px]     transition-all ease-out cursor-pointer text-captionalGreyLight hover:text-mainWhite active:text-mainWhite "
              type="button"
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:items-center gap-[8px] items-center md:items-start">
        <button className="lg:text-captionalGrey text-[16px] text-captionalGreyLight font-semibold	 hover:text-mainWhite transition-all ease-out cursor-pointer">
          Registration
        </button>
        <Buttons login={true}>Login</Buttons>
      </div>
    </div>
  );
}

export default UserControls;
