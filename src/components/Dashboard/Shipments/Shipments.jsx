"use client";
import React, { useEffect, useState } from "react";
import { fetchAllOrders} from "../../../../services/api";
import { useSession } from "next-auth/react";
import ShipmentsContainer from "./ShipmentsContainer";

export default function Shipments() {
  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      fetchAllOrders(session.user.jwt)
        .then((fetchedOrders) => {
          const sortedOrders = fetchedOrders.sort((a, b) => {
            return (
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
            );
          });
          setOrders(sortedOrders);
        })
        .catch(console.error);
    }
  }, [status, session]);

  useEffect(() => {
    const filtered = orders
      .filter((order) =>
        order.attributes.customId
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      );

    setFilteredOrders(filtered);
    setCurrentPage(0);
  }, [searchQuery, orders]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    const filteredOrders = orders.filter(({ attributes: { orderStatus } }) => {
      return orderStatus ? orderStatus === filter : filter === "Order created";
    });

    setCurrentPage(0);
    setFilteredOrders(filteredOrders);

    return filter !== "All"
      ? setFilteredOrders(filteredOrders)
      : setFilteredOrders([...orders]);
  };

  const offset = currentPage * PER_PAGE;
  const filteredByTracker = filteredOrders.filter(
    ({ attributes: { tracker } }) => tracker
  );
  const currentPageData = filteredByTracker.slice(offset, offset + PER_PAGE);
  const pageCount = Math.max(1, Math.ceil(filteredByTracker.length / PER_PAGE));

  return (
    <ShipmentsContainer
      searchQuery={searchQuery}
      handleSearchChange={handleSearchChange}
      handleFilterClick={handleFilterClick}
      activeFilter={activeFilter}
      currentPageData={currentPageData}
      orders={orders}
      pageCount={pageCount}
      handlePageClick={handlePageClick}
      currentPage={currentPage}
      PER_PAGE={PER_PAGE}
    />
  );
}
