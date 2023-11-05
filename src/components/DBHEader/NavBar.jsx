import React from "react";
import { HomeIcon, UserIcon } from "../Icons";
import Link from "next/link";

const navLinks = [
  {
    icon: <UserIcon />,
    title: "User page",
    href: "/dashboard/userPage",
  },
  {
    icon: <HomeIcon />,
    title: "Home page",
    href: "/dashboard",
  },
];

function NavBar() {
  return (
    <nav className="">
      <ul className="flex gap-[16px] justify-center">
        {navLinks.map(({ icon, title, href }) => (
          <li key={title}>
            <Link
              href={href}
              className="flex items-center justify-center w-[48px] h-[48px]"
              title={title}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
