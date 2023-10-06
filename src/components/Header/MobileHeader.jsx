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
    <header className="lg:hidden flex w-[100%] fixed top-0 bg-mainBlack text-mainWhite pt-[39px] pb-[8px] px-[16px]">
      <a className="cursor-pointer flex gap-[8px] items-center" href="#home">
        <Logo />
        <div>
          <p className="text-[18px] font-bold text-mainWhite leading-[20px]">
            Prime Preparation Center
          </p>
        </div>
      </a>
      <button className="ml-auto" onClick={handleOpenMenu} type="button">
        <BurgerMenuBtn />
      </button>
      {isMenuOpen && (
        <div className="flex justify-center items-center flex-col gap-[48px] bg-captionBlue pt-[86px] px-[8px] w-[100%] h-[100%] fixed top-0 left-0 text-mainWhite">
          <button
            className="absolute top-[79px] left-0 flex justify-center items-center w-[24px] h-[24px]"
            onClick={handleOpenMenu}
            type="button"
          >
            <CloseMenuIcon />
          </button>
          <UserControls />
          <div className="text-mainWhite text-left ">
            <h3 className="mb-[12px]">Contacts</h3>
            <a className="block mb-[8px]" href="tel:+48000000000">
              +48 000 000 000
            </a>
            <a href="mailto:ppc.company@gmail.com">ppc.company@gmail.com</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;
