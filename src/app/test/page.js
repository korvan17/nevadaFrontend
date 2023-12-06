import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import ShipmentSidebarDashboard from "@/components/Dashboard/ShipmentSidebarDashboard/ShipmentSidebarDashboard";
import React from "react";

export const metadata = {
  title: "PPC | Test",
  description: "Test",
};

function Test({ children }) {
  return (
    <div className="flex">
      <div className="flex-none">
        <ShipmentSidebarDashboard />
      </div>
      <div className="flex-grow">
        <HomeDashboard />
      </div>
      {children}
    </div>
  );
}

export default Test;
