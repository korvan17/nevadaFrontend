"use client";
import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";
import ShipmentsContainer from "./ShipmentsContainer";

const PER_PAGE = 8;
export default function Shipments() {
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
