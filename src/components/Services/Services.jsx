import Image from "next/image";
import { Container, Section } from "../LayoutComponents";

export default function Services() {
  return (
    <Section sectionName={"services"} id="#services">
      <Container>
        <h2 className="mb-[48px] text-5xl font-bold">Our Services</h2>
        <ul className="flex">
          <li className="mr-[24px] pt-[20px] pb-[24px] px-[20px] rounded-[12px] bg-darkBlue text-captionalWhite text-center">
            <Image
              src="/procurement-desktop-1x.png"
              width={234}
              height={234}
              alt="icon"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Product Procurement
            </h3>
            <p className="text-base">
              We simplify Amazon product ordering with seamless transactions and
              reliable delivery
            </p>
          </li>
          <li className="mr-[24px] pt-[20px] pb-[24px] px-[24px] rounded-[12px] bg-darkBlue text-captionalWhite text-center">
            <Image
              src="/accessibility-desktop-1x.png"
              width={234}
              height={234}
              alt="icon"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Global <br></br> Accessibility
            </h3>
            <p className="text-base">
              Access Amazon`s extensive product range, regardless of your
              location or business size
            </p>
          </li>
          <li className="mr-[24px] pt-[20px] pb-[24px] px-[24px] rounded-[12px] bg-darkBlue text-captionalWhite text-center">
            <Image
              src="/delivery-desktop-1x.png"
              width={234}
              height={234}
              alt="icon"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Efficient <br></br>Shipping
            </h3>
            <p className="text-base">
              We simplify Amazon product ordering with seamless transactions and
              reliable delivery
            </p>
          </li>
          <li className="mr-[24px] pt-[20px] pb-[24px] px-[24px] rounded-[12px] bg-darkBlue text-captionalWhite text-center">
            <Image
              src="/support-desktop-1x.png"
              width={234}
              height={234}
              alt="icon"
            />
            <h3 className="mt-[24px] mb-[12px] text-2xl font-bold">
              Customer <br></br>Support
            </h3>
            <p className="text-base">
              We simplify Amazon product ordering with seamless transactions and
              reliable delivery
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
