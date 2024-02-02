import React from "react";
import securityIcon from "../../Icons/shield-lock.png";
import Image from "next/image";

function FormContent() {
  return (
    <div className="flex items-center justify-left gap-[8px] mb-[44px] bg-captionBlueDB p-[12px]">
      <Image width={24} height={24} src={securityIcon} alt="security icon" />
      <div className="text-mainWhite text-left">
        <h2 className="lg:text-[16px]">Password settings</h2>
        <p className=" text-[12px] leading-[16px] font-normal	">
          Change password
        </p>
      </div>
    </div>
  );
}

export default FormContent;
