// import Image from "next/image";
import FaqButton from "../FaqButton/FaqButton";
// import cat from "../../images/cat.jpg";
import Container from "@/components/Container/Container";

const faq = {
  "What Amazon FBA prep services do you offer?":
    "We provide a comprehensive suite of Amazon FBA prep services to meet your specific needs. Our services include product inspection, labeling and packaging, and quality control checks to ensure your products meet Amazon's standards. With our expertise, you can streamline your FBA operations and focus on growing your business.",
  "Can you fulfill Shopify & Website orders?":
    "Yes, I can help with fulfilling Shopify and website orders.",
  "Do you warehouse in Canada and the USA?":
    "Yes, we warehouse in both Canada and the USA.",
  "If I sign up today, how long till I can ship my products to you?":
    "If you sign up today, you can start shipping your products to us immediately",
  "How much do you charge to fulfill my orders?":
    "Service charges are calculated after completing the questionnaire.",
  "Do you require a certain number of orders per month?":
    "No, there are no specific order requirements per month.",
};

export default function Faq() {
  return (
    <Container>
      {/* <Image src={cat} alt="cat" width={500} height={500} placeholder="blur" /> */}
      <h2 className="text-5xl font-bold mr-auto">Frequently Asked Questions</h2>
      <ul className="mt-[48px]">
        {Object.keys(faq).map((item) => (
          <li
            key={item}
            className="flex flex-col justify-center bg-[#C0C0C0] border-inherit border-solid border transition-colors duration-500 hover:bg-[#757575] "
          >
            <FaqButton item={item} faq={faq} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
