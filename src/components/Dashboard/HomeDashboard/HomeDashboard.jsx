"use client";

import React, { useEffect, useState } from "react";
import ShipmentStatusCard from "../ShipmentStatusCard/ShipmentStatusCard";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import BookIcon from "@mui/icons-material/Book";
import { fetchAllOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";

import Loading from "@/app/loading";

export default function HomeDashboard() {
  const [orders, setOrders] = useState([]);
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const [orderCounts, setOrderCounts] = useState({
    orderCreated: 0,
    labelCreated: 0,
    outForDelivery: 0,
    delivered: 0,
  });

  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      setIsLoading(true);
      fetchAllOrders(session.user.jwt)
        .then((fetchedOrders) => {
          setOrders(fetchedOrders);
          countOrderStatuses(fetchedOrders);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [status, session]);

  const countOrderStatuses = (orders) => {
    const counts = {
      orderCreated: 0,
      labelCreated: 0,
      outForDelivery: 0,
      delivered: 0,
    };

    orders.forEach((order) => {
      const status = order.attributes.orderStatus;

      if (
        status === "Order created" ||
        status === null ||
        status === undefined
      ) {
        counts.orderCreated += 1;
      } else if (status === "Label created") {
        counts.labelCreated += 1;
      } else if (status === "Out for Delivery") {
        counts.outForDelivery += 1;
      } else if (status === "Delivered") {
        counts.delivered += 1;
      } else {
      }
    });

    setOrderCounts(counts);
  };

  return (
    <>
      <div
        className="w-[312px] mx-auto
      
      h-[650px] md:w-[612px] md:h-[402px] lg:h-[611px] 
    
    md:ml-0 md:mr-0
    lg:w-[920px] mb-4 flex-shrink-0
    
    rounded-lg bg-[#FAFCF8]
    
    
    shadow-custom-deep p-3"
      >
        <h3 className="text-[18px] md:text-2xl font-bold mb-6">
          Outbound shipments
        </h3>
        {/* {isLoading ? (
          <Loading />
        ) : orders.length === 0 ? ( */}
        {/* <p>No orders found</p>
        ) : ( */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="">
            <ul className="flex flex-wrap gap-3">
              <li>
                <ShipmentStatusCard
                  title="Order created"
                  icon={<BorderColorIcon fontSize="large" />}
                  count={orderCounts.orderCreated}
                />
              </li>
              <li>
                <ShipmentStatusCard
                  title="Label created"
                  icon={
                    <BookIcon fontSize="large" style={{ color: "orange" }} />
                  }
                  count={orderCounts.labelCreated}
                  countStyle={{ color: "orange" }}
                />
              </li>
              <li>
                <ShipmentStatusCard
                  title="Out for Delivery"
                  icon={
                    <LocalShippingIcon
                      fontSize="large"
                      style={{ color: "blue" }}
                    />
                  }
                  count={orderCounts.outForDelivery}
                  countStyle={{ color: "blue" }}
                />
              </li>
              <li>
                <ShipmentStatusCard
                  title="Delivered"
                  icon={
                    <WarehouseIcon
                      fontSize="large"
                      style={{ color: "green" }}
                    />
                  }
                  count={orderCounts.delivered}
                  countStyle={{ color: "green" }}
                />
              </li>
            </ul>
          </div>
        )}
        <CreateOrderButton />
      </div>
    </>
  );
}
