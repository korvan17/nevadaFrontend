"use client";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const shipments = [
  {
    arrival: "13.01.2022",
    order: "O-32005473",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "12",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "52",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Com3pleted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "not",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "52",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Compl5eted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "53",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Comp4leted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Comp4leted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Compl2eted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Compl2eted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Complet3ed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Compl5eted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },

  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Compl213eted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Comple123ted",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Complet132ed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },

  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
  {
    arrival: "13.01.2022",
    order: "O-3200547340",
    tracker: "1223344545",
    status: "Completed",
    from: "werehous1",
    to: "Nevada",
    received: "13.01.2022",
    boxes: "51",
  },
];
const PER_PAGE = 8;
export default function Shipments() {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = shipments.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(shipments.length / PER_PAGE);
  return (
    <>
      <div className="">
        <h2 className="text-[24px] font-bold mb-6">Inbound Shipments</h2>
        <input
          className="border-[1px] mb-6 p-2 w-full rounded-[8px]"
          placeholder="Search for order..."
        />
        <div
          className=" rounded-lg bg-[#FAFCF8] shadow-custom-deep"
          style={{
            paddingTop: "12px",
            paddingRight: "12px",
            paddingBottom: "37px",
            paddingLeft: "12px",
          }}
        >
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-6 text-left">Arrival</th>
                <th className="py-3 px-6 text-left">Order</th>
                <th className="py-3 px-6 text-center">Tracker (API)</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">From</th>
                <th className="py-3 px-6 text-center">To</th>
                <th className="py-3 px-6 text-center">Received</th>
                <th className="py-3 px-6 text-center">Boxes</th>
              </tr>
            </thead>
            <tbody className="font-normal text-[11px] leading-[16px]">
              {currentPageData.map((shipment, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{shipment.arrival}</td>
                  <td className=" px-6 text-left font-semibold text-#000A11 ">
                    {shipment.order}
                  </td>
                  <td className="py-3 px-6 text-center">{shipment.tracker}</td>
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`py-1 px-3 rounded-full text-white ${
                        shipment.status === "Completed"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">{shipment.from}</td>
                  <td className="py-3 px-6 text-center">{shipment.to}</td>
                  <td className="py-3 px-6 text-center">{shipment.received}</td>
                  <td className="py-3 px-6 text-center">{shipment.boxes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex list-none justify-center gap-[30px]"}
            previousLinkClassName={""}
            nextLinkClassName={""}
            disabledClassName={""}
            activeClassName={""}
            pageLinkClassName={""}
            forcePage={currentPage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            breakLabel={"..."}
            breakClassName={""}
            breakLinkClassName={""}
          />
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          /> */}

          <CreateOrderButton />
        </div>
      </div>
    </>
  );
}
