"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  InboundShipmentsIcon,
  MessagesIcon,
  ShipmentsIcon,
  UserIcon,
} from "@/components/Icons";
import { BurgerMenuIcon } from "@/components/Icons";
import { Sidebar } from "@/components";

function NavBar({ isSideBarOpen, toggleSideBar }) {
  const pathName = usePathname();

  const userPage = pathName === "/dashboard/account";
  const messagesPage = pathName === "/dashboard/messages";
  const inboundShipmentsPage = pathName === "/dashboard/shipments";

  return (
    <nav>
      <div className="flex gap-[16px] justify-center items-baseline md:hidden">
        <button
          className="ml-auto w-[48px] h-[48px] flex justify-center"
          type="button"
          onClick={toggleSideBar}
        >
          <BurgerMenuIcon stroke="#1477CE" />
        </button>

        <div
          className="bg-captionBlueDB hover:bg-captionBlue 
            transition-all ease-out
             text-captionalWhite
             flex items-center justify-center w-[48px] h-[48px] rounded-full"
        >
          {userPage ? (
            <UserIcon stroke="#FAFCF8" />
          ) : messagesPage ? (
            <MessagesIcon stroke="#FAFCF8" />
          ) : inboundShipmentsPage ? (
            <InboundShipmentsIcon stroke="#FAFCF8" />
          ) : (
            <ShipmentsIcon stroke="#FAFCF8" />
          )}
        </div>
        <Link
          href={"/"}
          className="  
            transition-all ease-out
             text-captionalWhite
             flex items-center justify-center w-[48px] h-[48px] "
        >
          <HomeIcon />
        </Link>
      </div>

      {isSideBarOpen && (
        <Sidebar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      )}
    </nav>
  );
}

export default NavBar;

{
  /* {navLinks.map(({ icon, title, href }) => {
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
        })} */
}
