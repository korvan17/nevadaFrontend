//global imports
import Link from "next/link";
//local imports
import Buttons from "../Buttons/Buttons";
import { FooterLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <div className="w-[1200px] mx-auto ">
      <div>
        {/* temp solution */}
        <Link href="/">Prime Preparation Center</Link>
        <form action="">
          <input type="email" />
          <Buttons>Send</Buttons>
        </form>
      </div>
      <FooterLinks />
      <div className="flex items-center justify-center py-[28px] flex-wrap flex-col text-center">
        <h3 className="mb-[24px]">Prime Preparation Center</h3>
        <p className="flex flex-col text-[15px]">
          <span>All rights reserved</span>
          <span>Copyright (2022 - 2023) - PPC™</span>
        </p>
      </div>
    </div>
  );
}
