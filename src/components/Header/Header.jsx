import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#000A11] text-[#FAFCF8] text-sm[16px] width=[100%] p-[16px] flex justify-between ">
      <nav className="flex w-[1201px] items-center justify-between mr-[24px]">
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
      <Link
        className="bg-[#F8C951] pt-[16px] pb-[16px] text-sm[16px] text-[#FAFCF8] font-bold uppercase w-[179px] text-center"
        href="/login"
      >
        Login
      </Link>
    </header>
  );
}
