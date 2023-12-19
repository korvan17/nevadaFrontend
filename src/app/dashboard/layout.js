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
      <div className="flex gap-6 pt-[76px] justify-center">
        {children}
        <div className="hidden md:block">
          <Sidebar toggleSideBar={toggleSideBar} />
        </div>
      </div>
    </>
  );
};

export default Layout;
