"use client";

import { userPanelItems } from "@/content";
import React, { useEffect, useState } from "react";
// import SideBar from "../SIdeBar/SideBar";
import { AnimatePresence } from "framer-motion";
import PasswordSettings from "../PasswordSettings/PasswordSettings";
// import Backdrop from "@/components/Backdrop/Backdrop";
import Calendar from "@/components/UIElements/Datepicker/Calendar";
import {
  CalendarMonthOutlined,
  NotificationsActiveOutlined,
  PersonOutlineOutlined,
  PrivacyTipOutlined,
} from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useSession } from "next-auth/react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
    <div className="bg-mainWhite h-[867px] w-[330px] p-3  rounded-[12px] shadow-custom-deep">
      <div className="flex mb-3">
        <CalendarMonthOutlined
          fontSize="small"
          stroke="#62686F"
          style={{ height: "24px", width: "24px" }}
        />

        <h2 className="ml-2 font-bold leading-6">Calendar</h2>
      </div>
      <div className="mb-6">
        <Calendar style={{ color: "white" }} />
      </div>
      <div className="flex mb-3">
        <PersonOutlineOutlined
          fontSize="small"
          stroke="#62686F"
          style={{ height: "24px", width: "24px" }}
        />
        <h3 className="ml-2 text-mainBlack text-base font-bold leading-normal">
          Account
        </h3>
      </div>

      {session?.user && (
        <div className="text-mainBlack">
          <div className="flex columns-2 justify-between">
            <p className="font-semibold leading-6 mb-2">
              Username: {session.user.fullName}
            </p>
            <EditNoteIcon
              fontSize="small"
              stroke="#62686F"
              style={{ height: "24px", width: "24px" }}
            />
          </div>
          <p className="text-xs not-italic font-normal leading-4 mb-1">
            Phone: {session.user.phone}
          </p>
          <p className="text-xs not-italic font-normal leading-4 mb-1">
            Company Name: {session.user.companyName}
          </p>
          <p className="text-xs not-italic font-normal leading-4 mb-1">
            Email: {session.user.email}
          </p>
          <p className="text-xs not-italic font-normal leading-4 mb-1">
            Account Number: {session.user.id}
          </p>
          <p className="text-alertRed text-xs not-italic font-normal leading-4 mb-4">
            Discount -20%???
          </p>
          <div className="relative">
            <button
              className="w-[306px] h-[68px] rounded-md
              bg-gradient-to-r from-gradient-start via-[#9394CC] 
              to-gradient-end shadow-custom
            text-[#FAFCF8] font-bold text-[18px] leading-5"
              type="button"
            >
              {session.user.businessDirection}
            </button>
            <ArrowOutwardIcon
              className="absolute right-0 "
              fontSize="small"
              stroke="#62686F"
              style={{ height: "16px", width: "16px" }}
            />
          </div>
        </div>
      )}

      <ul className="mt-5 mb-7 ">
        {userPanelItems.map(({ title, icon, hint }, index) => {
          return (
            <li key={`${title}-${index}`}>
              <button
                onClick={() => toggleSideBar(title)}
                type="button"
                className="flex w-[306px] columns-3 items-center"
              >
                <PrivacyTipOutlined
                  fontSize="small"
                  stroke="#62686F"
                  style={{ height: "24px", width: "24px" }}
                />
                <div className="ml-2 mr-[118px]">
                  <p className="text-mainBlack font-semibold leading-6 ">
                    {title}
                  </p>
                  <p className="text-captionalGrey text-xs not-italic font-normal leading-4 ">
                    {hint}
                  </p>
                </div>
                <ArrowForwardIosOutlinedIcon
                  fontSize="small"
                  stroke="#62686F"
                  style={{ height: "24px", width: "24px" }}
                />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex mb-3">
        <NotificationsActiveOutlined />
        <h2 className="text-mainBlack font-bold leading-6 ml-2">
          Notification
        </h2>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div key={index}>{notification}</div>
        ))}
      </div>
      <AnimatePresence>
        {isSideBarOpen && (
          <>
            {/* <Backdrop toggleSideBar={toggleSideBar} /> */}
            {/* <SideBar toggleSideBar={toggleSideBar}>
              <PasswordSettings className="text-mainBlack font-semibold leading-6" />
            </SideBar> */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserPanel;
