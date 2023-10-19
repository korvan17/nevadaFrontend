import React from "react";

import { Buttons } from "@/components/UIElements";
import { EnvelopeIcon } from "@/components/Icons";

export default function FooterForm() {
  return (
    <form action="" className=" hidden lg:block text-mainBlack">
      <label className="relative">
        <EnvelopeIcon className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3" />
        <input
          type="email"
          className="placeholder: w-[282px] rounded-lg p-[16px] outline-none mr-[24px] pl-[48px]"
          placeholder="Enter your email to be in touch"
        />
      </label>
      <Buttons sendMail={true}>Send</Buttons>
    </form>
  );
}
