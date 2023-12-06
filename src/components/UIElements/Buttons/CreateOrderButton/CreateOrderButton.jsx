import Link from "next/link";
import React from "react";
export default function CreateOrderButton({}) {
  return (
    <>
      <button className="mt-4 bg-black text-white font-bold py-4 px-3 rounded flex justify-center items-center w-44 h-12">
        <Link href="/dashboard/order" passHref>
          Create an order
        </Link>
      </button>
    </>
  );
}
