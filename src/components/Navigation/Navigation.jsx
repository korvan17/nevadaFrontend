import { links } from "@/content";
import Image from "next/image";
import Logo from "../Logo/Logo";

function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex w-[1200px] items-center justify-between mr-[24px]">
      <a className="cursor-pointer" onClick={scrollToTop}>
        <Logo />
        {/* <Image src="/assets/icons/logo.svg" width={32} height={31} alt="Logo" /> */}
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
