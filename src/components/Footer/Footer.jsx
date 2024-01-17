import React from "react";
import { FooterLinks } from "./FooterLinks";
import { FooterHeader } from "./FooterHeader";
import { FooterBottom } from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-mainBlack text-mainWhite" id="contacts">
      <FooterHeader />
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
}
