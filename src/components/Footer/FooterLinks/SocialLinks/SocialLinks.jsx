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
        <a
          href="https://www.facebook.com/profile.php?id=61551773562170"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/ppcwarehouses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstIcon />
        </a>
      </li>
    </ul>
  );
}
