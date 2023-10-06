//global imports
import Link from "next/link";
//local imports
import Buttons from "../Buttons/Buttons";
import { FooterLinks } from "./FooterLinks";

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
      <FooterLinks />
      <div>
        <h3>Prime Preparation Center</h3>
        <p>All rights reserved Copyright (2006 - 2023) - Name™</p>
      </div>
    </div>
  );
}
