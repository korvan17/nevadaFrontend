"use client";

import React, { useState } from "react";
import { BasicModal } from "@/components";
import GetQuoteWidgetModal from "@/components/Modals/GetQuoteWidgetModal/GetQuoteWidgetModal";

export default function GetQuoteButton() {
  const [showGetQuoteModal, setShowGetQuoteModal] = useState(false);

  const toggleGetQuoteModal = () => {
    setShowGetQuoteModal(!showGetQuoteModal);
  };
  return (
    <>
      <button
        onClick={toggleGetQuoteModal}
        className="shadow-color fixed z-10  rounded-[50px] 
        
        w-[72px] h-[72px] leading-[16px] font-bold text-[16px] 
        
        text: bg-accentYellow text-[#FAFCF8]
        
         hover:bg-accentHoverYellow right-[12px] lg:right-[48px] 
         
        top-[360px] lg:top-[702px]"
      >
        GET A QUOTE
      </button>

      {showGetQuoteModal && (
        <BasicModal
          modalIsOpen={showGetQuoteModal}
          closeModal={toggleGetQuoteModal}
          overflowY="auto"
          widthLg="771px"
          heightLg="780px"
          widthMd="723px"
          heightMd="887px"
          widthSm="343px"
          heightSm="90vh"

        >
          <GetQuoteWidgetModal
            modalIsOpen={showGetQuoteModal}
            closeModal={toggleGetQuoteModal}
          />
        </BasicModal>
      )}
    </>
  );
}
