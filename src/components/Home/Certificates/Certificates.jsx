import Image from "next/image";
import React from "react";
export default function Certificates() {
  return (
    <section className="hidden md:block" id="Certificates">
      <div className="container">
        <h2 className="text-[36px] leading-[36px] lg:text-5xl font-bold mr-auto mb-[8px]">
          We are Amazon and Ysell Partners
        </h2>
        <p
          className="md:w-[664px] lg:w-[937px] text-rgba(0, 0, 0, 0.20)  text-[18px] lg:text-[24px] font-normal 
        
        leading-[110%] lg:leading-[24px]   mb-[32px] lg:mb-[48px]"
        >
          We are proud to be affiliated with Amazon and Ysell, two industry
          giants in the world
          <br /> of e-commerce.
        </p>
        <div className="">
          <ul className="flex items-center">
            <li>
              <Image
                src="/ysell-logo.png"
                alt="logo"
                height={73}
                width={164}
                className=""
              />
            </li>
            <li>
              <Image
                src="/amazonspn-logo.png"
                alt="logo"
                height={73}
                width={282}
                className=""
              />
            </li>
          </ul>
          <div className="border-b-2 border-captionBlue pt-[48px]"></div>
        </div>
      </div>
    </section>
  );
}
