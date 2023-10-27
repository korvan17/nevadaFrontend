import React from "react";

import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";
import { FooterLinksLeftSide } from "./FooterLinksLeftSide";

export default function FooterLinks() {
  const t = true;
  return (
    <div className="border-y border-white container">
      <div className="flex flex-row  flex-wrap py-[48px] justify-between md:w-[564px] lg:w-auto mx-auto">
        <FooterLinksLeftSide />
        <div className="mb-[24px] w-full md:w-auto">
          <h3 className="text-[18px] font-bold mb-[24px]">
            Do you have a question?
          </h3>
          <FooterContacs />
        </div>
        <div>
          <h3 className="text-[18px] font-bold mb-[24px]">Social networks</h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}