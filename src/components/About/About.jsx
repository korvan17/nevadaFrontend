import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex items-center gap-6 bg-white text-black">
      <Image
        src=""
        alt="about img"
        className="w-1/2 max-w-[588px] h-[663px] bg-slate-600 ml-[120px] mt-[120px]"
      />
      <div className="w-1/2 max-w-[588px]">
        <h2 className="flex text-5xl font-bold not-italic justify-center mb-8">
          About our story
        </h2>
        <ul className="">
          <li className="mb-6">
            <p className="">
              Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone. We embarked on our journey with a small group of
              enthusiasts who were impressed by the potential hidden in the
              world of online shopping.
            </p>
          </li>
          <li className="mb-12 ">
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business. We see our role in
              facilitating access to a wide range of products from the global
              Amazon network, helping our customers achieve their goals.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
