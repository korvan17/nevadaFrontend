"use client";
import React, { useEffect, useState } from "react";
import { InstIcon, FacebookIcon, TelegramIcon } from "@/components/Icons";
import { fetchContacts } from "../../../../../services/api";
import Loading from "@/app/loading";

export default function SocialLinks() {
  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    const loadSocialLinks = async () => {
      try {
        const links = await fetchContacts();
        setSocialLinks(links);
      } catch (error) {
        console.error("Fetching social links failed", error);
      }
    };
    loadSocialLinks();
  }, []);

  return (
    <ul className="flex justify-between items-center max-w-[132px]">
      {socialLinks ? (
        <>
          <li>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </li>

          <li>
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </li>

          <li>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstIcon />
            </a>
          </li>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </ul>
  );
}
