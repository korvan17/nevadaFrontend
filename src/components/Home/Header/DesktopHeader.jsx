import Navigation from "./Navigation";
import React from "react";
import { UserControls } from "@/components/UIElements";
import HeaderContacts from "./HeaderContacts";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";

function DesktopHeader({ user }) {
  const isNotLoggedIn = !user;
  return (
    <div
      className="hidden 
      fixed top-0 z-20 bg-mainBlack text-mainWhite
      text-sm[16px] w-[100%]  pb-[8px]
      lg:block lg:pb-[16px] pt-[76px] 
      mg:py-[11px]"
    >
      <HeaderContacts />
      <div className="container">
        <div className="flex">
          <Navigation />
          {isNotLoggedIn && <UserControls />}
          {user && (
            <Link href="/dashboard">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
