import Link from "next/link";
import React from "react";
export default function FooterCommonList({ data }) {
  return (
    <ul>
      {/* it may better to use inx as key insted href */}
      {data.map(({ title, href }, inx, arr) => {
        const lastEl = inx === arr.length;
        return (
          <li key={inx} className={!lastEl ? "mb-[8px]" : ""}>
            <Link href={href}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
