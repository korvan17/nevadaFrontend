//global imports
import Link from "next/link";
//local imports
import Buttons from "../Buttons/Buttons";
import { FooterCommonList } from "./FooterCommonList";
import { footerLinksData } from "./footer-data";

export default function Footer() {
  return (
    <div>
      <div>
        {/* temp solution */}
        <Link href="/">Prime Preparation Center</Link>
        <form action="">
          <input type="email" />
          <Buttons>Send</Buttons>
        </form>
      </div>
      <FooterCommonList data={footerLinksData.sections} />

      <p>Help</p>
      <FooterCommonList data={footerLinksData.help} />

      <div>
        <b>Do you have a question?</b>
        <p>
          Write to us at the email address:
          <a href="companyname@gmail.com">companyname@gmail.com</a>
        </p>
        <p>
          Phone:
          <a href="tel:+48 000 000 000">+48 000 000 000</a>
        </p>
      </div>
      <div>
        <p>Social networks</p>
        <ul>
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
      <div>
        <p>Company name</p>
        <p>All rights reserved Copyright (2006 - 2023) - Name™</p>
      </div>
    </div>
  );
}
