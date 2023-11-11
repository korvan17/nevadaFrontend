"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content";
import { HomeIcon, UserIcon } from "@/components/Icons";

function NavBar() {
  const pathName = usePathname();

  const homePage = pathName === "/dashboard";
  const userPage = pathName === "/dashboard/account";

  return (
    <nav className="">
      <ul className="flex gap-[16px] justify-center md:hidden">
        {navLinks.map(({ icon, title, href }) => {
          const isActive = pathName === href;
          return (
            <li key={title}>
              <Link
                href={href}
                className={`${
                  isActive
                    ? "bg-captionBlue text-captionalWhite  hover:bg-captionBlueHover"
                    : "text-captionBlue hover:bg-captionBlueHover hover:text-captionalWhite"
                } flex items-center justify-center
               w-[48px] h-[48px] 
               rounded-full transition-all ease-out`}
                title={title}
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:flex gap-[16px] justify-center">
        <Link href={userPage ? "/dashboard" : "/dashboard/account"}>
          <button
            type="button"
            className="bg-captionBlue hover:bg-captionBlueHover 
            transition-all ease-out
             text-captionalWhite
             flex items-center justify-center w-[48px] h-[48px] rounded-full"
          >
            {homePage ? <UserIcon /> : <HomeIcon />}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
