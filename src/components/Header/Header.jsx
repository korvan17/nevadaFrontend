import Link from "next/link";
import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";

export default function Header() {
  return (
    <header className="bg-mainBlack text-mainWhite text-sm[16px] width=[100%] pt-[16px] pb-[16px] ">
      <Container>
        <div className="flex">
          <nav className="flex w-[1200px] items-center justify-between mr-[24px]">
            <a href="/">Logo svg or img</a>
            <ul className="flex items-center gap-[24px]">
              <li>
                <a id="#about" href="">
                  About us
                </a>
              </li>
              <li>
                <a id="#services" href="">
                  Services
                </a>
              </li>
              <li>
                <a id="#pricing" href="">
                  Pricing
                </a>
              </li>
              <li>
                <a id="#faq" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a id="#contacts" href="">
                  Contacts us
                </a>
              </li>
            </ul>
          </nav>
          <Buttons login={true}>Login</Buttons>
        </div>
      </Container>
    </header>
  );
}
