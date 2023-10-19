//local imports
import { FooterCommonList } from "./FooterCommonList";
import { helpLinks } from "./footer-data";
import { links } from "@/content";
import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";

export default function FooterLinks() {
  return (
    <div className="flex justify-between flex-wrap border-y border-white py-[48px]">
      <div className="w-[282px]">
        <FooterCommonList data={links} />
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
        <FooterCommonList data={helpLinks} />
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">
          Do you have a question?
        </h3>
        <FooterContacs/>
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">Social networks</h3>
        <SocialLinks />
      </div>
    </div>
  );
}
