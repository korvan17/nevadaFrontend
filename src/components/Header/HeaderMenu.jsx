import React from "react";
import { motion } from "framer-motion";
import { CloseMenuIcon } from "@/components/Icons";
import { UserControls } from "../UIElements";

function HeaderMenu({ toggleMenu }) {
  const menuVars = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <>
      <motion.div
        className="flex justify-start items-center 
        md:items-start flex-col gap-[48px]
    
        bg-captionBlue pt-[86px] px-[8px]
        md:pt-[110px] md:px-[12px]
    
        w-[70%] sm:w-[50%] h-[100%]
        fixed top-0 right-0 z-90 
        
        text-mainWhite"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          type: "tween",
          stiffness: 100,
        }}
      >
        <button
          className="absolute top-[38px] left-0 md:left-[24px] md:top-[62px]  z-50
            flex justify-center items-center w-[24px] h-[24px]"
          onClick={toggleMenu}
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
            href="tel:+17027010078"
          >
            +1 (702) 701-0078
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
    </>
  );
}

export default HeaderMenu;
