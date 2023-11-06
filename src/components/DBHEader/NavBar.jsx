"use client";

import React from "react";
import { HomeIcon, UserIcon } from "../Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();
  return (
    <nav className="">
      <ul className="flex gap-[16px] justify-center">
        {navLinks.map(({ icon, title, href }) => {
          const isActive = pathName === href;
          return (
            <li key={title}>
              <Link
                href={href}
                className={`${
                  isActive && "bg-captionBlueHover"
                } flex items-center justify-center
               w-[48px] h-[48px] 
               rounded-full`}
                title={title}
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
