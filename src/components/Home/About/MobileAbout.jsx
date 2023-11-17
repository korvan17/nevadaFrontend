import React from "react";
import Image from "next/image";

function MobileAbout() {
  return (
    <section className="md:hidden">
      <div className="container">
        <div className="relative">
          <div className="aosWrapper">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2
              className="flex text-4xl leading-none 
            mb-6 justify-center font-bold not-italic"
            >
              About our story
            </h2>
          </div>
          </div>


          <ul className="flex gap-4 ">
            <li className="w-1/2 ">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/about-main.png"
                  alt="about img"
                  width={164}
                  height={199}
                  className="w-full mb-3"
                />
                <p className="line-clamp-[8] overflow-hidden text-ellipsis">
                  We embarked on this journey with a small group of enthusiasts
                  who were inspired by the hidden potential within the realm of
                  online shopping. Right from the outset, our primary goal was
                  to provide the best service, ensure streamlined logistics in
                  e-commerce, regardlessof your location, and always remain
                  accessible.
                </p>
              </div>
            </li>
            <li className="w-1/2">
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p className="line-clamp-[7] overflow-hidden text-ellipsis">
                  Our story is a journey fueled by a passion for e-commerce and
                  a commitment to simplifying the process of order preparation
                  and shipping for every e-commerce seller.
                </p>
                <Image
                  src="/about-2.png"
                  alt="about2 img"
                  width={164}
                  height={199}
                  className="w-full mt-3"
                />
              </div>
            </li>
          </ul>
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <Image
              src="/circle-element-about-mobile.png"
              alt="circle-element-left"
              width={92}
              height={175}
              className="absolute bottom-[-44px] right-[-18px] -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAbout;
