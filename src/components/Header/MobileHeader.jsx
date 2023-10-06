import { useState } from "react";
import Logo from "../Logo/Logo";
import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";
import CloseMenuIcon from "../CloseMenuIcon/CloseMenuIcon";
import UserControls from "../UserControls/UserControls";

function MobileHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:hidden md:pt-[38px] md:pb-[8px] md:pl-[16px] md:pr-[40px] flex w-[100%] fixed top-0 bg-mainBlack text-mainWhite pt-[39px] pb-[8px] px-[16px]">
      <div className="hidden left-0 md:flex lg:hidden text-[16px] font-semibold	 w-[100%] absolute top-0 h-[30px] items-center justify-center bg-captionBlue text-captionalWhite">
        <a href="tel:+48000000000">+48 000 000 000</a>
      </div>
      <a className="cursor-pointer flex gap-[8px] items-center" href="#home">
        <Logo />
        <div>
          <p className="text-[18px] md:text-[24px] font-bold text-mainWhite leading-[20px]">
            Prime Preparation Center
          </p>
        </div>
      </a>
      <button className="ml-auto" onClick={handleOpenMenu} type="button">
        <BurgerMenuBtn />
      </button>
      {isMenuOpen && (
        <div className="flex justify-start items-center md:items-start flex-col gap-[48px] bg-captionBlue pt-[86px] px-[8px]  md:pt-[110px] md:px-[12px]  w-[100%] h-[100%] fixed top-0 right-0 text-mainWhite">
          <button
            className="absolute top-[38px] left-0 md:left-[24px] md:top-[62px] flex justify-center items-center w-[24px] h-[24px]"
            onClick={handleOpenMenu}
            type="button"
          >
            <CloseMenuIcon />
          </button>
          <UserControls />
          <div className="text-mainWhite text-left ">
            <h3 className="mb-[12px] text-[16px] md:text-[24px]">Contacts</h3>
            <a
              className="block mb-[8px] text-[14px] md:text-[16px]"
              href="tel:+48000000000"
            >
              +48 000 000 000
            </a>
            <a
              className="text-[14px] md:text-[16px]"
              href="mailto:ppc.company@gmail.com"
            >
              ppc.company@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;
