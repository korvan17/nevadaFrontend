import { faq } from "@/content";
import React from "react";
import Image from "next/image";
import { FaqButton } from "@/components/UIElements";
export default function Faq() {
  return (
    <section className="py-mobile md:py-desktop" id="faq">
      <div className="container">
        <div className="relative">
          <Image
            className="absolute right-[16px] top-[550px] 
            
            -z-20 md:right-[40px] md:top-[30px] lg:right-[0] lg:top-[40px]
            "
            src="/faq-right-elipse.png"
            alt="faq-ellipse-right"
            width={175}
            height={92}
          />
          <Image
            className="hidden md:block absolute -z-20 left-[-70px] top-[496px]"
            src="/faq-tab-left-ellipse.png"
            alt="faq-ellipse-left"
            width={175}
            height={92}
          />
        </div>
        {/* <Image src={cat} alt="cat" width={500} height={500} placeholder="blur" /> */}
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <h2 className="text-4xl lg:text-5xl font-bold mr-auto">
            Frequently Asked Questions
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <ul className="mt-[48px]">
            {Object.keys(faq).map((item) => (
              <li
                key={item}
                className="flex flex-col justify-center bg-captionalGreyLight border-inherit border-solid border transition-colors duration-500 hover:bg-[#757575] "
              >
                <FaqButton item={item} faq={faq} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
