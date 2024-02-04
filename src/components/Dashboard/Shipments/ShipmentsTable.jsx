import { CalendarIcon } from "@/components/Icons";
import React from "react";

function ShipmentsTable({ currentPageData }) {
  const tableCellHeaderClass =
    "min-w-[91px] pt-[16px] pb-[8px] text-[11px] leading-[16px] uppercase text-left font-normal md:text-[12px] lg:text-[16px]";
  return (
    <table
      className="border-separate border-spacing-x-[24px] border-spacing-y-[8px] text-left
    md:border-spacing-x-[34px] lg:border-spacing-x-[48px] lg:border-spacing-y-[28px]"
    >
      <thead>
        <tr className="border-b  pt-[16px] pb-[8px] ">
          <th className={tableCellHeaderClass}>Arrival</th>
          <th className={tableCellHeaderClass}>Order</th>
          <th className={tableCellHeaderClass}>Tracker </th>
          <th className={tableCellHeaderClass}>Status</th>
          <th className={tableCellHeaderClass}>From</th>
          <th className={tableCellHeaderClass}>To</th>

          <th className={tableCellHeaderClass}>Boxes</th>
        </tr>
      </thead>
      <tbody className="max-h-[785px] md:max-h-[845px] lg:max-h-[929px] font-normal text-[11px] leading-[16px]  border-t border-t-captionalGrey">
        {currentPageData.map((order, index) => {
          const {
            orderDate,
            tracker,
            customId,
            orderStatus,
            companyName,
            warehouseAddress,
            totalMasterBoxes,
          } = order.attributes;

          return (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100 text-left"
            >
              <td className="text-left flex gap-[4px] w-[88px]">
                <span>
                  <CalendarIcon />
                </span>
                <span>{orderDate}</span>
              </td>
              <td className="font-bold">{customId}</td>
              <td>{tracker}</td>
              <td className="flex gap-[5px] w-[95px] items-center">
                <div
                  className={` rounded-full w-[10px] h-[10px] ${
                    orderStatus === "Delivered"
                      ? "bg-green-500"
                      : orderStatus === "Label created"
                      ? "bg-yellow-500"
                      : orderStatus === "Out for Delivery"
                      ? "bg-blue-500"
                      : orderStatus
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                ></div>
                <span>{orderStatus || "Order created"}</span>
              </td>
              <td>{companyName}</td>
              <td>{warehouseAddress}</td>
              <td>{totalMasterBoxes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShipmentsTable;
