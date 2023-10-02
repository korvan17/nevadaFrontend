import Buttons from "../Buttons/Buttons";

export default function Footer() {
  return (
    <div>
      <div>
        <a href="/">logo</a>
        <form action="">
          <input type="email" />
          <Buttons>Send</Buttons>
        </form>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
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
    </div>
  );
}
