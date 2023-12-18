"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Backdrop from "@/components/Backdrop/Backdrop";
import {
  InboundShipmentsIcon,
  LogoutIcon,
  MessagesIcon,
  ShipmentsIcon,
  UserIcon,
} from "@/components/Icons";

const Sidebar = ({ toggleSideBar }) => {
  return (
    <>
      <Backdrop toggleSideBar={toggleSideBar} />
      <motion.div
        className="fixed z-50 top-[40px] bottom-[150px] left-0 shadow-custom-deep  py-[24px] px-[32px] gap-[32px]  flex-shrink-0 bg-[#FAFCF8] flex flex-col items-center  "
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          type: "tween",
          stiffness: 100,
        }}
      >
        <Link href="/dashboard/account" onClick={toggleSideBar} passHref>
          <UserIcon />
        </Link>
        <Link href="/dashboard" onClick={toggleSideBar} passHref>
          <ShipmentsIcon />
        </Link>

        <Link href="/dashboard/messages" onClick={toggleSideBar} passHref>
          <MessagesIcon />
        </Link>
        <Link href="/dashboard/shipments" onClick={toggleSideBar} passHref>
          <InboundShipmentsIcon />
        </Link>
        <div className="absolute bottom-[32px]">
          <Link href="/" onClick={toggleSideBar} passHref>
            <LogoutIcon />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
