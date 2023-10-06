import Link from "next/link";

export default function FooterCommonList({ data }) {
  return (
    <ul>
      {/* it may better to use inx as key insted href */}
      {data.map(({ title, href }) => {
        return (
          <li key={href}>
            <Link href={href}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
