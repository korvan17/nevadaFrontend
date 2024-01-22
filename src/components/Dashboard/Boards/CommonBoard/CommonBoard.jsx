import { DotsMoreIcon } from "@/components/Icons";
import { Buttons } from "@/components/UIElements";

export const CommonBoard = ({ title, icon, children }) => {
  return (
    <div
      className="bg-mainWhite ml-auto mr-auto  w-[343px] mt-[20px] 
    md:w-[458px]  lg:w-[458px] 
    relative p-[12px] shadow-custom-deep pt-[26px]
    
    
    mb-[20px]"
    >
      <div className="">
        <div className="mr-[8px]">{icon}</div>
        <h2>{title}</h2>
      </div>
      {/* <button type="button" className="absolute right-[8px] top-[8px]">
        <DotsMoreIcon />
      </button> */}
      {children}
    </div>
  );
};
