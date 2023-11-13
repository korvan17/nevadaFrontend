import React from "react";
import { passwordUpdateData } from "@/content";
import Image from "next/image";
import securityIcon from "../../Icons/shield-lock.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function PasswordSettings() {
  return (
    <form className="text-mainWhite text-[16px] leading-[24px] font-semibold">
      <div className="flex items-center justify-center gap-[8px] mb-[44px]">
        <Image width={24} height={24} src={securityIcon} alt="security icon" />
        <div>
          <h2 className="text-mainWhite">Password settings</h2>
          <p className="text-captionalWhite text-[12px] leading-[16px] font-normal	">
            Change password
          </p>
        </div>
      </div>
      <b className="block mb-[24px] font-bold">Change password</b>
      <ul className="mb-[48px]">
        {passwordUpdateData.map(({ label, id, name }) => {
          return (
            <li className="mb-[24px] last:mb-0">
              <label htmlFor={id} className="block mb-[8px]">
                {label}
              </label>
              <input
                className="w-[206px] py-[8px] rounded-[4px] ba-mainWhite text-mainBlack"
                type="password"
                name={name}
                id={id}
              />
            </li>
          );
        })}
      </ul>
      <button
        className="bg-captionBlueHover rounded-[8px] py-[15px] px-[39px]"
        type="submit"
      >
        Done
      </button>
      <VisibilityOffIcon color="#fff" />
    </form>
  );
}

export default PasswordSettings;
