"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll/modules";

export default function FooterCommonList({ data, hover = false }) {
  const pathName = usePathname();
  const dashboardPage = pathName === "/dashboard";

  const scrollToSection = (id) => {
    const topPosition = document.getElementById(id).offsetTop - 120;
    return scroll.scrollTo(topPosition);
  };

  return (
    <ul>
      {data.map(({ label, id }, inx, arr) => {
        const lastEl = inx === arr.length;
        return (
          <li
            key={inx}
            className={`${!lastEl ? "mb-[8px]" : ""} ${
              hover ? "hover:underline" : ""
            }`}
          >
            {dashboardPage ? (
              <Link href={`/#${id}`}>{label}</Link>
            ) : (
              <ScrollLink
                onClick={() => scrollToSection(id)}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                delay={0}
                to={id}
              >
                {label}
              </ScrollLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}
