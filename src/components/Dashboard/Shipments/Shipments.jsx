"use client";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";

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
      <div className="">
        <h2 className="text-[24px] font-bold mb-6">Inbound Shipments</h2>
        <input
          className="border-[1px] mb-6 p-2 w-full rounded-[8px]"
          placeholder="Search for order..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div
          className=" rounded-lg bg-[#FAFCF8] shadow-custom-deep mb-4"
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
                <th className="py-3 px-6 text-center">Tracker</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">From</th>
                <th className="py-3 px-6 text-center">To</th>

                <th className="py-3 px-6 text-center">Boxes</th>
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

          <CreateOrderButton />
        </div>
      </div>
    </>
  );
}
