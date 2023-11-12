"use client";
import { CloseMenuIcon } from "@/components/Icons";
import { userPanelItems } from "@/content";
import Image from "next/image";
import React, { useState } from "react";
import SideBar from "../SIdeBar/SideBar";
import { AnimatePresence } from "framer-motion";

function UserPanel() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="container">
      <section
        className="pt-[119px] pb-[76px]
         md:mt-[156px] md:mb-[49px] md:py-[12px] md:px-[20px]
          lg:pt-[40px] lg:pb-[42px] lg:px-[9px] lg:mt-[100px] lg:mb-[24px]
      md:bg-userPanel md:rounded-[16px] md:custom-shadow"
      >
        <Image href="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
        <p>Personal data</p>
        <p className="text-alertRed">Discount</p>
        <button type="button">Subcrabation</button>
        <ul>
          {userPanelItems.map(({ title, icon, hint }) => {
            return (
              <li>
                <p>{title}</p>
                <p>{hint}</p>
                <button
                  onClick={toggleSideBar}
                  className="scale-x-[-1]"
                  type="button"
                >
                  <CloseMenuIcon iconColor="#62686F" />
                </button>
              </li>
            );
          })}
        </ul>
        <AnimatePresence>
          {isSideBarOpen && (
            <SideBar toggleSideBar={toggleSideBar}>
              <p className="text-mainWhite">Side Bar content</p>
            </SideBar>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

export default UserPanel;
