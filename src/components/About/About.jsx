import Image from "next/image";
import React from "react";
import about from "../../../public/about-desktop-1x.jpg";

export default function About() {
  return (
    <div className="w-full flex  desktop:max-w-desktop mx-auto desktop:items-center gap-x-6 bg-white text-black tablet:pt-10 tablet:pb-[10px] desktop:pt-0 desktop:pb-0">
      <Image
        src={about}
        alt="about img"
        className="w-1/2 max-w-[322px] h-[363px] desktop:max-w-[588px] desktop:h-[663px] bg-slate-600 ml-10 desktop:ml-[120px] mt-0 desktop:mt-[120px] shrink-0"
      />
      <div className="w-1/2 items-start desktop:max-w-[588px]">
        <h2 className="flex text-4xl desktop:text-5xl font-bold not-italic justify-start mb-8">
          About our story
        </h2>
        <ul className="text-sm tablet:text-base ">
          <li className="mb-6">
            <p className="">
              Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone. We embarked on our journey with a small group of
              enthusiasts who were impressed by the potential hidden in the
              world of online shopping.
            </p>
          </li>
          <li className="mb-6 invisible mobile:absolute tablet:visible desktop:visible">
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business. We see our role in
              facilitating access to a wide range of products from the global
              Amazon network, helping our customers achieve their goals.
            </p>
          </li>
          <li className="invisible tablet:absolute desktop:visible ">
            <p className="">
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
