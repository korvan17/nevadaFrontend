"use client";
import { DBHeader, Sidebar, UserPanel } from "@/components";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <DBHeader toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      <div className="pt-[131px] md:pt-[129px] md:flex md:gap-[20px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
