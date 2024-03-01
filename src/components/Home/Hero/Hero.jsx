import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-[78px] pb-[89px] md:pt-[47px] md:pb-[0px] lg:pt-[169px] lg:pb-[0px]"
    >
      <div
        data-aos="fade-down-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          src="/hero-mobile-nd.png"
          alt="hero-mobile"
          height={101}
          width={375}
          className="lg:hidden md:hidden w-full"
          priority
        />
      </div>

      <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
        <Image
          src="/hero-tablet.png"
          alt="hero-tablet"
          height={147}
          width={744}
          className="hidden md:block lg:hidden w-full"
          priority
        />
      </div>
      <div
        className="relative"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          className="hidden md:block lg:hidden absolute md:top-[350px] 
        md:right-[0px] md:-z-30 
        w-auto h-auto"
          src="/ellipse-tab-right.png"
          alt="Ellipse-Right"
          width={104}
          height={206}
          priority
        />
      </div>

      <div
        className="relative"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          className="hidden md:block lg:hidden  absolute top-[-10px] left-[0px] md:-z-30 w-auto h-auto"
          src="/ellipse-tab-left.png"
          alt="Ellipsetab-Left"
          width={154}
          height={224}
          priority
        />
      </div>

      <div
        className="relative"
        data-aos="fade-up-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          className="lg:hidden  md:hidden hidden absolute top-[-10px] left-[0]  w-auto h-auto -z-30"
          src="/ellipsemobile.png"
          alt="Ellipsemobile"
          width={97}
          height={209}
          priority
        />
      </div>

      <div className="container">
        <div
          className="lg:flex lg:gap-[43px] lg:basis-2/4 
        
        lg:justify-center"
        >
          <div>
            <div
              data-aos="fade-down-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div
                className="text-center 
                mr-auto ml-auto w-auto
                lg:mt-[34px] lg:mb-[278px] lg:w-[560px] 
                md:mt-[34px] md:mb-[178px] md:w-auto
                "
              >
                <h1
                  className="uppercase font-bold text-center
                              leading-[26px] text-[20px]
                              sm:leading-[34px] sm:text-[26px]
                              md:leading-[46px] md:text-[38px]
                              lg:leading-[58px] lg:text-[35px] 
                              mt-[20px]               
                              sm:mt-[40px]
                              md:mt-[40px]
                              lg:mt-[40px]"
                >
                  <span>
                    Maximize Your E-Commerce Efficiency and Sales Today
                  </span>{" "}
                  <br /> <span>with Our Optimized Warehouse Solutions!</span>
                </h1>
                <h3
                  className="font-normal
                            leading-[16px] text-[16px]
                            sm:leading-[38px] sm:text-[20px]
                            md:leading-[38px] md:text-[26px] 
                            lg:leading-[44px] lg:text-[24px]"
                >
                  Elevate your E-Commerce operations with our cutting-edge
                  warehouse located in Las Vegas, Nevada, designed to streamline
                  your logistics, minimize overhead, and boost customer
                  satisfaction. Embrace the future of e-commerce with us and
                  make warehouse complexities a thing
                  <br /> of the past. Transform your business today!
                </h3>
              </div>
            </div>
          </div>
          <div className="relative -z-20 lg:basis-2/4 lg:pt-[38px] w-[320px] sm:w-[400px] md-[688px]">
            <div
              className="relative"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                className="hidden lg:block lg:absolute top-[-80px] right-[20px] -z-30   w-auto h-auto"
                src="/ellipse6.png"
                alt="Ellipse6"
                width={328}
                height={258}
                priority
              />
            </div>

            <div
              className="relative"
              data-aos="fade-down-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                className="hidden lg:block lg:absolute top-[410px] right-[572px] -z-30 h-auto"
                src="/ellipse7.png"
                alt="Ellipse7"
                width={104}
                height={206}
                priority
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src="/hero-desktop.png"
                alt="hero-img"
                width={664}
                height={740}
                className="hidden lg:block  lg:top-[114px] lg:right-[671px] lg:z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
