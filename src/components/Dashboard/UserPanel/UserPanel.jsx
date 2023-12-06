"use client";
import { CloseMenuIcon } from "@/components/Icons";
import { userPanelItems } from "@/content";
import React, { useState } from "react";
import SideBar from "../SIdeBar/SideBar";
import { AnimatePresence } from "framer-motion";
import PasswordSettings from "../PasswordSettings/PasswordSettings";
import Backdrop from "@/components/Backdrop/Backdrop";
import Calendar from "@/components/UIElements/Datepicker/Calendar";
import {
  CalendarMonthOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

function UserPanel({}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSideBar = (title) => {
    setSelectedItem(userPanelItems.find((e) => e.title === title));
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="h-[867px] w-[330px] p-3 mt-[76px] rounded-[12px] shadow-xl">
      <div className="flex mb-3">
        <CalendarMonthOutlined />
        <h2 className="">Calendar</h2>
      </div>
      <Calendar />
      <div className="flex mb-3">
        <PersonOutlineOutlined />
        <h3 className="">Account</h3>
      </div>
      <div>
        <p>fullName</p>
        <p>Phone: phone</p>
        <p>Address:address</p>
        <p>Mail: email</p>
        <p></p>
      </div>
      <p className="text-alertRed">Discount -20%</p>
      <button className="bg-blue-800" type="button">
        Platini Subcrabation
      </button>
      <ul>
        {userPanelItems.map(({ title, icon, hint }) => {
          return (
            <li key={title}>
              <p>{title}</p>
              <p>{hint}</p>
              <button
                onClick={() => toggleSideBar(title)}
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
          <>
            <Backdrop toggleSideBar={toggleSideBar} />
            <SideBar toggleSideBar={toggleSideBar}>
              {selectedItem &&
                (selectedItem.title === "Password settings" ? (
                  <PasswordSettings />
                ) : selectedItem.title === "History of discounts" ? (
                  <p>History of discounts</p>
                ) : selectedItem.title === "Transaction history" ? (
                  <p>Transaction history</p>
                ) : selectedItem.title === "Change the language" ? (
                  <p>Change the language</p>
                ) : null)}
            </SideBar>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserPanel;
