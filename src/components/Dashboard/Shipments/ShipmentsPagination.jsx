import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ReactPaginate from "react-paginate";

function ShipmentsPagination({ pageCount, handlePageClick, currentPage }) {
  return (
    <ReactPaginate
      previousLabel={<KeyboardArrowLeft fontSize="small" />}
      nextLabel={<KeyboardArrowRight fontSize="small" />}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={
        "flex list-none justify-center gap-[5px] my-[10px] my-[25px] "
      }
      forcePage={currentPage}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      breakLabel={"..."}
      pageLinkClassName={
        "border px-4 py-2 mx-1 mb-2 sm:mb-0 sm:mx-2 transition duration-300 ease-in-out hover:bg-captionalGrey rounded-[8px]"
      }
      activeLinkClassName={
        "bg-captionBlueDB text-white border-captionBlueDB hover:bg-captionBlueDB rounded-[20px]"
      }
      breakLinkClassName={"mx-1"}
      previousLinkClassName={
        "border px-2 py-1 mr-1 transition duration-300 ease-in-out hover:bg-captionalGrey rounded-[4px]"
      }
      nextLinkClassName={
        "border px-2 py-1 ml-1 transition duration-300 ease-in-out hover:bg-captionalGrey rounded-[4px]"
      }
      disabledClassName={"text-dbActiveLink cursor-not-allowed"}
    />
  );
}

export default ShipmentsPagination;
