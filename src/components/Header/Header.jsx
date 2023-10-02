import Link from "next/link";

export default function Header() {
  return (
    <header>
      <a href="/">Logo svg or img</a>
      <ul>
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
      <Link href="/login">Login</Link>
    </header>
  );
}
