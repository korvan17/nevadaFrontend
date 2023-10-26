import React from "react";
import { faq } from "@/content";
import { FaqButton } from "../UIElements";

export default function Faq() {
  return (
    <section className="py-mobile md:py-desktop" id="faq">
      <div className="container">
        {/* <Image src={cat} alt="cat" width={500} height={500} placeholder="blur" /> */}
        <h2 className="text-4xl lg:text-5xl font-bold mr-auto">
          Frequently Asked Questions
        </h2>
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
    </section>
  );
}
