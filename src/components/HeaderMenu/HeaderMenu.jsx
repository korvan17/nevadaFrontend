import React from "react";
import CloseMenuIcon from "../CloseMenuIcon/CloseMenuIcon";
import UserControls from "../UserControls/UserControls";
import { motion } from "framer-motion";

function HeaderMenu({ handleOpenMenu }) {
  return (
    <motion.div
      className="flex justify-start items-center 
    md:items-start flex-col gap-[48px]

    bg-captionBlue pt-[86px] px-[8px]
    md:pt-[110px] md:px-[12px]

    w-[70%] sm:w-[50%] h-[100%]
    fixed top-0 right-0
    
    text-mainWhite"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      //   transition={{ duration: 1, type: "spring", stiffness: 150 }}
    >
      <button
        className="absolute top-[38px] left-0 md:left-[24px] md:top-[62px] 
        flex justify-center items-center w-[24px] h-[24px]"
        onClick={handleOpenMenu}
        type="button"
      >
        <CloseMenuIcon />
      </button>
      <UserControls />
      <div className=" text-left ">
        <h3 className="mb-[12px] text-[16px] md:text-[24px] text-mainWhite">
          Contacts
        </h3>
        <a
          className="block mb-[8px] text-[14px] md:text-[16px] text-captionalGreyLight 
          hover:text-mainWhite transition-all ease-out"
          href="tel:+48000000000"
        >
          +48 000 000 000
        </a>
        <a
          className="text-[14px] md:text-[16px]  text-captionalGreyLight
          hover:text-mainWhite transition-all ease-out"
          href="mailto:ppc.company@gmail.com"
        >
          ppc.company@gmail.com
        </a>
      </div>
    </motion.div>
  );
}

export default HeaderMenu;
