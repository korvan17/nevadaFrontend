import Image from "next/image";
import React from "react";
import SliderPartners from "./SliderPartners";

export default function Partners() {
  return (
    <section className=" hidden md:block pt-[120px] pb-[120px]">
      <div className="container">
        <div
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-[36px] leading-[36px] lg:text-5xl font-bold mr-auto mb-[8px]">
            E-commerce platforms we are working with
          </h2>
          <p
            className="md:w-[664px] lg:w-[937px] text-rgba(0, 0, 0, 0.20)  text-[18px] 
        
        lg:text-[24px] font-normal leading-[110%] 
        
        lg:leading-[24px]   mb-[32px] lg:mb-[48px]"
          >
            We collaborate with leading e-commerce platforms that offer the best
            opportunities for your business.{" "}
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <SliderPartners />
          <div className="border-b-2 border-captionBlue pt-[48px]"></div>
        </div>
      </div>
    </section>
  );
}
