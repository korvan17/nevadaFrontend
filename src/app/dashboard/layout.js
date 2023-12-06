import { DBHeader, UserPanel } from "@/components";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import ShipmentSidebarDashboard from "@/components/Dashboard/ShipmentSidebarDashboard/ShipmentSidebarDashboard";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <DBHeader />
      <div className="flex gap-6 pt-20">
        <ShipmentSidebarDashboard />
        {children}

        <UserPanel />
      </div>
    </>
  );
};

export default Layout;
