"use client";
import { DBHeader, SideBar, UserPanel } from "@/components";
import React, { useState } from "react";

function Account() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <DBHeader />
      <UserPanel toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />}
    </div>
  );
}

export default Account;
