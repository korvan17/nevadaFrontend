"use client";
import React, { useState, useEffect, useRef } from "react";

import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";
import ReactPaginate from "react-paginate";
import FullPrice from "../FullPrice/FullPrice";
import { Add, ExpandLessOutlined } from "@mui/icons-material";
const PER_PAGE = 1;
export default function Messages() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTrackerUpdated, setIsTrackerUpdated] = useState(false);
  const [isFullPriceVisible, setIsFullPriceVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const overlayRef = useRef(null);
  const { data: session, status } = useSession();

  const formatDisplayDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      fetchOrders(session.user.jwt).then(setOrders).catch(console.error);
    }
  }, [status, session]);

  const handleTrackerChange = (orderId, trackerValue) => {
    setOrders(
      orders.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            attributes: { ...order.attributes, tracker: trackerValue },
          };
        }
        return order;
      })
    );
  };

  const submitTrackerNumber = async (orderId, trackerNumber) => {
    try {
      const response = await fetch(
        `https://nevadacms.onrender.com/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.jwt}`,
          },
          body: JSON.stringify({
            data: {
              tracker: trackerNumber,
            },
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to update the tracker number.");

      setOrders(
        orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                attributes: { ...order.attributes, tracker: trackerNumber },
                isTrackerUpdated: true,
              }
            : order
        )
      );
      setIsTrackerUpdated(true);
    } catch (error) {
      console.error("Error updating tracker number:", error);
    }
  };

  const handleAccept = async (orderId) => {
    try {
      const response = await fetch(
        `https://nevadacms.onrender.com/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.jwt}`,
          },
          body: JSON.stringify({
            data: {
              accept: true,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to accept the order.");

      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);

      const remainingOrdersOnPage = updatedOrders.slice(
        offset,
        offset + PER_PAGE
      ).length;

      if (remainingOrdersOnPage === 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  const handleDecline = (orderId) => {
    console.log("Declined order with ID:", orderId);
    //
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = orders
    .filter(
      (order) =>
        order?.attributes?.totalPrice != null &&
        order?.attributes?.accept !== true
    )
    .slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(
    orders.filter(
      (order) =>
        order?.attributes?.totalPrice != null &&
        order?.attributes?.accept !== true
    ).length / PER_PAGE
  );

  const toggleFullPriceVisibility = () => {
    setIsFullPriceVisible((prev) => !prev);
  };
  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setIsFullPriceVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-11">
      <h2 className="text-[24px] leading-6 font-bold mb-6">Messages</h2>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div
          className="lg:w-[920px] lg:h-[611px] rounded-[4px] bg-[#FAFCF8] shadow-custom-deep pl-2 pr-2 pt-3 
        
        md:w-[578px] md:h-[484px]"
        >
          <ul>
            {currentPageData.map((order) => (
              <li key={order.id}>
                <div ref={overlayRef} className="relative">
                  {isFullPriceVisible ? (
                    <div className="absolute z-10">
                      <FullPrice
                        onClose={toggleFullPriceVisibility}
                        currentPageData={currentPageData}
                        order={order}
                        formatDisplayDate={formatDisplayDate}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={toggleFullPriceVisibility}
                      className="flex justify-between  font-bold cursor-pointer text-[14px] md:text-[16px] first-letter:
                      
                       leading-[21px] md:leading-[24px]"
                    >
                      <h3>
                        Full price for your parcel <ExpandLessOutlined />
                      </h3>
                      <p>{order.attributes.totalPrice}$</p>
                    </div>
                  )}
                </div>
                <div className="text-[16px] leading-6 text-[#62686F]">
                  <p>Order №: {order.attributes.customId}</p>
                  <p>Order Type: {order.attributes.orderType}</p>
                  <p>
                    Order Date: {formatDisplayDate(order.attributes.orderDate)}
                  </p>
                  <p>Company Name: {order.attributes.companyName}</p>
                  <div>
                    <p className="font-extrabold">Products:</p>
                    <ul>
                      {order.attributes.products.map((product) => (
                        <li key={product.id}>
                          <p>
                            Product Description: {product.productDescription}
                          </p>
                        </li>
                      ))}
                      <p>Total Boxes: {order.attributes.totalMasterBoxes}</p>
                      <p className="mb-2">
                        Tracker Number: {order.attributes.tracker}
                      </p>
                    </ul>
                  </div>
                </div>
                <div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const trackerNumber = event.target.tracker.value;
                      submitTrackerNumber(order.id, trackerNumber);
                    }}
                  >
                    <div className="flex  items-center border-[]">
                      <label
                        className="text-[12px] font-bold leading-4 mr-3"
                        htmlFor={`tracker-${order.id}`}
                      >
                        Tracker Number:
                      </label>
                      <input
                        className="w-[100px] h-[32px] rounded-[4px] md:w-[202px]"
                        id={`tracker-${order.id}`}
                        placeholder="Enter Tracker Number"
                        name="tracker"
                        defaultValue={order.attributes.tracker || ""}
                        onChange={(e) =>
                          handleTrackerChange(order.id, e.target.value)
                        }
                      />
                      <button className="" type="submit">
                        <Add fontSize="large" />
                      </button>
                    </div>
                  </form>

                  <div className="flex gap-3 justify-end mt-11 mb-10">
                    {!order.attributes.accept && order.isTrackerUpdated ? (
                      <button
                        className="flex w-32 h-8 px-4 py-2 justify-center items-center gap-2 rounded-md bg-blue-600 shadow-md 
                
  text-white font-semibold text-[12px] leading-4 hover:shadow-lg hover:bg-blue-700 focus:outline-none 
                
  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => handleAccept(order.id)}
                      >
                        Accept
                      </button>
                    ) : (
                      <button
                        className="flex h-8 w-32 px-4 py-4 justify-center items-center  rounded-md bg-blue-600 
  text-white font-semibold text-[12px] leading-4 opacity-50 cursor-not-allowed"
                        disabled
                      >
                        Accept
                      </button>
                    )}
                    <button
                      className="w-[62px] h-8 flex justify-center items-center py-2 px-6 text-[#3C6ED0] font-semibold 
                      
                      text-[12px] leading-4  "
                      onClick={() => handleDecline(order.id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              className="flex justify-center gap-5 pb-8"
            />
          )}
          {currentPageData.length === 0 && (
            <p className="text-center">You have no messages.</p>
          )}
        </div>
      )}
    </div>
  );
}
