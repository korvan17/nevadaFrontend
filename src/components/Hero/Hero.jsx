import Image from "next/image";
// import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";
import Section from "../Section/Section";

export default function Hero() {
  return (
    <Section sectionName={"hero"}>
      <Container>
        <div className="flex gap-[43px] basis-2/4">
          <div class="text-center mt-[234px] mb-[278px] w-[552px]">
            <h1 className="text-[56px] font-bold">
              <span className="ml-[12px]">DO YOU ENGAGE</span>
              <span> IN AMAZON SALES?</span>
            </h1>
            <h3 className="text-[24px] font-normal">
              Let us optimize your shipping process
            </h3>
          </div>
          <div className="relative -z-20 basis-2/4 pt-[38px]">
            <Image
              src="/hero-desktop.png"
              alt="hero img"
              width={664}
              height={740}
              className=" top-[114px] right-[671px] z-10"
            />
            <Image
              className="absolute top-[-21px] right-[0] -z-30"
              src="/Ellipse6.png"
              alt="Ellipse6"
              width={258}
              height={258}
            />
            <Image
              className="absolute top-[428px] right-[550px] -z-30"
              src="/Ellipse7.png"
              alt="Ellipse7"
              width={127}
              height={206}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
