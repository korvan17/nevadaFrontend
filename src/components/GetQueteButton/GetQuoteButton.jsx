"use client";

import React, { useState } from "react";
import BasicModal from "../Modals/BasicModal/BasicModal";
import GetQuoteWidgetModal from "../Modals/GetQuoteWidgetModal/GetQuoteWidgetModal";

export default function GetQuoteButton() {
  const [showGetQuoteModal, setShowGetQuoteModal] = useState(false);

  const toggleGetQuoteModal = () => {
    setShowGetQuoteModal(!showGetQuoteModal);
  };
  return (
    <>
      <button
        onClick={toggleGetQuoteModal}
        className="fixed z-20 shadowButton rounded-[50px] w-[72px] h-[72px] leading-[16px] font-bold text-[16px] text: bg-accentYellow text-[#FAFCF8] hover:bg-accentHoverYellow right-[5px] lg:right-[48px] top-[702px]"
      >
        GET A QUOTE
      </button>

      {showGetQuoteModal && (
        <BasicModal
          // contentStyle={{ width: "120px", height: "120px" }}
          modalIsOpen={showGetQuoteModal}
          closeModal={toggleGetQuoteModal}
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
