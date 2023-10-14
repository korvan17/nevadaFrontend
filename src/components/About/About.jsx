import Image from "next/image";
import React from "react";
import about from "../../../public/images/about-desktop-1x.jpg";
import about2 from "../../../public/images/about2-mobile-1x.jpg";

export default function About() {
  return (
    <div className="tablet:justify-between w-full flex desktop:relative tablet:flex-row-reverse desktop:flex-row mobile:max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-screen-desktop mx-auto desktop:items-center desktop:gap-x-6 bg-white text-black tablet:pt-20 tablet:pb-[10px] tablet:px-10 desktop:px-[120px] desktop:pb-0 desktop:pt-[120px]">
      <Image
        src={about}
        alt="about img"
        className="flex desktop:ml-0 w-full max-w-[164px] h-[199px] tablet:max-w-[322px] tablet:h-[363px] desktop:max-w-[588px] desktop:h-[663px] bg-slate-600  tablet:mt-[68px]"
      />
      <Image
        src={about2}
        alt="about2 img"
        className="w-full max-w-[164px] h-[199px] tablet:invisible tablet:absolute"
      />
      <div className="flex flex-col  w-full max-w-[164px] tablet:max-w-[322px] desktop:max-w-[588px]">
        <h2 className="flex text-4xl desktop:text-5xl font-bold not-italic justify-start mb-8">
          About our story
        </h2>
        <ul className="text-sm tablet:text-base">
          <li className="mb-6">
            <p className="">
              Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone.We embarked on our journey with a small group of
              enthusiasts who were impressed by the potential hidden in the
              world of online shopping.
            </p>
          </li>
          <li className="collapse absolute tablet:static tablet:visible desktop:mb-6 desktop:max-w-[588px]">
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business.{""}
              <span className="tablet:invisible tablet:absolute desktop:visible desktop:static">
                We see our role in facilitating access to a wide range of
                products from the global Amazon network, helping our customers
                achieve their goals.
              </span>
            </p>
          </li>
          <li className="collapse absolute tablet:collapse tablet:absolute desktop:visible desktop:max-w-[588px]">
            <p>
              Today, we take pride in being a trusted bridge between individuals
              and businesses worldwide and the vast world of Amazon. Our mission
              is to continue simplifying e-commerce, making it accessible and
              hassle-free for all, while remaining dedicated to our core values
              of integrity, innovation, and customer satisfaction
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
