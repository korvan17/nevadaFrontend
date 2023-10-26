// ghdjjdk
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative -z-10 py-mobile md:pb-0 lg:pt-desktop"
    >
      <Image
        src="/circle-element-right.png"
        alt="circle-element-right"
        width={114}
        height={61}
        className="absolute w-auto h-auto invisible lg:right-0 lg:bottom-[61px] lg:visible"
      />

      {/* px-4 pt-[19px] pb-8 mx-auto md:pt-20 md:pb-[10px] md:px-10 lg:px-[120px]
      lg:pb-0 lg:pt-[120px] */}
      {/* w-full relative flex md:flex md:flex-row-reverse md:justify-between lg:flex-row lg:h-[783px] lg:items-center lg:gap-x-6 */}
      <div className="container ">
        <div className="lg:flex lg:flex-basis-2/4 lg:gap-6 lg:justify-center ">
          <Image
            src="/about-main.png"
            alt="about img"
            width={588}
            height={663}
            className="block absolute w-auto h-auto rounded-xl top-[79px] left-[20px] bg-slate-600 max-w-[210px] md:static md:max-w-[322px] md:h-[363px] md:mt-[68px] lg:flex lg:mt-0 lg:max-w-[588px] lg:h-auto "
          />
          <Image
            src="/about-2.png"
            alt="about2 img"
            // max-w-[210px] h-[236px]
            width={210}
            height={236}
            className=" block absolute rounded-xl top-[254px] left-[254px] md:hidden"
          />

          {/* <svg
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
      </svg> */}

          {/* bottom-[85px] right-4 */}
          <div className="relative flex flex-col w-full max-w-[480px] h-[500px] md:max-w-[322px] lg:max-w-[588px]">
            <Image
              src="/circle-element-left.png"
              alt="circle-element-left"
              width={175}
              height={93}
              className="absolute w-auto h-auto lg:top-[63px] lg:left-[-88px] lg:-z-20"
            />
            <h2 className="flex text-4xl leading-none mb-6 justify-center md:mb-8 lg:text-5xl font-bold not-italic md:justify-start lg:pt-[135px]">
              About our story
            </h2>
            <ul className="md:text-base">
              <li className="flex flex-row-reverse md:contents lg:contents">
                <p className="max-w-[210px] md:contents lg:contents">
                  Our story is a journey fueled by a passion for e-commerce and
                  a commitment to simplifying the process of order preparation
                  and shipping for every e-commerce seller.{" "}
                </p>
                <p className="max-w-[210px] pt-[260px] md:contents lg:contents">
                  We embarked on this journey with a small group of enthusiasts
                  who were inspired by the hidden potential within the realm of
                  online shopping.
                </p>
              </li>
              <li className="collapse absolute md:static md:visible md:block md:mt-6 lg:mb-6 lg:max-w-[588px]">
                <p>
                  Right from the outset, our primary goal was to provide the
                  best service, ensure streamlined logistics in e-commerce,
                  regardless of your location, and always remain accessible.{""}
                  <span className="md:invisible md:absolute lg:visible lg:static">
                    We envision our role as facilitating access to online
                    marketplaces such as Amazon, eBay, Etsy, Lowe's, Walmart,
                    Wayfair, and more, assisting our customers in achieving
                    their goals.
                  </span>
                </p>
              </li>
              <li className="collapse absolute md:overflow-hidden md:absolute md:block lg:visible lg:max-w-[588px]">
                <p>
                  Today, we take pride in serving as a reliable bridge between
                  individuals and businesses worldwide. Our mission is to remain
                  adaptable and to continually simplify e-commerce, making it
                  accessible and trouble-free for everyone.
                </p>
              </li>
            </ul>
            {/* <svg
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
        </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
}
