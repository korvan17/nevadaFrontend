"use client";
import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";
import { Buttons } from "../UIElements";
import SwiperPrice from "./SwiperPrice";
import { BasicModal } from "../index.js";
import PricingGetQuoteModal from "../Modals/PricingGetQuoteModal/PricingGetQuoteModal";

export default function Pricing() {
  const [showModalPricing, setShowModalPricing] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleModalPricing = () => {
    setShowModalPricing(!showModalPricing);
  };

  return (
    <section className="py-mobile md:pb-0 lg:pt-desktop" id="pricing">
      <div className="container">
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="relative">
            <Image
              src="/pricing-mob-ellipse.png"
              alt="pricing-mobile"
              height={104}
              width={206}
              className="absolute lg:hidden right-[66px] top-[14px] -z-20"
            />
            <Image
              src="/ellips-pricing.png"
              alt="Ellipse Pricing"
              height={129}
              width={65}
              className="absolute hidden lg:block left-[481px] top-[55px] -z-20 w-auto h-auto"
            />
            <Image
              className="absolute hidden lg:block top-[1020px] left-[254px] w-auto h-auto -z-20"
              src="/ellips-pricing-bottom.png"
              alt="Ellipse Bottom"
              width={70}
              height={139}
            />
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="mb-[48px] text-4xl lg:text-5xl font-bold sm:text-center md:text-left">
            Our Pricing
          </h2>
        </div>

        <div
          className="sm:block md:hidden lg:hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <SwiperPrice
            toggleModalPricing={toggleModalPricing}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
          />
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <ul className="flex-wrap gap-[20px] md:mb-[12px] lg:gap-[24px] lg:mb-[12px] hidden md:flex">
            <li className="md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto">
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
            </li>
            <li className="md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto">
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
            </li>
            <li className="md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto">
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

              <Buttons
                toggleModal={() => {
                  setSelectedTitle("Wholesale");
                  toggleModalPricing();
                }}
              >
                Get a Quote
              </Buttons>
            </li>
            <li className="md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto">
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
            </li>
          </ul>
          <p className="mb-[12px] text-xs text-captionalGreyLight md:w-[664px] md:mb-[25px] md:text-base lg:w-[741px] lg:text-base ">
            Base price* - Explanation: &ldquo;At Prime Preparation Center, we
            offer volume-based pricing, which means that the more you purchase
            or the larger your order quantity, the lower the unit price becomes.
            This approach rewards you for your commitment to our
            services.&ldquo;
          </p>
        </div>
        <div
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[100%] py-[12px] px-[8px] w-[100%] rounded-lg bg-darkBlue text-captionalWhite  md:py-[24px] md:px-[12px] lg:w-[100%] lg:h-[100%] lg:py-[32px] lg:px-[52px]">
            <h3 className="mb-[12px] text-lg font-bold md:mb-[20px]">
              Additional services
            </h3>

            <div className="mb-[24px] lg:mb-[32px] overflow-x-auto">
              <table className="table-auto w-[1096px]">
                <thead className="text-right whitespace-nowrap">
                  <tr className="">
                    <td></td>
                    <td className="font-bold">Receiving</td>
                    <td className="font-bold">Inspection</td>
                    <td className="font-bold">Forwarding</td>
                    <td className="font-bold">Storage</td>
                    <td className="font-bold">Utilization</td>
                    <td className="font-bold">Removals</td>
                    <td className="font-bold">Pictures 3pcs</td>
                  </tr>
                </thead>
                <tbody className="text-right leading-[200%]">
                  <tr>
                    <td className="w-[190px] text-left">
                      Box (24x18x12) 49 lbs max
                    </td>
                    <td>$1</td>
                    <td className="">$1</td>
                    <td className="">$5</td>
                    <td className="">$5</td>
                    <td className="">$2</td>
                    <td className="">$2</td>
                    <td className="">$1</td>
                  </tr>
                  <tr>
                    <td className="text-left">Pallet (48x40x72)</td>
                    <td>$25</td>
                    <td className="">$1</td>
                    <td className="">$25</td>
                    <td className="">$35</td>
                    <td className="">$20</td>
                    <td className="">$20</td>
                    <td className="">$1</td>
                  </tr>
                  <tr>
                    <td className="text-left">PL Container (20ft)</td>
                    <td>$300</td>
                    <td className="">$100</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                  </tr>
                  <tr>
                    <td className="text-left">FL Container (40ft)</td>
                    <td>$600</td>
                    <td className="">$150</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                    <td className="">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-[28px] md:mb-[24px] lg:flex lg:items-center lg:justify-between lg:mb-[32px]">
              <p className="text-lg font-bold mb-[8px] lg:text-base lg:font-semibold">
                HazMat, Fragile, Oversize
              </p>
              <p className="w-[320px] text-xs font-normal md:w-[640px] md:text-sm md:font-semibold lg:w-[860px] lg:text-base">
                Hazmat items incur additional costs due to strict safety
                regulations and specialized handing requirements. Fragile items
                come with extra fees to ensure meticulous handling and the use
                of protective materials to prevent damage during transit.
                Oversized items result in higher charges because they demand
                more space and specialized equipment for secure transportation
                and storage
              </p>
            </div>
            <h3 className="mb-[24px] text-lg font-bold md:mb-[8px]">
              Packing services
            </h3>
            <div className="overflow-x-auto">
              <ul className="flex gap-[16px] w-[800px] text-base font-semibold md:w-[655px] md:justify-between md:flex-wrap md:gap-y-[24px] lg:w-[100%] lg:flex-nowrap">
                <li className="w-[270px] md:w-[193px]">
                  <table className="table-auto w-[100%]">
                    <tbody>
                      <tr className="">
                        <td>Bubble bag/wrap</td>
                        <td className="text-right">$0,35</td>
                      </tr>
                      <tr className="">
                        <td>Polybag</td>
                        <td className="text-right">$0,30</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li className="w-[136px]">
                  <table className="table-auto w-[100%]">
                    <tbody>
                      <tr>
                        <td className="">Palletizing</td>
                        <td className="text-right">$25</td>
                      </tr>
                      <tr>
                        <td className="">Box 10x8x6</td>
                        <td className="text-right">$1</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li className="w-[136px]">
                  <table className="table-auto w-[100%]">
                    <tbody>
                      <tr>
                        <td className="">Box 10x10x10</td>
                        <td className="text-right">$2</td>
                      </tr>
                      <tr>
                        <td className="">Box 24x14x6</td>
                        <td className="text-right">$3</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li className="w-[200px] md:w-[187px]">
                  <table className="table-auto w-[100%]">
                    <tbody>
                      <tr>
                        <td className="">Box 24x18x12</td>
                        <td className="text-right">$4</td>
                      </tr>
                      <tr>
                        <td className="">
                          Additional
                          <span className="text-xs font-normal">
                            /min 1 hour
                          </span>
                        </td>
                        <td className="text-right">$40</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showModalPricing && (
        <BasicModal
          modalIsOpen={showModalPricing}
          closeModal={toggleModalPricing}
          widthLg="771px"
          heightLg="740px"
          widthMd="723px"
          heightMd="887px"
          widthSm="343px"
          heightSm="90vh"
        >
          <PricingGetQuoteModal
            modalIsOpen={showModalPricing}
            closeModal={toggleModalPricing}
            selectedTitle={selectedTitle}
          />
        </BasicModal>
      )}
    </section>
  );
}
