import Link from "next/link";
import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";

const links = [
  {
    label: "About us",
    id: "#about",
  },
  {
    label: "Services",
    id: "#services",
  },
  {
    label: "Pricing",
    id: "#pricing",
  },
  {
    label: "FAQ",
    id: "#faq",
  },
  {
    label: "Contacts us",
    id: "#contacts",
  },
];

export default function Header() {
  return (
    <header className="bg-mainBlack text-mainWhite text-sm[16px] width=[100%] pt-[16px] pb-[16px] ">
      <Container>
        <div className="flex">
          <nav className="flex w-[1200px] items-center justify-between mr-[24px]">
            <a href="/">Logo svg or img</a>
            <ul className="flex items-center gap-[24px]">
              {links.map(({ label, id }) => (
                <li key={id}>
                  <a
                    className="hover:underline transition-all ease-out cursor-pointer"
                    id={id}
                    href={id}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Buttons login={true}>Login</Buttons>
        </div>
      </Container>
    </header>
  );
}
