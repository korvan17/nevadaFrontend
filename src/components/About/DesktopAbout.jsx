import React from "react";
import Image from "next/image";

function DesktopAbout() {
  return (
    <section className="hidden pb-0  lg:block lg:pt-desktop">
      <div className="container">
        <div className="relative flex gap-col-6 justify-center -z-10">
          <Image
            src="/faq-tab-left-ellipse.png"
            alt="circle-element-left"
            width={175}
            height={92}
            className="absolute -z-10 top-origin-left opacity-100 top-16"
          />

          <Image
            src="/faq-right-elipse.png"
            alt="circle-element-right"
            width={175}
            height={92}
            className="absolute bottom-7 right-0 -z-10"
          />

          <div className="flex flex-row gap-6 justify-center mb-0">
            <Image
              src="/about-main.png"
              alt="about img"
              width={588}
              height={663}
              className="flex mt-0 max-w-[588px] h-auto"
            />

            <ul className="w-1/2 text-base">
              <h2
                className="leading-9 text-opacity-20 font-bold 
                not-italic mb-8 text-5xl justify-start pt-[136px] pl-0"
              >
                About our story
              </h2>
              <li>
                <p>
                  Our story is a journey fueled by a passion for e-commerce and
                  a commitment to simplifying the process of order preparation
                  and shipping for every e-commerce seller. We embarked on this
                  journey with a small group of enthusiasts who were inspired by
                  the hidden potential within the realm of online shopping.
                </p>
              </li>
              <li className="my-6">
                <p>
                  Right from the outset, our primary goal was to provide the
                  best service, ensure streamlined logistics in e-commerce,
                  regardless of your location, and always remain accessible. We
                  envision our role as facilitating access to online
                  marketplaces such as Amazon, eBay, Etsy, Lowe&apos;s, Walmart,
                  Wayfair, and more, assisting our customers in achieving their
                  goals.
                </p>
              </li>
              <li>
                <p>
                  Today, we take pride in serving as a reliable bridge between
                  individuals and businesses worldwide. Our mission is to remain
                  adaptable and to continually simplify e-commerce, making it
                  accessible and trouble-free for everyone.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesktopAbout;
