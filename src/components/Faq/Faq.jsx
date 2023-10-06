import FaqButton from "../FaqButton/FaqButton";

// import cat from "../../images/cat.jpg";
import Container from "@/components/Container/Container";
import Section from "../Section/Section";
import { faq } from "@/content";

export default function Faq() {
  return (
    <Section sectionName={"faq"} id="#faq">
      <Container>
        {/* <Image src={cat} alt="cat" width={500} height={500} placeholder="blur" /> */}
        <h2 className="text-5xl font-bold mr-auto">
          Frequently Asked Questions
        </h2>
        <ul className="mt-[48px]">
          {Object.keys(faq).map((item) => (
            <li
              key={item}
              className="flex flex-col justify-center bg-faqGrey border-inherit border-solid border transition-colors duration-500 hover:bg-[#757575] "
            >
              <FaqButton item={item} faq={faq} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
