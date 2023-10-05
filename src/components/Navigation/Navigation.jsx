"use client";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const links = [
  {
    label: "About us",
    id: "about", // Используйте только имя ID без символа "#"
  },
  {
    label: "Services",
    id: "services",
  },
  {
    label: "Pricing",
    id: "pricing",
  },
  {
    label: "FAQ",
    id: "faq",
  },
  {
    label: "Contacts us",
    id: "contacts",
  },
];

function Navigation() {

    const scrollToTop = () => {
    scroll.scrollToTop();
    };
    
  return (
    <nav className="flex w-[1200px] items-center justify-between mr-[24px]">
      <a href="/" onClick={scrollToTop}>Logo svg or img</a>
      <ul className="flex items-center gap-[24px]">
        {links.map(({ label, id }) => (
          <li key={id}>
            {/* Заменяем <a> на ScrollLink */}
            <ScrollLink
              to={id}
              spy={true}
              smooth={true}
              offset={-70} // Опционально: смещение от верхней части страницы
              duration={500}
              className="hover:underline transition-all ease-out cursor-pointer"
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
