import { DotsMoreIcon } from "@/components/Icons";

export const CommonBoard = ({ title, icon, children, options = false }) => {
  return (
    <div className="w-[542px] bg-bgBoard color  mt-[100px] relative p-[12px] rounded-[16px] board-shadow pt-[56px] mb-[20px]">
      <div className="flex row absolute left-[8px] top-[8px]">
        <div className="mr-[8px]">{icon}</div>
        <h2>{title}</h2>
      </div>
      {options ? (
        <button type="button" className="absolute right-[8px] top-[8px]">
          <DotsMoreIcon />
        </button>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};
