import React from "react";
import {
  InstIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/Icons";


export default function SocialLinks() {
  return (
    <ul className="flex justify-between items-center max-w-[132px]">
      <li>
        <a href="">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="">
          <TelegramIcon />
        </a>
      </li>
      <li>
        <a href="">
          <InstIcon />
        </a>
      </li>
    </ul>
  );
}
