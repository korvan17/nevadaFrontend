"use client";

import { userPanelItems } from "@/content";
import React, { useEffect, useState } from "react";
import SideBar from "../SIdeBar/SideBar";
import { AnimatePresence } from "framer-motion";
import PasswordSettings from "../PasswordSettings/PasswordSettings";
import Backdrop from "@/components/Backdrop/Backdrop";
import Calendar from "@/components/UIElements/Datepicker/Calendar";
import {
  CalendarMonthOutlined,
  NotificationsActiveOutlined,
  PersonOutlineOutlined,
  PrivacyTipOutlined,
} from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useSession } from "next-auth/react";

function UserPanel({ user }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: session } = useSession();
  if (session && session.user) {
  }
  const [notifications, setNotifications] = useState([]);
  const toggleSideBar = (title) => {
    setSelectedItem(userPanelItems.find((e) => e.title === title));
    setIsSideBarOpen(!isSideBarOpen);
  };

  const receiveNotification = (message) => {
    setNotifications((prevNotifications) => {
      const newNotifications = [...prevNotifications, message];

      return newNotifications.slice(-3);
    });
  };

  useEffect(() => {
    const messageListener = setInterval(() => {
      receiveNotification("You received a message");
    }, 100000);
    return () => clearInterval(messageListener);
  }, [notifications]);
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

      {session?.user && (
        <div>
          <p>Username: {session.user.fullName}</p>

          <p>Phone: {session.user.phone}</p>
          <p>Company Name: {session.user.companyName}</p>
          <p>Email: {session.user.email}</p>
          <p>Account Number: {session.user.id}</p>
          <p className="text-alertRed">Discount -20%???</p>
          <button
            className="w-[306px] h-[68px] rounded-md 
            
            bg-gradient-to-r from-gradient-start via-[#9394CC] to-gradient-end shadow-custom
            
            text-[#FAFCF8] font-bold text-[18px] leading-5
            "
            type="button"
          >
            {session.user.businessDirection}
          </button>
        </div>
      )}
      <ul>
        {userPanelItems.map(({ title, icon, hint }) => {
          return (
            <div className="">
              <li key={title}>
                <button onClick={() => toggleSideBar(title)} type="button">
                  <PrivacyTipOutlined />
                  <p>{title}</p>
                  <p>{hint}</p>

                  <ArrowForwardIosOutlinedIcon
                    fontSize="small"
                    stroke="#62686F"
                    style={{ height: "24px", width: "24px" }}
                  />
                </button>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="flex mb-3">
        <NotificationsActiveOutlined />
        <h2 className="">Notification</h2>
      </div>
      <div className="">
        {notifications.map((notification, index) => (
          <div key={index}>{notification}</div>
        ))}
      </div>
      <AnimatePresence>
        {isSideBarOpen && (
          <>
            <Backdrop toggleSideBar={toggleSideBar} />
            <SideBar toggleSideBar={toggleSideBar}>
              <PasswordSettings />
            </SideBar>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserPanel;
