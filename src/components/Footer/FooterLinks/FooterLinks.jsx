"use client";

import React from "react";

import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";
import { useEffect, useState } from "react";
import { FooterLinksLeftSide } from "./FooterLinksLeftSide";

export default function FooterLinks() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const mobileViewPort = viewportWidth < 768;
  return (
    <div className="border-y border-white container">
      <div className="flex md:flex-row flex-col flex-wrap py-[48px] justify-between md:w-[564px] lg:w-auto mx-auto">
        {mobileViewPort ? (
          <div className="flex justify-between w-full">
            <FooterLinksLeftSide />
          </div>
        ) : (
          <FooterLinksLeftSide />
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
