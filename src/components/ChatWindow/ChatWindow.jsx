import React from "react";
import Logo from "@/components/Icons/Logo/Logo";

export default function ChatWindow() {
  return (
    <div className="w-[325px] h-[630px] fixed bottom-32 right-5 border-[#C0C0C0] border-solid border-2 rounded-lg">
      <div className="w-full h-[73px] p-4 border-b-[#C0C0C0] border-solid border-[1px] flex items-center gap-2">
        <Logo fill={"black"} />
        <div className=" flex flex-col gap-[-4px] ">
          <span className="text-base font-semibold ">PPC</span>
          <span className="text-xs font-normal">Warehouse</span>
        </div>
      </div>
    </div>
  );
}
