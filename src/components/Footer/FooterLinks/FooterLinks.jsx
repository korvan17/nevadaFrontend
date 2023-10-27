import React from "react";
import { FooterCommonList } from "./FooterCommonList";
import { helpLinks } from "./footer-data";
import { links } from "@/content";
import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";

export default function FooterLinks() {
  const test = false;
  return (
    <div className="border-y border-white lg:container">
      {/* <div className="container flex py-[48px] w-[375px] flex-row md:flex-wrap"> */}
      <div className="flex md:flex-row flex-col flex-wrap py-[48px] justify-between">
        {test ? (
          <div className="flex mb-[24px] justify-between w-full">
            <div>
              <FooterCommonList data={links} />
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
              <FooterCommonList data={helpLinks} />
            </div>
          </div>
        ) : (
          <>
            <div>
              <FooterCommonList data={links} />
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
              <FooterCommonList data={helpLinks} />
            </div>
          </>
        )}
        <div className="mb-[24px]">
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
