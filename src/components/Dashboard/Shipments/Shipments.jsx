"use client";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";
import { SearchIcon } from "@/components/Icons";
import { shipmentFilters } from "@/content";
import { CalendarIcon } from "@/components/Icons";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ShipmentsTable from "./ShipmentsTable";

const PER_PAGE = 8;
export default function Shipments() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [activeFilter, setActiveFilter] = useState(""); // Для стилизации активной фильтр кнопки

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const { data: session, status } = useSession();

  console.log("orders:", orders);

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

  // Фильтр кнопки
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    const filteredOrders = orders.filter(({ attributes: { orderStatus } }) => {
      return orderStatus ? orderStatus === filter : filter === "Order created";
    });

    return filter !== "All"
      ? setFilteredOrders(filteredOrders)
      : setFilteredOrders([...orders]);
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
        <span className="relative ">
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
        <div className="flex gap-2 items-baseline">
          <span>
            <FilterAltOutlinedIcon className="text-[17px] text-[#697077]" />
          </span>
          <ul
            className="flex gap-[6px] flex-wrap text-[11px] 
           md:gap-[16px] mb-[24px] md:text-[13px]"
          >
            {shipmentFilters.map((filter) => {
              const commonButtonStyles = "p-[1px] md:p-[5px] border-b-[2px]";
              return (
                <li key={filter} className="">
                  <button
                    onClick={() => handleFilterClick(filter)}
                    className={`${commonButtonStyles} ${
                      activeFilter === filter &&
                      "border-b-[2px] border-b-captionBlue"
                    } `}
                  >
                    {filter}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-[24px] font-bold mb-[20px]">Inbound Shipments</h2>
        <div className="overflow-scroll shadow-custom-deep mb-[48px]">
          <ShipmentsTable currentPageData={currentPageData} />
          {orders.length > PER_PAGE && (
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={
                "flex list-none justify-center gap-[30px] mt-[25px]"
              }
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
