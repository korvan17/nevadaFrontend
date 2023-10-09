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
        <h3>Help</h3>
        <FooterCommonList data={footerLinksData.help} />
      </div>
      <div className="w-[282px]">
        <h3>Do you have a question?</h3>
        <ul>
          <li>
            <a target="_blank" href="companyname@gmail.com">
              <b>Write to us at the email address:</b>
              companyname@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+48 000 000 000">
              <b>Phone:</b> +48 000 000 000
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[282px]">
        <h3>Social networks</h3>
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
