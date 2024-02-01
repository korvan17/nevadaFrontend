import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ReactPaginate from "react-paginate";

function ShipmentsPagination({ pageCount, handlePageClick, currentPage }) {
  return (
    <ReactPaginate
      previousLabel={<KeyboardArrowLeft />}
      nextLabel={<KeyboardArrowRight />}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"flex list-none justify-center gap-[10px] my-[25px]"}
      forcePage={currentPage}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      breakLabel={"..."}
      pageLinkClassName={
        "border px-4 py-2 mx-1 mb-2 sm:mb-0 sm:mx-2 transition duration-300 ease-in-out hover:bg-captionalGrey"
      }
      activeLinkClassName={
        "bg-captionBlueDB text-white border-captionBlueDB hover:bg-captionBlueDB radius-[20px]"
      }
      breakLinkClassName={"mx-2"}
      previousLinkClassName={
        "border px-4 py-2 mr-2 transition duration-300 ease-in-out hover:bg-captionalGrey"
      }
      nextLinkClassName={
        "border px-4 py-2 ml-2 transition duration-300 ease-in-out hover:bg-captionalGrey"
      }
      disabledClassName={"text-dbActiveLink cursor-not-allowed"}
    />
  );
}

export default ShipmentsPagination;
