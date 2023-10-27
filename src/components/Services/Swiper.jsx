import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperServices() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={15} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div className="px-[50px] h-[449px] py-[24px] rounded-[12px] bg-darkBlue text-captionalWhite text-center">
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
            <p className="text-base max-w-[242px] fs-[16px]  mx-auto">
              Refers to the practice of purchasing goods or products in large
              quantities from manufacturers or distributors at a lower price per
              unit
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mb-4 px-[50px] h-[449px] py-[24px] rounded-lg bg-darkBlue text-captionalWhite text-center">
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
            <p className="text-base max-w-[242px] fs-[16px]  mx-auto">
              FBA involving Amazon &apos; s fulfillment services, FBW being
              Walmart &apos; s counterpart Private Label referring to retailers
              selling products under their own brand
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mb-4 px-[50px] h-[449px] py-[24px] rounded-lg bg-darkBlue text-captionalWhite text-center">
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
            <p className="text-base max-w-[242px] fs-[16px]  mx-auto">
            Is a business strategy where individuals or businesses purchase products, typically from physical retail stores, at a lower price than they can sell them for on online marketplaces like Amazon.

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-4 px-[50px] h-[449px] py-[24px] rounded-lg bg-darkBlue text-captionalWhite text-center">
            <Image
              src="/support-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">FBM</h3>
            <p className="text-base max-w-[242px] fs-[16px] mx-auto">
              provides manuals, instructions, and information on specifications
              and requirements for sellers interested in using FBM to process
              and ship their products through the platform
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
