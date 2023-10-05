"use client";
import React from "react";
import Buttons from "../Buttons/Buttons";
const lang = ["EN", "UA", "RU"];

function UserControls() {
  return (
    <div className="flex items-center gap-[18px]">
      <ul className="flex">
        {lang.map((e) => (
          <li key={e}>
            <button
              className="flex items-center h-[16px] px-[4px] border-b  border-r border-r-mainWhite  border-b-captionalGrey transition-all ease-out cursor-pointer text-captionalGrey hover:text-mainWhite active:text-mainWhite hover:border-b-mainWhite"
              type="button"
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-[8px] items-center">
        <button className="text-captionalGrey hover:text-mainWhite transition-all ease-out cursor-pointer">
          Registration
        </button>
        <Buttons login={true}>Login</Buttons>
      </div>
    </div>
  );
}

export default UserControls;
