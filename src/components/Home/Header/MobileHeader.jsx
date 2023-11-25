import HeaderMenu from "./HeaderMenu";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import { BurgerMenuIcon, Logo } from "@/components/Icons";
import useSWR from "swr";
import HeaderContacts from "./HeaderContacts";

function MobileHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const { data: registerForm } = useSWR("registerForm");
  const { data: loginForm } = useSWR("loginForm");

  useEffect(() => {
    if (registerForm || loginForm) toggleMenu();
  }, [registerForm, loginForm]);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="lg:hidden 
        opacity-100
      pt-[64px] pb-[8px] 
     md:pb-[8px]
      flex w-[100%] z-20
      fixed top-0 bg-mainBlack text-mainWhite"
    >
      <div className="container">
        <HeaderContacts />
        <div className="flex justify-space-between">
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
          {isMenuOpen && !registerForm && (
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
