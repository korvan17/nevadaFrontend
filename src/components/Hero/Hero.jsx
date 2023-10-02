import Image from "next/image";
import Buttons from "../Buttons/Buttons";

export default function Hero() {
  return (
    <div>
      <h1>Do You Engage in Amazon Sales?</h1>
      <h3>Let us optimize your shipping process</h3>
      <Buttons>Get a Quote</Buttons>
      {/* <Image src="/" alt="hero img" width="120" /> */}
    </div>
  );
}
