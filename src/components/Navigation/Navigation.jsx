"use client";
import { links } from "@/content";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import icon from "../../assets/icons/sprite.svg";

function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex w-[1200px] items-center justify-between mr-[24px]">
      <a className="cursor-pointer" onClick={scrollToTop}>
        Logo
        {/* <svg>
          <use href={icon} />
        </svg> */}
      </a>
      <ul className="flex items-center gap-[24px]">
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
