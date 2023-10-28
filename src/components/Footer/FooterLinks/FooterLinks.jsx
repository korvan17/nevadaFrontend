import React from "react";

import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";
import { FooterCommonList } from "./FooterCommonList";
import { links } from "@/content";
import { helpLinks } from "./footer-data";

export default function FooterLinks() {
  return (
    <div className="container">
      <div className="border-y border-white">
        <div className="flex flex-row flex-wrap justify-between md:w-[564px] lg:w-auto mx-auto py-[24px] lg:pt-[49px] lg:pb-[47px] text-[14px]">
          <div className="mb-[24px]">
            <FooterCommonList data={links} />
          </div>
          <div className="mb-[24px]">
            <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
            <FooterCommonList data={helpLinks} />
          </div>
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
    </div>
  );
}
