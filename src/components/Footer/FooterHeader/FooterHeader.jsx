import React from "react";
import { Logo } from "@/components/Icons";
import FooterForm from "./FooterForm/FooterForm";

export default function Footer() {
  return (
    <div className="container flex justify-center py-[48px] md:justify-between">
      <a className="cursor-pointer flex gap-[8px] items-center" href="#">
        <Logo />
        <div>
          <p className="text-[24px] font-bold text-mainWhite leading-[20px]">
            Prime Preparation Center
          </p>
          <p className="text-[16px] text-captionalGrey leading-[24px] hidden md:block">
            Warehouse
          </p>
        </div>
      </a>
      <FooterForm />
    </div>
  );
}
