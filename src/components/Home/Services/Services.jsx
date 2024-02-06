"use client";
import React from "react";
import Image from "next/image";
import SwiperServices from "./Swiper";
import "swiper/css";

export default function Services() {
  return (
    <section id="services" className="pb-20 md:pb-0 lg:pt-desktop">
      <div className="container">
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="mb-[48px] text-[36px] lg:text-[48px] font-bold text-center md:text-left">
            Our Services
          </h2>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="relative">
            <Image
              src="/ellipse-services.png"
              alt="ellipse-services"
              width={206}
              height={104}
              className="absolute hidden md:block md:right-[60px] md:bottom-[-30px]  lg:right-[188px] lg:top-[-20] -z-20"
            />
          </div>
        </div>

        <div
          className="block md:hidden lg:hidden"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <SwiperServices />
        </div>

        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <ul className="flex-wrap gap-[20px] lg:gap-[24px] hidden md:flex ">
            <li className="  md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] p-6 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
              <Image
                src="/procurement-desktop-1x.png"
                width={172}
                height={172}
                alt="icon"
                className="mx-auto"
              />
              <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
                Wholesale
              </h3>
              <p className="text-base">
                Refers to the practice of purchasing goods or products in large
                quantities from manufacturers or distributors at a lower price
                per unit
              </p>
            </li>
            <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] p-6 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
              <Image
                src="/accessibility-desktop-1x.png"
                width={172}
                height={172}
                alt="icon"
                className="mx-auto"
              />
              <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
                FBA, FBW, Private Label
              </h3>
              <p className="text-base">
                FBA involving Amazon &apos; s fulfillment services, FBW being
                Walmart &apos; s counterpart Private Label referring to
                retailers selling products under their own brand
              </p>
            </li>
            <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)]  p-6 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
              <Image
                src="/delivery-desktop-1x.png"
                width={172}
                height={172}
                alt="icon"
                className="mx-auto"
              />
              <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
                Retail Arbitrage
              </h3>
              <p className="text-base">
                Is a business strategy where individuals or businesses purchase
                products, typically from physical retail stores, at a lower
                price than they can sell them for on online marketplaces like
                Amazon.
              </p>
            </li>
            <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] p-6 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
              <Image
                src="/support-desktop-1x.png"
                width={172}
                height={172}
                alt="icon"
                className="mx-auto"
              />
              <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">FBM</h3>
              <p className="text-base">
                provides manuals, instructions, and information on
                specifications and requirements for sellers interested in using
                FBM to process and ship their products through the platform
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
