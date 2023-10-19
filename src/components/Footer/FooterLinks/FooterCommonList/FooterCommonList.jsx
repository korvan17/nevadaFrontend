import Link from "next/link";

export default function FooterCommonList({ data }) {
  return (
    <ul>
      {/* it may better to use inx as key insted href */}
      {data.map(({ label, id }, inx, arr) => {
        const lastEl = inx === arr.length;
        return (
          <li key={inx} className={!lastEl ? "mb-[8px]" : ""}>
            <Link href={`#${id}`}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
