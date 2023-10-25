//local imports
import { FooterCommonList } from "./FooterCommonList";
import { footerLinksData } from "./footer-data";

export default function FooterLinks() {
  return (
    <div className="flex justify-between flex-wrap border-y border-white py-[48px]">
      <div className="w-[282px]">
        <FooterCommonList data={footerLinksData.sections} />
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">Help</h3>
        <FooterCommonList data={footerLinksData.help} />
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">
          Do you have a question?
        </h3>
        <ul>
          <li className="mb-[8px]">
            <a target="_blank" href="info@ppcwarehouses.com">
              <b className="font-semibold	">Write to us at the email address:</b>
              info@ppcwarehouses.com
            </a>
          </li>
          <li>
            <a href="tel:+1 (702) 701-0078">
              <b className="font-semibold">Phone:</b> +1 (702) 701-0078
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[282px]">
        <h3 className="text-[18px] font-bold mb-[24px]">Social networks</h3>
        <ul className="flex justify-between">
          <li>
            <a href=""></a>icon
          </li>
          <li>
            <a href=""></a>icon
          </li>
          <li>
            <a href=""></a>icon
          </li>
          <li>
            <a href=""></a>icon
          </li>
        </ul>
      </div>
    </div>
  );
}
