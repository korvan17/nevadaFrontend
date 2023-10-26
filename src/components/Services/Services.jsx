"use client";
import React from "react";
import Image from "next/image";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// SwiperCore.use([Pagination, Navigation]);

export default function Services() {
  return (
    <section className="py-mobile md:pb-0 lg:pt-desktop  " id="services">
      <div className="container">
        <h2 className="mb-[48px] text-4xl lg:text-5xl font-bold sm:text-center md:text-left">
          Our Services
        </h2>
        <div className="block md:hidden lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="w-full h-[449px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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
                  Refers to the practice of purchasing goods or products in
                  large quantities from manufacturers or distributors at a lower
                  price per unit
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[449px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4  p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mr-[20px] md:mb-[24px] lg:mb-0 lg:mr-[24px]">
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[449px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mr-[20px] lg:mr-[24px]">
                <Image
                  src="/delivery-desktop-1x.png"
                  width={172}
                  height={172}
                  alt="icon"
                  className="mx-auto"
                />
                <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
                  Online arbitration
                </h3>
                <p className="text-base">
                  resolving disputes through online arbitration procedures,
                  providing a convenient and efficient alternative to
                  traditional dispute resolution methods
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[449px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
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
                  specifications and requirements for sellers interested in
                  using FBM to process and ship their products through the
                  platform
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <ul className="flex-wrap gap-[20px] lg:gap-[24px] hidden md:flex  ">
          <li className="  md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)]   p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
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
              quantities from manufacturers or distributors at a lower price per
              unit
            </p>
          </li>
          <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
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
              Walmart &apos; s counterpart Private Label referring to retailers
              selling products under their own brand
            </p>
          </li>
          <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)]  p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
            <Image
              src="/delivery-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Online arbitration
            </h3>
            <p className="text-base">
              resolving disputes through online arbitration procedures,
              providing a convenient and efficient alternative to traditional
              dispute resolution methods
            </p>
          </li>
          <li className=" md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
            <Image
              src="/support-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">FBM</h3>
            <p className="text-base">
              provides manuals, instructions, and information on specifications
              and requirements for sellers interested in using FBM to process
              and ship their products through the platform
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
