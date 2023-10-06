// import Buttons from "../Buttons/Buttons";
// import Container from "@/components/Container/Container";
// import Navigation from "../Navigation/Navigation";
// import UserControls from "../UserControls/UserControls";
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
