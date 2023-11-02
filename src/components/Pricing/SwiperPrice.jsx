import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Buttons } from "../UIElements";

import { Pagination } from "swiper/modules";

export default function SwiperPrice({
  toggleModalPricing,
  setSelectedTitle,
  selectedTitle,
}) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={15}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite md:mr-[20px] lg:mb-0 lg:mr-[24px]">
            <h3 className="mt-[8px] mb-[12px] text-lg font-bold">
              FBA, FBW, Private Label
            </h3>
            <p className="text-base font-bold">Deposit $69</p>
            <p className="text-base font-bold mb-[16px]">
              From 250 units/month
            </p>
            <p className="text-base mb-[16px]">*Base price in USD</p>
            <ul className="mb-[16px] flex justify-between">
              <li>
                <p className="text-base font-bold">Single:</p>
                <p>$0,75</p>
              </li>
              <li className="">
                <p className="text-base font-bold">Set/Bundle:</p>
                <p>$0,90</p>
              </li>
            </ul>

            <Buttons
              toggleModal={() => {
                setSelectedTitle("FBA, FBW, Private Label");
                toggleModalPricing();
              }}
            >
              Get a Quote
            </Buttons>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite md:mr-[20px] lg:mb-0 lg:mr-[24px]">
            <h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
              Online arbitration
            </h3>
            <p className="text-base font-bold text-mainBlack">Deposit $69</p>
            <p className="text-base font-bold text-mainBlack mb-[16px]">
              From 300 units/month
            </p>
            <p className="text-base text-mainBlack mb-[16px]">
              *Base price in USD
            </p>
            <ul className="mb-[16px] flex justify-between text-mainBlack">
              <li>
                <p className="text-base font-bold">Single:</p>
                <p>$0,85</p>
              </li>
              <li className="">
                <p className="text-base font-bold">Set/Bundle:</p>
                <p>$1,00</p>
              </li>
            </ul>

            <Buttons
              toggleModal={() => {
                setSelectedTitle("Online arbitration");
                toggleModalPricing();
              }}
            >
              Get a Quote
            </Buttons>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite md:mr-[20px] lg:mb-0 lg:mr-[24px]">
            <h3 className="mt-[8px] mb-[12px] text-lg font-bold">Wholesale</h3>
            <p className="text-base font-bold">Deposit $69</p>
            <p className="text-base font-bold mb-[16px]">
              From 1000 units/month
            </p>
            <p className="text-base mb-[16px]">*Base price in USD</p>
            <ul className="mb-[16px] flex justify-between">
              <li>
                <p className="text-base font-bold">Single:</p>
                <p>$0,60</p>
              </li>
              <li className="">
                <p className="text-base font-bold">Set/Bundle:</p>
                <p>$0,75</p>
              </li>
            </ul>

            <Buttons
              toggleModal={() => {
                setSelectedTitle("Wholesale");
                toggleModalPricing();
              }}
            >
              Get a Quote
            </Buttons>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite md:mr-[20px] lg:mb-0 lg:mr-[24px]">
            <h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
              FBM
            </h3>
            <p className="text-base font-bold text-mainBlack">Deposit $69</p>
            <p className="text-base font-bold text-mainBlack mb-[16px]">
              From 20 units/month
            </p>
            <p className="text-base text-mainBlack mb-[16px]">
              *Base price in USD
            </p>
            <ul className="mb-[16px] flex justify-between text-mainBlack">
              <li>
                <p className="text-base font-bold">Single:</p>
                <p>$2,00</p>
              </li>
              <li className="">
                <p className="text-base font-bold">Set/Bundle:</p>
                <p>$3,00</p>
              </li>
            </ul>

            <Buttons
              toggleModal={() => {
                setSelectedTitle("FBM");
                toggleModalPricing();
              }}
            >
              Get a Quote
            </Buttons>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
