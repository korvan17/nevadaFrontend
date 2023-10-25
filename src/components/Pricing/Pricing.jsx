"use client";
import React from "react";
import Image from "next/image";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Buttons } from "../UIElements";

// SwiperCore.use([Pagination, Navigation]);

export default function Pricing() {
  return (
    <section lassName="py-mobile md:pb-0 lg:pt-desktop" id="pricing">
      <div className="container">
        <h2 className="mt-[120px] mb-[48px] text-4xl lg:text-5xl font-bold sm:text-center md:text-left">
          Our Pricing
        </h2>

        <div className="sm:block md:hidden lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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

                <Buttons>Get a Quote</Buttons>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
                <h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
                  Online arbitration
                </h3>
                <p className="text-base font-bold text-mainBlack">
                  Deposit $69
                </p>
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

                <Buttons>Get a Quote</Buttons>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
                <h3 className="mt-[8px] mb-[12px] text-lg font-bold">
                  Wholesale
                </h3>
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

                <Buttons>Get a Quote</Buttons>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
                <h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
                  FBM
                </h3>
                <p className="text-base font-bold text-mainBlack">
                  Deposit $69
                </p>
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

                <Buttons>Get a Quote</Buttons>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <ul className="hidden sm:hidden md:flex gap-y-5 lg:flex flex-wrap mb-2">
          <li className="w-full h-[316px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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

            <Buttons>Get a Quote</Buttons>
          </li>
          <li className="w-full h-[316px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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

            <Buttons>Get a Quote</Buttons>
          </li>
          <li className="w-full h-[316px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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

            <Buttons>Get a Quote</Buttons>
          </li>
          <li className="w-full h-[316px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
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

            <Buttons>Get a Quote</Buttons>
          </li>
        </ul>
        <p className="sm:mb-4 md:w-[640px] md:text-base lg:w-[741px] lg:text-base text-xs text-captionalGreyLight">
          Base price* - Explanation: "At Prime Preparation Center, we offer
          volume-based pricing, which means that the more you purchase or the
          larger your order quantity, the lower the unit price becomes. This
          approach rewards you for your commitment to our services."
        </p>
        <div className="w-full h-[516px] sm:w-full sm:h-[516px] md:w-[664px] md:h-[770px] sm:py-[12px] sm:px-[8px] md:py-[24px] md:px-[12px] lg:w-[1200px] lg:h-[520px] mb-4 sm:mb-4 md:mb-0 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px] lg:py-[32px] lg:px-[52px]">
          <h3 className="mb-[12px] text-lg font-bold">Additional services</h3>

          <table class="table-auto md:w-[100%] sm:mb-[24px] md:mb-[170px] lg:w-[100%] lg:mb-[32px]">
            <thead className="text-right">
              <tr>
                <td></td>
                <td>Receiving</td>
                <td className="sm:hidden md:inline-block">Inspection</td>
                <td className="sm:hidden md:block">Forwarding</td>
                <td className="sm:hidden md:block">Storage</td>
                <td className="md:hidden">Utilization</td>
                <td className="md:hidden">Removals</td>
                <td className="md:hidden">Pictures 3pcs</td>
              </tr>
            </thead>
            <tbody className="text-right leading-[200%]">
              <tr>
                <td className="text-left">Box (24x18x12) 49 lbs max</td>
                <td>$1</td>
                <td className="sm:hidden">$1</td>
                <td className="sm:hidden">$5</td>
                <td className="sm:hidden">$5</td>
                <td className="md:hidden">$2</td>
                <td className="md:hidden">$2</td>
                <td className="md:hidden">$1</td>
              </tr>
              <tr>
                <td className="text-left">Pallet (48x40x72)</td>
                <td>$25</td>
                <td className="sm:hidden">$1</td>
                <td className="sm:hidden">$25</td>
                <td className="sm:hidden">$35</td>
                <td className="md:hidden">$20</td>
                <td className="md:hidden">$20</td>
                <td className="md:hidden">$1</td>
              </tr>
              <tr>
                <td className="text-left">PL Container (20ft)</td>
                <td>$300</td>
                <td className="sm:hidden">$100</td>
                <td className="sm:hidden">-</td>
                <td className="sm:hidden">-</td>
                <td className="md:hidden">-</td>
                <td className="md:hidden">-</td>
                <td className="md:hidden">-</td>
              </tr>
              <tr>
                <td className="text-left">FL Container (40ft)</td>
                <td>$600</td>
                <td className="sm:hidden">$150</td>
                <td className="sm:hidden">-</td>
                <td className="sm:hidden">-</td>
                <td className="md:hidden">-</td>
                <td className="md:hidden">-</td>
                <td className="md:hidden">-</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center sm:flex-wrap md:flex-wrap md:mb-[24px]">
            <p className="md: mb-[8px]">HazMat, Fragile, Oversize</p>
            <p className="lg: w-[866px] text-base">
              Hazmat items incur additional costs due to strict safety
              regulations and specialized handing requirements. Fragile items
              come with extra fees to ensure meticulous handling and the use of
              protective materials to prevent damage during transit. Oversized
              items result in higher charges because they demand more space and
              specialized equipment for secure transportation and storage
            </p>
          </div>
          <h3 className="mt-[8px] mb-[12px] text-lg font-bold">
            Packing services
          </h3>
          <ul className="flex justify-between md:flex-wrap md:gap-[24px]">
            <li className="md:w-[193px] lg:w-[202px]">
              <table className="lg:w-[100%]">
                <tr>
                  <td>Bubble bag/wrap</td>
                  <td>$0,35</td>
                </tr>
                <tr>
                  <td>Polybag</td>
                  <td>$0,30</td>
                </tr>
              </table>
            </li>
            <li className="w-[136px]">
              <table className="lg:w-[100%] ">
                <tr>
                  <td className="text-left">Palletizing</td>
                  <td className="text-right">$25</td>
                </tr>
                <tr>
                  <td className="text-left">Box 10x8x6</td>
                  <td className="text-right">$1</td>
                </tr>
              </table>
            </li>
            <li className="w-[138px]">
              <table className="lg:w-[100%]">
                <tr>
                  <td className="text-left">Box 10x10x10</td>
                  <td className="text-right">$2</td>
                </tr>
                <tr>
                  <td className="text-left">Box 24x14x6</td>
                  <td className="text-right">$3</td>
                </tr>
              </table>
            </li>
            <li className="w-[218px]">
              <table className="lg:w-[100%]">
                <tr>
                  <td className="text-left">Box 24x18x12</td>
                  <td className="text-right">$4</td>
                </tr>
                <tr>
                  <td className="text-left">Additional (min 1 hour)</td>
                  <td className="text-right">$40</td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
