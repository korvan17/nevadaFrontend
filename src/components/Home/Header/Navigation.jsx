import React from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll/modules";
import { Logo } from "@/components/Icons";
import { links } from "@/content";

function Navigation() {
  const scrollToSection = (id) => {
    const topPosition = document.getElementById(id).offsetTop - 120;
    return scroll.scrollTo(topPosition);
  };
  return (
    <nav className="flex w-[1200px] items-center mr-[24px]">
      <a className="cursor-pointer flex gap-[8px] items-center" href="#home">
        <Logo />
        <div>
          <p className="text-[18px] font-bold text-mainWhite leading-[20px]">
            Prime Preparation Center
          </p>
          <p className="text-[18px] text-captionalGrey leading-[24px]">
            Warehouses
          </p>
        </div>
      </a>
      <ul className="flex items-center gap-[24px] mx-auto">
        {links.slice(1).map(({ label, id }) => (
          <li key={id}>
            <ScrollLink
              className="hover:underline transition-all ease-out cursor-pointer"
              onClick={() => scrollToSection(id)}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={100}
              delay={0}
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
