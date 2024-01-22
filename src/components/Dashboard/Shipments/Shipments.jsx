"use client";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";
import { SearchIcon } from "@/components/Icons";
import { shipmentFilters } from "@/content";

const PER_PAGE = 8;
export default function Shipments() {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      fetchOrders(session.user.jwt).then(setOrders).catch(console.error);
    }
  }, [status, session]);

  useEffect(() => {
    const filtered = orders.filter((order) =>
      order.attributes.customId
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredOrders(filtered);
    setCurrentPage(0);
  }, [searchQuery, orders]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const offset = currentPage * PER_PAGE;
  const currentPageData = filteredOrders.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(filteredOrders.length / PER_PAGE);

  return (
    <>
      <div
        className="m-[0 auto] px-[16px] w-[288px] mb-[203px] mx-auto
       sm:w-[343px]  md:mt-[12px] md:ml-0 md:w-[578px] md:pl-[20px] md:pr-[40px]"
      >
        <span className="relative md:hidden">
          <span className="absolute top-[-2px] left-[16px]">
            <SearchIcon />
          </span>
          <input
            className="w-full mb-[12px] pl-[48px] pr-[16px] py-[18px]
               bg-[#F2F4F8] border-none border-b-[#C1C7CD] text-[#697077]
                shadow-custom-deep"
            placeholder="Search for..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </span>
        <ul className="hidden md:flex gap-[16px] mb-[24px]">
          {shipmentFilters.map((b) => {
            return (
              <li>
                <button className="p-[8px] ">{b}</button>
              </li>
            );
          })}
        </ul>
        <h2 className="text-[24px] font-bold mb-[20px]">Inbound Shipments</h2>
        <div className="overflow-scroll shadow-custom-deep mb-[48px]">
          <table className="border-separate border-spacing-x-[24px] ">
            <thead className="">
              <tr className="border-b  pt-[16px] pb-[8px] ">
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  Arrival
                </th>
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  Order
                </th>
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  Tracker (API)
                </th>
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  Status
                </th>
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  From
                </th>
                <th className="text-left text-[12px] leading-[16px] font-normal">
                  To
                </th>

                <th className="text-left text-[12px] leading-[16px] font-normal">
                  Boxes
                </th>
              </tr>
            </thead>
            <tbody className="font-normal text-[11px] leading-[16px]">
              {currentPageData.map((order, index) => {
                // Only render the row if there's a tracker
                if (!order.attributes.tracker) return null;

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      {order.attributes.orderDate}
                    </td>
                    <td className="px-6 text-left font-semibold text-#000A11">
                      {order.attributes.customId}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {order.attributes.tracker}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span
                        className={`py-1 px-3 rounded-full text-white ${
                          order.attributes.orderStatus === "Delivered"
                            ? "bg-green-500"
                            : order.attributes.orderStatus === "Label created"
                            ? "bg-yellow-500"
                            : order.attributes.orderStatus ===
                              "Out for Delivery"
                            ? "bg-blue-500"
                            : order.attributes.orderStatus
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {order.attributes.orderStatus || "Order created"}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      {order.attributes.companyName}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {order.attributes.warehouseAddress}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {order.attributes.totalMasterBoxes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {orders.length > PER_PAGE && (
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
          )}
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          /> */}
        </div>
        <CreateOrderButton />
      </div>
    </>
  );
}
