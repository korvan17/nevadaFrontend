import Image from "next/image";

export default function Services() {
  return (
    <section className="py-mobile md:pb-0 lg:pt-desktop" id="services">
      <div className="container">
        <h2 className="mb-[48px] text-5xl font-bold sm:text-center md:text-left">
          Our Services
        </h2>
        <ul className="flex flex-wrap">
          <li className="w-full h-[449px] sm:w-[full] md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mr-[20px] md:mb-[24px] lg:mb-0 lg:mr-[24px]">
            <Image
              src="/procurement-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Wholesale
            </h3>
            <p className="text-base">
              Refers to the practice of purchasing goods or products in large
              quantities from manufacturers or distributors at a lower price per
              unit
            </p>
          </li>
          <li className="w-full h-[449px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mb-[24px] lg:mb-0 lg:mr-[24px]">
            <Image
              src="/accessibility-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              FBA, FBW, Private Label
            </h3>
            <p className="text-base">
              FBA involving Amazon &apos; s fulfillment services, FBW being
              Walmart &apos; s counterpart Private Label referring to retailers
              selling products under their own brand
            </p>
          </li>
          <li className="w-full h-[449px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto md:mr-[20px] lg:mr-[24px]">
            <Image
              src="/delivery-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Online arbitration
            </h3>
            <p className="text-base">
              resolving disputes through online arbitration procedures,
              providing a convenient and efficient alternative to traditional
              dispute resolution methods
            </p>
          </li>
          <li className="w-full h-[449px] sm:w-full md:w-[322px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 p-4 rounded-lg bg-darkBlue text-captionalWhite text-center overflow-x-auto">
            <Image
              src="/support-desktop-1x.png"
              width={172}
              height={172}
              alt="icon"
              className="mx-auto"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">FBM</h3>
            <p className="text-base">
              provides manuals, instructions, and information on specifications
              and requirements for sellers interested in using FBM to process
              and ship their products through the platform
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
