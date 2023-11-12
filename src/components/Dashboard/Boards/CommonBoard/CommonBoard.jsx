import { DotsMoreIcon } from "@/components/Icons";
import { Buttons } from "@/components/UIElements";

export const CommonBoard = ({ title, icon, children }) => {
  return (
    <div className="w-[542px] bg-bgBoard color  mt-[150px] relative p-[12px] rounded-[16px] board-shadow pt-[56px]">
      <div className="flex row absolute left-[8px] top-[8px]">
        <div className="mr-[8px]">{icon}</div>
        <h2>{title}</h2>
      </div>
      <button type="button" className="absolute right-[8px] top-[8px]">
        <DotsMoreIcon />
      </button>
      {children}
    </div>
  );
};
