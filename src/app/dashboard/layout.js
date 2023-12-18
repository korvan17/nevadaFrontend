import { DBHeader, UserPanel } from "@/components";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import ShipmentSidebarDashboard from "@/components/Dashboard/ShipmentSidebarDashboard/ShipmentSidebarDashboard";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <DBHeader />
      <div className="flex gap-6 pt-[76px] justify-center">
        {/* <ShipmentSidebarDashboard /> */}
        {children}
        <div className="pt-[36px]">{/* <UserPanel /> */}</div>
      </div>
    </>
  );
};

export default Layout;
