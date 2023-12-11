"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";
import ReactPaginate from "react-paginate";
const PER_PAGE = 1;
export default function Messages() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTrackerUpdated, setIsTrackerUpdated] = useState(false);
  const { data: session, status } = useSession();
  const SERVER_URL = "html://nevadacms.onrender.com";

  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      fetchOrders(session.user.jwt).then(setOrders).catch(console.error);
    }

    const socket = io(SERVER_URL);

    socket.on("connect_error", (error) => {
      console.log(`Connected to Strapi WebSocket at ${SERVER_URL}`);
      console.error("Connection Error:", error);
      socket.on("api::order.order.create", (newOrder) => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
      });

      socket.on("api::order.order.update", (updatedOrder) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === updatedOrder.id ? updatedOrder : order
          )
        );
      });

      socket.on("api::order.order.delete", (deletedOrderId) => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== deletedOrderId)
        );
      });
    });

    return () => {
      socket.disconnect();
    };
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

      const updatedOrder = await response.json();
      setOrders(
        orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                attributes: { ...order.attributes, tracker: trackerNumber },
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

  if (orders.length === 0) {
    return <div>No messages to display.</div>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      <div className="w-[920px] h-[611px] rounded-lg bg-[#FAFCF8] shadow-custom-deep p-3">
        <ul>
          {currentPageData.map((order) => (
            <li key={order.id}>
              <div className="flex gap-11 font-extrabold">
                <h3>Full price for your parcel</h3>
                <p>{order.attributes.totalPrice}$</p>
              </div>
              <p>Order Type: {order.attributes.orderType}</p>
              <p>Order Date: {order.attributes.orderDate}</p>
              <p>Company Name: {order.attributes.companyName}</p>

              <div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const trackerNumber = event.target.tracker.value;
                    submitTrackerNumber(order.id, trackerNumber);
                  }}
                >
                  <label htmlFor={`tracker-${order.id}`}>
                    Enter Tracker Number:
                  </label>
                  <input
                    id={`tracker-${order.id}`}
                    name="tracker"
                    defaultValue={order.attributes.tracker || ""}
                    onChange={(e) =>
                      handleTrackerChange(order.id, e.target.value)
                    }
                  />
                  <button type="submit">Update Tracker</button>
                </form>

                <p>Tracker Number: {order.attributes.tracker}</p>
                {!order.attributes.accept && isTrackerUpdated ? (
                  <button
                    className="flex w-32 px-4 py-2 justify-center items-center gap-2 rounded-md bg-blue-600 shadow-md 
                
  text-white font-semibold text-sm leading-4 hover:shadow-lg hover:bg-blue-700 focus:outline-none 
                
  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => handleAccept(order.id)}
                  >
                    Accept
                  </button>
                ) : (
                  <button
                    className="flex w-32 px-4 py-2 justify-center items-center gap-2 rounded-md bg-blue-600 
  text-white font-semibold text-sm leading-4 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Accept
                  </button>
                )}
                <button onClick={() => handleDecline(order.id)}>Decline</button>
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
          />
        )}
        {currentPageData.length === 0 && <p>You have no messages.</p>}
      </div>
    </div>
  );
}
