import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative -z-10 py-mobile md:pb-0 lg:pt-desktop"
    >
      <div className="container ">
        <div
          className="relative
          flex
          md:flex md:flex-row-reverse md:basis-[calc(100%-20px)/2] md:gap-5 md:justify-center
          lg:flex lg:flex-row lg:basis-[calc(100%-24px)/2] lg:gap-6 lg:justify-center "
        >
          <Image
            src="/about-main.png"
            alt="about img"
            width={588}
            height={663}
            // block
            className="absolute rounded-xl 
            flex max-w-[210px] h-[236px]
            top-[60px] left-0 bg-slate-600 
            md:static md:max-w-[322px] md:h-[363px] md:mt-[68px] 
            lg:flex lg:mt-0 lg:max-w-[588px] lg:h-auto "
          />
          <Image
            src="/about-2.png"
            alt="about2 img"
            // max-w-[210px] h-[236px]
            width={210}
            height={236}
            // block
            className="absolute rounded-xl flex
            max-w-[210px] h-[236px]
            bottom-[20px] right-0 md:hidden"
          />
          <div
            className="
            relative flex flex-col w-full max-w-[480px] h-[500px] 
            md lg:max-w-full"
          >
            <Image
              src="/circle-element-left.png"
              alt="circle-element-left"
              width={175}
              height={92}
              className="absolute w-auto h-auto
              opacity-0 
              md:-z-10 md:top-origin-left md:block
              md:top-[17px] md:left-[-125px] md:transform scale-x-[-1]
              
              lg:transform-none lg:top-[63px] lg:left-[-88px] lg:-z-20"
            />
            <h2
              className="flex text-4xl leading-none mb-6 justify-center 
              md:mb-8 lg:text-5xl font-bold not-italic md:justify-start lg:pt-[135px]"
            >
              About our story
            </h2>
            <ul className="md:text-base">
              <li className="flex flex-row-reverse items-start gap-x-[28px] md:contents lg:contents">
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
              <li
                className="absolute 
                md:static md:visible md:block md:mt-6
                lg:mb-6 lg:max-w-[588px]"
              >
                <p className="visible max-w-[210px] line-clamp-2 md:max-w-full md:line-clamp-none">
                  Right from the outset, our primary goal was to provide the
                  best service, ensure streamlined logistics in e-commerce,
                  regardless of your location, and always remain accessible.{""}
                  <span className="collapse md:invisible md:absolute lg:visible lg:static">
                    We envision our role as facilitating access to online
                    marketplaces such as Amazon, eBay, Etsy, Lowe&apos;s,
                    Walmart, Wayfair, and more, assisting our customers in
                    achieving their goals.
                  </span>
                </p>
              </li>
              <li
                className="collapse absolute 
              md:overflow-hidden md:absolute md:block
              lg:visible lg:max-w-[588px]"
              >
                <p>
                  Today, we take pride in serving as a reliable bridge between
                  individuals and businesses worldwide. Our mission is to remain
                  adaptable and to continually simplify e-commerce, making it
                  accessible and trouble-free for everyone.
                </p>
              </li>
            </ul>
            <Image
              src="/circle-element-right.png"
              alt="circle-element-right"
              width={175}
              height={92}
              className="absolute w-auto h-auto 
              origin-top-left rotate-90 transform scale-y-[-1]
              md:invisible bottom-[56px] right-[-110px] -z-10
              lg:right-[-175px] lg:bottom-[-61px] lg:visible lg:transform-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
