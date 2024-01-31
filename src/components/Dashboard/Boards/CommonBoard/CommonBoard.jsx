import { DotsMoreIcon } from "@/components/Icons";
import { Buttons } from "@/components/UIElements";

export const CommonBoard = ({ title, icon, children }) => {
  return (
    <div
      className=" ml-auto mr-auto p-5 w-[320px]  
    md:w-[458px]  lg:w-[458px] 
    relative 
    
    
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
