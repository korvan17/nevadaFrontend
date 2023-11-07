import React from "react";

const lang = ["EN", "UA", "RU"];

function LanguageSwitcher() {
  return (
    <ul className="flex justify-center">
      {lang.map((e) => (
        <li
          className="last:border-r-0 border-b border-r border-r-captionalGreyLight
             border-b-captionalGreyLight lg:border-b-captionalGrey lg:border-r-captionalGrey
             hover:border-b-mainWhite hover:border-r-mainWhite
             
             transition-all ease-out "
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
  );
}

export default LanguageSwitcher;
