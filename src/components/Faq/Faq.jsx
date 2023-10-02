import FaqButton from "./FaqButton";

const faq = {
  "What Amazon FBA prep services do you offer?":
    "We provide a comprehensive suite of Amazon FBA prep services to meet your specific needs. Our services include product inspection, labeling and packaging, and quality control checks to ensure your products meet Amazon's standards. With our expertise, you can streamline your FBA operations and focus on growing your business.",
  "Can you fulfill Shopify & Website orders?": "",
  "Do you warehouse in Canada and the USA?": "",
  "If I sign up today, how long till I can ship my products to you?": "",
  "How much do you charge to fulfill my orders?": "",
  "Do you require a certain number of orders per month?": "",
};

export default function Faq() {
  return (
    <div className="w-1440 h-[796px] flex justify-center items-center flex-col pt-[120px]">
      <h2 className="text-5xl font-bold mr-auto ml-24">
        Frequently Asked Questions
      </h2>
      <ul className="mt-[48px]">
        {Object.keys(faq).map((item) => (
          <li
            key={item}
            className="w-[1200px] min-h-[72px] flex flex-col justify-center bg-[#C0C0C0] border-white border-solid border transition-colors duration-500 hover:bg-[#757575] "
          >
            <FaqButton item={item} />
            {/* <p className="w-full bg-[#021827] px-6 decoration-white">
              {faq[item]}
            </p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
