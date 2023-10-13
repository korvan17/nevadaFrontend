import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Container } from "../LayoutComponents";
import { BurgerMenuIcon, Logo } from "../Icons";
import HeaderMenu from "./HeaderMenu";

function MobileHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="lg:hidden 
      opacity-100
     pt-[39px] pb-[8px] 
    md:pt-[38px] md:pb-[8px]
    flex w-[100%] z-100
    absolute top-0 bg-mainBlack text-mainWhite"
    >
      <Container>
        <div
          className="left-0 flex 
        lg:hidden text-[16px] font-semibold
        w-[100%] absolute top-0 h-[30px] items-center justify-center
        bg-captionBlue text-captionalWhite"
        >
          <a href="tel:+48000000000">+48 000 000 000</a>
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
          <button className="ml-auto" onClick={handleOpenMenu} type="button">
            <BurgerMenuIcon />
          </button>
        </div>
        {isMenuOpen && (
          <>
            <Backdrop></Backdrop>
            <HeaderMenu handleOpenMenu={handleOpenMenu} open={isMenuOpen} />
          </>
        )}
      </Container>
    </div>
  );
}

export default MobileHeader;
