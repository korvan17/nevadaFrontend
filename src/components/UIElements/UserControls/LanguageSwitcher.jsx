import React from "react";

const lang = ["EN", "UA", "RU"];

function LanguageSwitcher({ page }) {
  const pageColors =
    page === "home"
      ? "border-r-solid border-r-[1px] border-b-solid  border-r-captionalGreyLight border-b-captionalGreyLight lg:border-b-captionalGrey lg:border-r-captionalGrey hover:border-b-mainWhite hover:border-r-mainWhite transition-all ease-out last:border-r-0"
      : "border-r-[1px] border-r-solid border-b-[1px] border-b-solid  border-b-captionalGrey border-r-captionalGrey hover:border-b-mainBlack hover:border-r-mainBlack transition-all ease-out last:border-r-0";
  const pageBtnColors =
    page == "home"
      ? "lg:text-captionalGrey font-medium text-[16px] flex items-center h-[16px] px-[4px]     transition-all ease-out cursor-pointer text-captionalGreyLight hover:text-mainWhite active:text-mainWhite "
      : "text-captionalGrey font-medium text-[16px] flex items-center h-[16px] px-[4px] transition-all ease-out cursor-pointer text-captionalGreyLight hover:text-mainBlack active:text-mainBlack ";

  return (
    <ul className="flex justify-center">
      {lang.map((e) => (
        <li className={pageColors} key={e}>
          <button className={pageBtnColors} type="button">
            {e}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitcher;
