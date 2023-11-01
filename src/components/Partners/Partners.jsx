import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className=" hidden md:block pt-[120px] pb-[120px]" id="Partners">
      <div className="container">
        <h2 className="text-[36px] leading-[36px] lg:text-5xl font-bold mr-auto mb-[8px]">
          E-commerce platforms we are working with
        </h2>
        <p className="md:w-[664px] lg:w-[937px] text-rgba(0, 0, 0, 0.20)  text-[18px] lg:text-[24px] font-normal leading-[110%] lg:leading-[24px]   mb-[32px] lg:mb-[48px]">
          We collaborate with leading e-commerce platforms that offer the best
          opportunities for your business.{" "}
        </p>
        <div className="">
          <ul className="flex gap-[20px] ">
            <li className="">
              <Image
                src="/ebay-logo-tab.png"
                alt="logo"
                height={91}
                width={237}
              />
            </li>
            <li className="">
              <Image
                src="/walmart-logo-tab.png"
                alt="logo"
                height={77}
                width={322}
              />
            </li>
            <li className="">
              <Image
                src="/amazon-logo-tab.png"
                alt="logo"
                height={69}
                width={237}
              />
            </li>
            <li className="">
              <Image
                src="/wayfair-logo-tab.png"
                alt="logo"
                height={83}
                width={322}
              />
            </li>
            <li className="">
              <Image
                src="/etsy-logo-tab.png"
                alt="logo"
                height={91}
                width={182}
              />
            </li>
            <li className="">
              <Image
                src="/lowes-logo-tab.png"
                alt="logo"
                height={91}
                width={189}
              />
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-captionBlue pt-[48px]"></div>
      </div>
    </section>
  );
}
