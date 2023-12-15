"use client";
import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  const user = session?.user;
  return (
    <header>
      <MobileHeader user={user} />
      <DesktopHeader user={user} />
    </header>
  );
}
