"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content";
import { HomeIcon, UserIcon } from "@/components/Icons";
import { BurgerMenuIcon } from "@/components/Icons";

function NavBar() {
  const pathName = usePathname();

  const homePage = pathName === "/dashboard";
  const userPage = pathName === "/dashboard/account";

  return (
    <nav className="">
      <ul className="flex gap-[16px] justify-center items-baseline md:hidden">
        <li key={"burgerIcon"}>
          <button className="ml-auto" type="button">
            <BurgerMenuIcon stroke="#1477CE" />
          </button>
        </li>
        {navLinks.map(({ icon, title, href }) => {
          const isActive = pathName === href;
          return (
            <li key={title}>
              <Link
                href={href}
                className={`${
                  isActive
                    ? "bg-captionBlueDB text-captionalWhite  hover:bg-captionBlue"
                    : "text-captionBlueDB hover:bg-captionBlue hover:text-captionalWhite"
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
            className="bg-captionBlueDB hover:bg-captionBlue 
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
