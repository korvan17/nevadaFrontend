import React, { useEffect, useState } from "react";
import ShipmentStatusCard from "../ShipmentStatusCard/ShipmentStatusCard";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import BookIcon from "@mui/icons-material/Book";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";

export default function HomeDashboard() {
  const [orders, setOrders] = useState([]);
  const { data: session, status } = useSession();
  const [orderCounts, setOrderCounts] = useState({
    orderCreated: 0,
    labelCreated: 0,
    outForDelivery: 0,
    delivered: 0,
  });

  useEffect(() => {
    if (status === "authenticated" && session.user.jwt) {
      fetchOrders(session.user.jwt)
        .then((fetchedOrders) => {
          setOrders(fetchedOrders);
          countOrderStatuses(fetchedOrders);
        })
        .catch(console.error);
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
       
        console.log("Unrecognized status:", status);
      }
    });

    setOrderCounts(counts);
  };

  return (
    <div className="mt-[36px] w-[920px] h-[611px] flex-shrink-0 rounded-lg bg-[#FAFCF8] shadow-custom-deep p-3">
      <h2 className="text-2xl font-bold mb-6">Outbound shipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ShipmentStatusCard
          title="Order created"
          icon={<BorderColorIcon fontSize="large" />}
          count={orderCounts.orderCreated}
        />

        <ShipmentStatusCard
          title="Label created"
          icon={<BookIcon fontSize="large" />}
          count={orderCounts.labelCreated}
        />

        <ShipmentStatusCard
          title="Out for Delivery"
          icon={<LocalShippingIcon fontSize="large" />}
          count={orderCounts.outForDelivery}
        />

        <ShipmentStatusCard
          title="Delivered"
          icon={<WarehouseIcon fontSize="large" />}
          count={orderCounts.delivered}
        />
      </div>
      <CreateOrderButton />
    </div>
  );
}
