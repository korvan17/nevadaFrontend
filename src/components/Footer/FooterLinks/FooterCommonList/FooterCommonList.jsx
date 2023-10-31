import Link from "next/link";
import React from "react";
export default function FooterCommonList({ data, hover = false }) {
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
            <Link href={`#${id}`}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
