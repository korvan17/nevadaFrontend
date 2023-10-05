import Image from "next/image";
import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";
import Section from "../Section/Section";

export default function Hero() {
  return (
    <Section top={"[147px]"}>
      <Container>
        <h1>Do You Engage in Amazon Sales?</h1>
        <h3>Let us optimize your shipping process</h3>
        {/* <Image src="/" alt="hero img" width="120" /> */}
      </Container>
    </Section>
  );
}
