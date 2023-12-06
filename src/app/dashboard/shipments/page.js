import Shipments from "@/components/Dashboard/Shipments/Shipments";
import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};

function ShipmentsPage({ children }) {
  return (
    <>
      <Shipments />
      {children}
    </>
  );
}

export default ShipmentsPage;
