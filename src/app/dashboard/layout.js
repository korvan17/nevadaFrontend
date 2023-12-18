import { DBHeader, UserPanel } from "@/components";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <DBHeader />
      <div className="flex gap-6 pt-[76px] justify-center">
        {children}
        {/* <div className="pt-[36px]"></div> */}
      </div>
    </>
  );
};

export default Layout;
