"use client";
import { DBHeader, Sidebar, UserPanel } from "@/components";
import HomeDashboard from "@/components/Dashboard/HomeDashboard/HomeDashboard";
import ArrowLeftTabletBtn from "@/components/UIElements/Buttons/ArrowLeftTabletBtn/ArrowLeftTabletBtn";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <DBHeader toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      <div className="pt-[138px] md:pt-[129px] md:flex md:gap-[20px] bg-mainWhite">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="pt-[12px] lg:pt-[32px] mx-auto">{children}</div>
        <div className="hidden lg:block">
          <UserPanel />
        </div>
      </div>
      <ArrowLeftTabletBtn />
    </>
  );
};

export default Layout;
