import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="py-mobile md:py-desktop" id="Partners">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-bold mr-auto mb-[34px]">
          E-commerce platforms we are working with
        </h2>
        <div className="">
          <ul className="flex gap-6">
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
            <li>
              <Image
                src="/hero-mobile-nd.png"
                alt="logo"
                height={91}
                width={282}
                className=""
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
