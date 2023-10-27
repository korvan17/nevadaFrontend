"use client";

import React from "react";
import { FooterCommonList } from "./FooterCommonList";
import { helpLinks } from "./footer-data";
import { links } from "@/content";
import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";
import { useEffect, useState } from "react";


export default function FooterLinks() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  console.log('viewportWidth :', viewportWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const mobileViewPort = viewportWidth < 768;
  return (
    <div className="border-y border-white container">
      {/* <div className="container flex py-[48px] w-[375px] flex-row md:flex-wrap"> */}
      <div className="flex md:flex-row flex-col flex-wrap py-[48px] justify-between md:w-[564px] lg:w-auto mx-auto">
        {mobileViewPort ? (
          <div className="flex justify-between w-full">
            <div className="mb-[24px]">
              <FooterCommonList data={links} />
            </div>
            <div className="mb-[24px]">
              <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
              <FooterCommonList data={helpLinks} />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-[24px]">
              <FooterCommonList data={links} />
            </div>
            <div className="mb-[24px]">
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
