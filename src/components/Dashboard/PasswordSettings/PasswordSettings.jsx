import Image from "next/image";
import React from "react";
import securityIcon from "../../Icons/shield-lock.png";
import { passwordUpdateData } from "@/content";

function PasswordSettings() {
  return (
    <form className="text-mainWhite">
      <div className="flex items-center justify-center gap-[8px] mb-[44px]">
        <Image width={24} height={24} src={securityIcon} alt="security icon" />
        <div>
          <h2 className="text-mainWhite">Password settings</h2>
          <p className="text-captionalWhite">Change password</p>
        </div>
      </div>
      <b className="block mb-[24px]">Change password</b>
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
    </form>
  );
}

export default PasswordSettings;
