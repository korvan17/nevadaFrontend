"use client";
import { motion } from "framer-motion";

// import {
//   ForumOutlined,
//   HomeOutlined,
//   LocalShippingOutlined,
//   LogoutOutlined,
// } from "@mui/icons-material";
import Link from "next/link";
import Backdrop from "@/components/Backdrop/Backdrop";
import {
  InboundShipmentsIcon,
  LogoutIcon,
  MessagesIcon,
  ShipmentsIcon,
} from "@/components/Icons";

const ShipmentSidebarDashboard = ({ toggleSideBar }) => {
  return (
    <>
      <Backdrop toggleSideBar={toggleSideBar} />
      <motion.div
        className="fixed z-50 top-[40px] bottom-[150px] left-0 shadow-custom-deep  py-[24px] px-[32px] gap-[32px]  flex-shrink-0 bg-[#FAFCF8] flex flex-col items-center  "
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          type: "tween",
          stiffness: 100,
        }}
      >
        <Link href="/dashboard" passHref>
          <ShipmentsIcon />
        </Link>

        <Link href="/dashboard/messages" passHref>
          <MessagesIcon />
        </Link>
        <Link href="/dashboard/shipments" passHref>
          <InboundShipmentsIcon />
        </Link>
        <div className="absolute bottom-[32px]">
          <Link href="/" passHref>
            <LogoutIcon />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ShipmentSidebarDashboard;
