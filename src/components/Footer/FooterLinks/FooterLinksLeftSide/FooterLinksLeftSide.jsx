import React from "react";

import { FooterCommonList } from "../FooterCommonList";
import { links } from "@/content";
import { helpLinks } from "../footer-data";

export default function FooterLinksLeftSide() {
  return (
    <>
      <div className="mb-[24px]">
        <FooterCommonList data={links} />
      </div>
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
        <FooterCommonList data={helpLinks} />
      </div>
    </>
  );
}
