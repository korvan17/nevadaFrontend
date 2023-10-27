import Image from "next/image";
import React from "react";
export default function Certificates() {
  return (
    <section className="py-mobile md:py-desktop" id="Certificates">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-bold mr-auto mb-[10px]">
          We are Amazon and Ysell Partners
        </h2>
        <div className="">
          <ul className="flex gap-6">
            <li>
              <Image
                src="/hero-tablet.png"
                alt="logo"
                height={129}
                width={359}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-tablet.png"
                alt="logo"
                height={129}
                width={359}
                className=""
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
