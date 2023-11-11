"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
export default function SliderPartners() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 0 }}
        speed={10000}
        loop={true}
        className="mySwiper sample-slider"
      >
        <SwiperSlide>
          <Image src="/ebay-logo.png" alt="logo" height={61} width={237} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/walmart-logo.png" alt="logo" height={61} width={322} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/amazon-logo.png" alt="logo" height={86} width={206} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/wayfair-logo.png" alt="logo" height={61} width={322} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/etsy-logo.png" alt="logo" height={61} width={182} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/lowes-logo.png" alt="logo" height={61} width={189} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
