import { FooterLinks } from "./FooterLinks";
import { FooterHeader } from "./FooterHeader";
import { FooterBottom } from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-mainBlack text-mainWhite" id="contacts">
      <div className="container">
        <FooterHeader />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}
