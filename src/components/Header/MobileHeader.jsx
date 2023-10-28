import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { BurgerMenuIcon, Logo } from "../Icons";
import HeaderMenu from "./HeaderMenu";
import { AnimatePresence } from "framer-motion";
import React from "react";
function MobileHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="lg:hidden 
        opacity-100
       pt-[39px] pb-[8px] 
      md:pt-[38px] md:pb-[8px]
      flex w-[100%] z-40
      fixed top-0 bg-mainBlack text-mainWhite"
    >
      <div className="container">
        <div
          className="
              absolute
              left-0 top-0
              w-[100%] h-[30px]
              lg:hidden text-[16px] font-semibold
              bg-captionBlue text-captionalWhite"
        >
          <a
            className="block w-[100%] text-center py-[3px]"
            href="tel:+17027010078"
          >
            +1 (702) 701-0078
          </a>
        </div>
        <div className="flex justify-space-beetween">
          <a
            className="cursor-pointer flex gap-[8px] items-center"
            href="#home"
          >
            <Logo />
            <div>
              <p className="text-[18px] md:text-[24px] font-bold text-mainWhite leading-[20px]">
                Prime Preparation Center
              </p>
            </div>
          </a>
          <button className="ml-auto" onClick={toggleMenu} type="button">
            <BurgerMenuIcon />
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <Backdrop toggleMenu={toggleMenu}></Backdrop>
              <HeaderMenu toggleMenu={toggleMenu} open={isMenuOpen} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MobileHeader;
