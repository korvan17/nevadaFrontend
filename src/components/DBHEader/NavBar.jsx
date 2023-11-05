import React from "react";
import { HomeIcon, UserIcon } from "../Icons";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex gap-[16px] justify-center">
      <Link
        href="/dashboard/userPage"
        className="flex items-center justify-center w-[48px] h-[48px]"
        title="User page"
      >
        <UserIcon />
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center justify-center w-[48px] h-[48px]"
        title="Home page"
      >
        <HomeIcon />
      </Link>
    </nav>
  );
}

export default NavBar;
