"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
export default function TelegramButton() {
  return (
    <>
      <Link href="https://t.me/ppcwarehouses">
        <button
          className="shadow-color fixed z-10  rounded-[50px] 
        
        w-[72px] h-[72px] leading-[16px] font-bold text-[16px] 
        
        text: bg-blue-500 text-[#FAFCF8]
        
         hover:bg-blue-300 right-[12px] lg:right-[48px] 
         
        top-[490px] lg:top-[510px]"
        >
          <TelegramIcon />
        </button>
      </Link>
    </>
  );
}
