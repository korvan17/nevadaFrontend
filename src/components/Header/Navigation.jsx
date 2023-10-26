import { Logo } from "@/components/Icons";
import { links } from "@/content";
import { animateScroll as scroll } from "react-scroll";
import React from "react";

function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex w-[1200px] items-center mr-[24px]">
      <a
        className="cursor-pointer flex gap-[8px] items-center"
        href="#home"
        // onClick={scrollToTop}
      >
        <Logo />
        <div>
          <p className="text-[18px] font-bold text-mainWhite leading-[20px]">
            Prime Preparation Center
          </p>
          <p className="text-[18px] text-captionalGrey leading-[24px]">
            Warehouse
          </p>
        </div>
      </a>
      <ul className="flex items-center gap-[24px] mx-auto">
        {links.slice(1).map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="hover:underline transition-all ease-out cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
