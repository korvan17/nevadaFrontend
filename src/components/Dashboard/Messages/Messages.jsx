"use client";
import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../../../services/api";
import { data } from "autoprefixer";

export default function Messages() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Failed to fetch Orders:", error);
      }
    };

    loadOrders();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">Messages</h2>

        <div
          className="w-[920px] h-[611px] flex-shrink-0 
      rounded-lg bg-[#FAFCF8] shadow-custom-deep p-3"
        ></div>
      </div>
    </>
  );
}
