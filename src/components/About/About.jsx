import Image from "next/image";
import Container from "@/components/Container/Container";
import React from "react";
import Section from "../Section/Section";

export default function About() {
  return (
    <Section sectionName={"about"} id="#about">
      <Container>
        {/* <Image src="" alt="about img" /> */}
        <h2 id="about">About our story</h2>
        <ul>
          <li>
            <p>
              Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone. We embarked on our journey with a small group of
              enthusiasts who were impressed by the potential hidden in the
              world of online shopping.
            </p>
          </li>
          <li>
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business. We see our role in
              facilitating access to a wide range of products from the global
              Amazon network, helping our customers achieve their goals.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
