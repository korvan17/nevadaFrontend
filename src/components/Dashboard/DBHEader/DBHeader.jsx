import React from "react";
import { HomeIcon, Logo } from "@/components/Icons";
import NavBar from "./NavBar";
import HeaderContacts from "@/components/Home/Header/HeaderContacts";
import Link from "next/link";

function DBHeader({ toggleSideBar, isSideBarOpen }) {
  return (
    <header className="bg-mainWhite fixed top-0 left-0 z-20 w-full text-mainBlack md:bg-mainBlack md:text-mainWhite">
      <div className="hidden md:block w-full">
        <HeaderContacts />
      </div>
      <div className="w-full pt-[16px] pb-[12px] md:pt-[68px]  md:pb-[12px] md:items-end">
        <div className="container md:flex justify-between">
          <a
            href="#"
            className="flex gap-[5px] items-center justify-start
            leading-[19px] text-[18px]  font-bold
          mb-[12px] "
          >
            <span className="md:hidden">
              <Logo fill={"#000"} />
            </span>
            <span className="hidden md:inline">
              <Logo />
            </span>
            Prime Preparation Center
          </a>
          <div className="flex items-center justify-center lg:gap-[24px]">
            <Link
              href="/"
              className="hidden md:flex bg-captionBlueDB hover:bg-captionBlue 
            transition-all ease-out
             text-captionalWhite
              items-center justify-center w-[48px] h-[48px] rounded-full
            "
            >
              <HomeIcon fill="#fff" />
            </Link>
            <div className="hidden md:block md:mr-[37px]"></div>
            {/* <button
              className="hidden lg:block transition-all ease-out
           bg-captionBlue hover:bg-captionBlueHover
            text-mainWhite text-[16px] font-bold  leading-[16px]
           w-[179px] h-[48px] rounded-[8px]"
              type="button"
            >
              Logout
            </button> */}
            <div className="lg:hidden">
              <NavBar
                toggleSideBar={toggleSideBar}
                isSideBarOpen={isSideBarOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DBHeader;
