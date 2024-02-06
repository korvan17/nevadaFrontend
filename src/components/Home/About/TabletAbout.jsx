import React from "react";
import Image from "next/image";

function TabletAbout() {
  return (
    <div className="hidden md:flex md:relative md:pt-20 lg:hidden">
      <div className="container">
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <h2
            className="flex leading-9 text-4xl text-opacity-20
          font-bold not-italic mb-8"
          >
            About our story
          </h2>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          className="relative"
        >
          <Image
            src="/faq-tab-left-ellipse.png"
            alt="circle-element-left"
            width={175}
            height={92}
            className="absolute -z-10 top-origin-left opacity-100 top-[-50px] left-[-150px] transform scale-x-[-1]"
          />
        </div>

        <div className="flex gap-5 justify-center">
          <div className="flex flex-row-reverse gap-5 justify-center mb-[10px]">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src="/about-main.png"
                alt="about img"
                width={588}
                height={663}
                className="block rounded-xl max-w-[334px] h-auto"
              />
            </div>

            <div
              className="w-1/2 text-base"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <ul>
                <li className="flex flex-row-reverse items-start gap-x-[28px]">
                  <p className="max-w-[322px] contents">
                    Our story is a journey fueled by a passion for e-commerce
                    and a commitment to simplifying the process of order
                    preparation and shipping for every e-commerce seller. We
                    embarked on this journey with a small group of enthusiasts
                    who were inspired by the hidden potential within the realm
                    of online shopping.
                  </p>
                </li>
                <li className="static visible block mt-6">
                  <p className="w-full max-w-full">
                    Right from the outset, our primary goal was to provide the
                    best service, ensure streamlined logistics in e-commerce,
                    regardless of your location, and always remain accessible.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletAbout;
