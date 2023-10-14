//global imports
//local imports

import { Buttons } from "@/components/UIElements";

export default function FooterForm() {
  return (
    <form action="">
      <input
        type="email"
        className="w-[282px] rounded-lg p-[16px] outline-none mr-[24px]"
        placeholder="Enter your email to be in touch"
      />
      <Buttons>Send</Buttons>
    </form>
  );
}
