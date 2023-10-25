import Image from "next/image";
import React from "react";
import about from "../../../public/images/about-lg-1x.jpg";
import about2 from "../../../public/images/about2-sm-1x.jpg";

export default function About() {
  return (
    <div className="bg-white text-black w-full relative flex px-4 pt-[19px] pb-8 mx-auto max-w-screen-sm overflow-hidden md:max-w-screen-md md:flex md:flex-row-reverse md:justify-between md:pt-20 md:pb-[10px] md:px-10 lg:max-w-screen-lg lg:flex-row lg:h-[783px] lg:items-center lg:gap-x-6 lg:px-[120px] lg:pb-0 lg:pt-[120px] lg:-z-20">
      <Image
        src={about}
        alt="about img"
        className="block absolute w-full rounded-xl top-[79px] bg-slate-600 max-w-[210px] md:static md:max-w-[322px] md:h-[363px] md:mt-[68px] lg:mt-0 lg:max-w-[588px] lg:h-[663px] "
      />
      <svg
        className="absolute visible bottom-[40px] right-[-52px] rotate-[273deg] md:visible md:rotate-[140deg] md:top-[98px] md:left-[-85px] lg:rotate-0 lg:top-[183px] lg:left-[645px] lg:-z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="175"
        height="93"
        viewBox="0 0 175 93"
        fill="none"
      >
        <path
          d="M10.3343 26.8156L10.6518 26.022L10.8299 25.186C12.0169 19.6162 14.3217 16.4141 17.2165 14.3445C20.3462 12.1068 25.1994 10.4653 32.6024 10.0839C47.7007 9.3062 69.5066 13.9062 97.8324 22.6476L98.805 22.9478L99.8181 23.0458C106.046 23.6484 112.406 23.1823 118.149 22.613C119.833 22.446 121.449 22.2727 123.018 22.1044C127.097 21.6666 130.859 21.2629 134.683 21.0948C144.967 20.6427 152.201 22.142 157.829 28.0188C161.052 31.3833 163.66 37.4001 164.185 44.9303C164.701 52.3328 163.11 60.1646 159.234 66.605C155.461 72.8725 149.386 78.0929 140.134 80.5416C131.025 82.9522 118.159 82.8388 100.632 77.2433C92.7589 70.5275 82.2904 65.1066 71.9317 60.4586C65.3197 57.4918 57.9716 54.5192 50.962 51.6836C46.3809 49.8303 41.9444 48.0356 37.9526 46.3392C27.0868 41.7217 18.7634 37.5453 13.8119 33.3802C11.4126 31.3619 10.4892 29.8978 10.1724 29.0774C9.97885 28.576 9.8528 28.0195 10.3343 26.8156Z"
          stroke="#1478CE"
          strokeWidth="20"
        />
      </svg>

      <Image
        src={about2}
        alt="about2 img"
        className="w-full absolute rounded-xl bottom-[85px] right-4 max-w-[210px] md:hidden md:absolute"
      />
      <div className="flex flex-col w-full max-w-[480px] h-[500px]  md:max-w-[322px] lg:max-w-[588px]">
        <h2 className="z-20 flex text-4xl leading-none mb-6 justify-center md:mb-8 lg:text-5xl font-bold not-italic md:justify-start ">
          About our story
        </h2>
        <ul className="z-20 text-sm leading-normal md:text-base">
          <li className="flex gap-x-[24px]  flex-row-reverse md:contents lg:contents">
            {/* inline-grid grid-cols-2 gap-4 grid-flow-col */}
            <p className="max-w-[210px] md:contents lg:contents">
              Our Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone.{" "}
            </p>
            <p className="max-w-[210px] pt-[282px] md:contents lg:contents">
              We embarked on our journey with a small group of enthusiasts who
              were impressed by the potential hidden in the world of online
              shopping.
            </p>
          </li>
          <li className="collapse absolute md:static md:visible md:block md:mt-6 lg:mb-6 lg:max-w-[588px]">
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business.{""}
              <span className="md:invisible md:absolute lg:visible lg:static">
                We see our role in facilitating access to a wide range of
                products from the global Amazon network, helping our customers
                achieve their goals.
              </span>
            </p>
          </li>
          <li className="collapse absolute md:overflow-hidden md:absolute md:block lg:visible lg:max-w-[588px]">
            <p>
              Today, we take pride in being a trusted bridge between individuals
              and businesses worldwide and the vast world of Amazon. Our mission
              is to continue simplifying e-commerce, making it accessible and
              hassle-free for all, while remaining dedicated to our core values
              of integrity, innovation, and customer satisfaction
            </p>
          </li>
        </ul>
        <svg
          className="absolute invisible md:invisible lg:visible lg:bottom-[114px] lg:right-[-61px]"
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="93"
          viewBox="0 0 175 93"
          fill="none"
        >
          <path
            d="M163.945 26.8156L163.628 26.022L163.449 25.186C162.262 19.6162 159.958 16.4141 157.063 14.3445C153.933 12.1068 149.08 10.4653 141.677 10.0839C126.579 9.3062 104.773 13.9062 76.4469 22.6476L75.4743 22.9478L74.4612 23.0458C68.2332 23.6484 61.8731 23.1823 56.13 22.613C54.4459 22.446 52.8304 22.2727 51.2618 22.1044C47.1821 21.6666 43.42 21.2629 39.5963 21.0948C29.3124 20.6427 22.0785 22.142 16.45 28.0188C13.2277 31.3833 10.6193 37.4001 10.0945 44.9303C9.57854 52.3328 11.1693 60.1646 15.0457 66.605C18.8181 72.8725 24.8929 78.0929 34.1458 80.5416C43.2542 82.9522 56.12 82.8388 73.6473 77.2433C81.5204 70.5275 91.9889 65.1066 102.348 60.4586C108.96 57.4918 116.308 54.5192 123.317 51.6836C127.898 49.8303 132.335 48.0356 136.327 46.3392C147.192 41.7217 155.516 37.5453 160.467 33.3802C162.867 31.3619 163.79 29.8978 164.107 29.0774C164.3 28.576 164.426 28.0195 163.945 26.8156Z"
            stroke="#1478CE"
            strokeWidth="20"
          />
        </svg>
      </div>
    </div>
  );
}
