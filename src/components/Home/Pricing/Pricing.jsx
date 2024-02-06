"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import "swiper/css";
import SwiperPrice from "./SwiperPrice";

import { Buttons } from "@/components/UIElements";
import { BasicModal } from "@/components";
import PricingGetQuoteModal from "@/components/Modals/PricingGetQuoteModal/PricingGetQuoteModal";
import {
  fetchPriceContainers,
  fetchPricePackings,
  fetchPriceProducts,
} from "../../../../services/api";
import Loading from "@/app/loading";

export default function Pricing() {
  const [showModalPricing, setShowModalPricing] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [productPricing, setProductPricing] = useState(null);
  const [pricingContainers, setPricingContainers] = useState(null);
  const [pricePackings, setPricePackings] = useState(null);
  useEffect(() => {
    const loadinData = async () => {
      try {
        const prodPricingData = await fetchPriceProducts();
        const pricingContainersData = await fetchPriceContainers();
        const pricePackingsData = await fetchPricePackings();
        setPricePackings(pricePackingsData);
        setProductPricing(prodPricingData);
        setPricingContainers(pricingContainersData);
      } catch (error) {
        console.log("productPricing error", error);
      }
    };
    loadinData();
  }, []);

  const formatNumber = (num) => {
    return parseFloat(num).toFixed(2).replace(".", ",");
  };

  const toggleModalPricing = () => {
    setShowModalPricing(!showModalPricing);
  };
  console.log(pricePackings);
  return (
    <section id="pricing" className="py-mobile md:pb-0 lg:pt-desktop">
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
          {productPricing ? (
            <ul className="flex-wrap gap-[20px] md:mb-[12px] lg:gap-[24px] lg:mb-[12px] hidden md:flex">
              {productPricing.map(
                ({
                  id,
                  attributes: { deposit, minUnits, set, single, title },
                }) => {
                  const formatSet = formatNumber(set);
                  const formatSingle = formatNumber(single);
                  return (
                    <li
                      key={id}
                      className="md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-72px)/4)] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto"
                    >
                      <h3 className="mt-[8px] mb-[12px] text-lg font-bold">
                        {title}
                      </h3>
                      <p className="text-base font-bold">Deposit ${deposit}</p>
                      <p className="text-base font-bold mb-[16px]">
                        From {minUnits} units/month
                      </p>
                      <p className="text-base mb-[16px]">*Base price in USD</p>
                      <ul className="mb-[16px] flex justify-between">
                        <li>
                          <p className="text-base font-bold">Single:</p>
                          <p>${formatSingle}</p>
                        </li>
                        <li className="">
                          <p className="text-base font-bold">Set/Bundle:</p>
                          <p>${formatSet}</p>
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
                  );
                }
              )}
            </ul>
          ) : (
            <Loading />
          )}
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
                {pricingContainers ? (
                  <tbody className="text-right leading-[200%]">
                    {pricingContainers.map(
                      ({
                        id,
                        attributes: {
                          title,
                          utilization,
                          storage,
                          removals,
                          receiving,
                          pictures,
                          inspection,
                          forwarding,
                        },
                      }) => {
                        return (
                          <tr key={id}>
                            <td className="w-[190px] text-left">{title}</td>
                            <td>{`${receiving ? "$" + receiving : "-"}`}</td>
                            <td className="">
                              {`${inspection ? "$" + inspection : "-"}`}
                            </td>
                            <td className="">
                              {`${forwarding ? "$" + forwarding : "-"}`}
                            </td>
                            <td className="">{`${
                              storage ? "$" + storage : "-"
                            }`}</td>
                            <td className="">
                              {`${utilization ? "$" + utilization : "-"}`}
                            </td>
                            <td className="">{`${
                              removals ? "$" + removals : "-"
                            }`}</td>
                            <td className="">{`${
                              pictures ? "$" + pictures : "-"
                            }`}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                ) : (
                  <Loading />
                )}
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
              <ul
                className="flex gap-[50px] w-[800px] text-base font-semibold md:w-[655px] md:gap-[70px] lg:gap-x-[101px] flex-nowrap 
              
            items-start 
              
              lg:flex-wrap lg:items-center  md:gap-y-[14px] lg:w-[100%] "
              >
                {pricePackings &&
                  pricePackings.map(({ attributes: { title, price } }) => {
                    return (
                      <li
                        key={title}
                        className="flex md:gap-[40px] gap-[30px] lg:items-center w-[270px] md:w-[193px] items-start  "
                      >
                        <p>{title}</p>
                        <p className="text-right">${price}</p>
                      </li>
                    );
                  })}
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
