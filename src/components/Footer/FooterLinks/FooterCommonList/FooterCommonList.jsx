"use client";
import React from "react";

import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll/modules";

export default function FooterCommonList({ data, hover = false }) {
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
            <ScrollLink
              onClick={() => scrollToSection(id)}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={100}
              delay={0}
            >
              {label}
            </ScrollLink>
          </li>
        );
      })}
    </ul>
  );
}
