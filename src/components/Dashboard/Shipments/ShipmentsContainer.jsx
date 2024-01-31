import { SearchIcon } from "@/components/Icons";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React from "react";
import ReactPaginate from "react-paginate";
import ShipmentsTable from "./ShipmentsTable";
import ShipmentsFilters from "./ShipmentsFilters";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function ShipmentsContainer({
  searchQuery,
  handleSearchChange,
  handleFilterClick,
  activeFilter,
  currentPageData,
  orders,
  pageCount,
  handlePageClick,
  currentPage,
  PER_PAGE,
}) {
  return (
    <div
      className="m-[0 auto] px-[16px] w-[288px] mb-[203px] mx-auto pt-[10px]
       sm:w-[343px]  md:mt-[12px] md:ml-0 md:w-[578px] md:pl-[20px] md:pr-[40px]
       lg:w-[920px] lg:px-[24px]"
    >
      <span className="relative ">
        <span className="absolute top-[-2px] left-[16px]">
          <SearchIcon />
        </span>
        <input
          className="w-full mb-[12px] pl-[48px] pr-[16px] py-[18px] rounded-[8px]
               bg-[#F2F4F8] border-none border-b-[#C1C7CD] text-[#697077]
                shadow-custom-deep"
          placeholder="Search for..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </span>
      <div className="flex gap-2 items-baseline">
        <span>
          <FilterAltOutlinedIcon className="text-[17px] text-[#697077] md:text-[26px] lg:text-[34px]" />
        </span>
        <ShipmentsFilters
          handleFilterClick={handleFilterClick}
          activeFilter={activeFilter}
        />
      </div>
      <h2
        className="text-[24px] font-bold mb-[20px] 
        md:mb-[24px]"
      >
        Inbound Shipments
      </h2>
      <div
        className="overflow-scroll shadow-custom-deep mb-[48px]
         relative md:pb-[110px] lg:pb-[159px]"
      >
        <div
          className="absolute top-[45px] left-[24px] w-[732px] h-[1px] bg-gradient-end
          md:top-[47px] md:left-[34px] md:w-[805px]
          lg:top-[85px] lg:w-[894px] lg:left-[49px]"
        ></div>
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
        <div className="hidden md:block absolute bottom-[30px] left-[12px] lg:bottom-[37px]">
          <CreateOrderButton />
        </div>
      </div>
      <div className="md:hidden">
        <CreateOrderButton />
      </div>
    </div>
  );
}

export default ShipmentsContainer;
