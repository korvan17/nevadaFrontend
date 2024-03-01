import Dashboard from "@/components/Dashboard/Dashboard";

import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};



function DashboardPage({ children }) {
  return (
    <>
      <Dashboard />
      {children}
    </>
  );
}

export default DashboardPage;
