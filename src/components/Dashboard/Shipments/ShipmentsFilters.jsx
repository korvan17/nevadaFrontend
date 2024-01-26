import { shipmentFilters } from "@/content";
import React from "react";

function ShipmentsFilters({ handleFilterClick, activeFilter }) {
  return (
    <ul
      className="flex gap-[6px] flex-wrap text-[11px] 
           md:gap-[16px] mb-[24px] md:text-[13px]"
    >
      {shipmentFilters.map((filter) => {
        const commonButtonStyles =
          "p-[1px] md:p-[5px] border-b-[2px] md:text-[15px] lg:text-[20px] md:border-b-[3px] rounded-sm";
        return (
          <li key={filter} className="">
            <button
              onClick={() => handleFilterClick(filter)}
              className={`${commonButtonStyles} ${
                activeFilter === filter &&
                "border-b-[2px] md:border-b-[3px] rounded-sm border-b-captionBlue text-captionBlue font-bold md:text-[15px] lg:text-[20px]"
              } `}
            >
              {filter}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ShipmentsFilters;
