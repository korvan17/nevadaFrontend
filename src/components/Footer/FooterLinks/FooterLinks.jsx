//local imports
import { FooterCommonList } from "./FooterCommonList";
import { helpLinks } from "./footer-data";
import { links } from "@/content";
import { SocialLinks } from "./SocialLinks";
import { FooterContacs } from "./FooterContacs";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-[164px] gap-x-[16px] gap-y-[24px] border-y border-white py-[48px] w-[375px] md:grid-cols-[164px] md:gap-x[20px]">
      <div className="col-span-1 w-[282px]">
        <FooterCommonList data={links} />
      </div>
      <div className="col-span-1 w-[282px] md:col-start-2 md:col-span-1">
        <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
        <FooterCommonList data={helpLinks} />
      </div>
      <div className="col-span-2 w-[282px] md:col-start-3 md:col-span-1">
        <h3 className="text-[18px] font-bold mb-[24px]">
          Do you have a question?
        </h3>
        <FooterContacs />
      </div>
      <div className="col-span-2 w-[282px] ">
        <h3 className="text-[18px] font-bold mb-[24px]">Social networks</h3>
        <SocialLinks />
      </div>
    </div>
  );
}
