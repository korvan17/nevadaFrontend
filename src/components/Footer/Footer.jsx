import { links } from "@/content";
import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";

export default function Footer() {
  return (
    <Container>
      <footer id="#contacts">
        <div>
          <a href="/">logo</a>
          <form action="">
            <input type="email" />
            <Buttons>Send</Buttons>
          </form>
        </div>
        <ul>
          {links.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <p>Help</p>
        <ul>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Partner Help Center</a>
          </li>
          <li>
            <a href="">Dispute Resolution</a>
          </li>
          <li>
            <a href="">Terms and Conditions</a>
          </li>
        </ul>
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
      </footer>
    </Container>
  );
}
