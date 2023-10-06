"use client";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}
