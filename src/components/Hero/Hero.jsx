import Image from "next/image";
import GetQuoteButton from "../GetQueteButton/GetQuoteButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-[78px] pb-[151px] md:pt-[47px] md:pb-[0px] lg:pt-[139px] lg:pb-[0px]"
    >
      <GetQuoteButton />
      
      <Image
        src="/hero-mobile-nd.png"
        alt="hero-mobile"
        height={101}
        width={375}
        className="lg:hidden md:hidden w-full"
        priority
      />
      <Image
        src="/hero-tablet.png"
        alt="hero-tablet"
        height={147}
        width={744}
        className="hidden md:block lg:hidden w-full"
        priority
      />
      <Image
        className="hidden md:block lg:hidden absolute md:top-[557px] md:right-[0px] md:-z-30 w-auto h-auto"
        src="/ellipse-tab-right.png"
        alt="Ellipse Right"
        width={84}
        height={20}
        priority
      />
      <Image
        className="hidden md:block lg:hidden  absolute top-[177px] left-[0px] md:-z-30 w-auto h-auto"
        src="/ellipse-tab-left.png"
        alt="Ellipsetab Left"
        width={154}
        height={224}
        priority
      />

      <Image
        className="lg:hidden  md:hidden absolute top-[155px] left-[0]  w-auto h-auto -z-30"
        src="/ellipsemobile.png"
        alt="Ellipsemobile"
        width={97}
        height={209}
        priority
      />
      <div className="container">
        <div className="lg:flex lg:gap-[43px] lg:basis-2/4 lg:justify-center">
          <div>
            <div
              className="text-center lg:mt-[234px] lg:mb-[278px] lg:w-[552px] w-[344px] md:max-w-[552px]
             mr-auto ml-auto"
            >
              <h1 className="uppercase leading-[50px] lg:leading-[80px] lg:text-[56px] font-bold text-[36px]  text-center md:mt-[180px] mt-[126px]">
                <span>Are you actively engaged</span> <br />{" "}
                <span>in e-commerce sales?</span>
              </h1>
              <h3 className="leading-[16px] md:leading-[16px] lg:text-[24px] text-[16px] font-normal md:mb-[232px]">
                Let us optimize your shipping process
              </h3>
            </div>
          </div>
          <div className="relative -z-20 lg:basis-2/4 lg:pt-[38px] w-[320px] sm:w-[400px] md-[688px]">
            <Image
              src="/hero-desktop.png"
              alt="hero-img"
              width={664}
              height={740}
              className="hidden lg:block  lg:top-[114px] lg:right-[671px] lg:z-10"
              priority
            />
            <Image
              className="hidden lg:block lg:absolute top-[-21px] right-[20px] -z-30  h-auto"
              src="/ellipse6.png"
              alt="Ellipse6"
              width={328}
              height={258}
              priority
            />
            <Image
              className="hidden lg:block lg:absolute top-[467px] right-[595px] -z-30 h-auto"
              src="/ellipse7.png"
              alt="Ellipse7"
              width={134}
              height={226}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
