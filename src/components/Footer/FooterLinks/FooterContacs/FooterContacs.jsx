import React from "react";

export default function FooterContacs() {
  return (
    <ul>
      <li className="mb-[8px]">
        <a target="_blank" href="companyname@gmail.com">
          <b className="font-semibold	">Write to us at the email address:</b>
          companyname@gmail.com
        </a>
      </li>
      <li>
        <a href="tel:+48 000 000 000">
          <b className="font-semibold">Phone:</b> +48 000 000 000
        </a>
      </li>
    </ul>
  );
}
