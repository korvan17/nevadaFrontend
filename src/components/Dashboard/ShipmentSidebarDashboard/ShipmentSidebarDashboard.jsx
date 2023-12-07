"use client";

import {
  ForumOutlined,
  HomeOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const ShipmentSidebarDashboard = () => {
  return (
    <div className="shadow-custom-deep w-[118px] h-[1041px] flex-shrink-0 bg-[#FAFCF8] flex flex-col items-center p-2.5 gap-2.5">
      <Link href="/dashboard" passHref>
        <HomeOutlined />
      </Link>

      <Link href="/dashboard/messages" passHref>
        <ForumOutlined />
      </Link>
      <Link href="/dashboard/shipments" passHref>
        <LocalShippingOutlined />
      </Link>
      <Link href="/" passHref>
        <LogoutOutlined />
      </Link>
    </div>
  );
};

export default ShipmentSidebarDashboard;
