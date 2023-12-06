import {
  ForumOutlined,
  HomeOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
  OilBarrelRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const ShipmentSidebarDashboard = () => {
  return (
    <div className="w-[118px] h-[1041px] flex-shrink-0 bg-[#FAFCF8] shadow-lg flex flex-col items-center p-10 gap-10">
      <Link href="/dashboard" passHref>
        <HomeOutlined className="text-4xl text-gray-700" />
      </Link>
      <Link href="/dashboard/messages" passHref>
        <ForumOutlined className="text-4xl text-gray-700" />
      </Link>
      <Link href="/dashboard/shipments" passHref>
        <LocalShippingOutlined className="text-4xl text-gray-700" />
      </Link>
      <Link href="/" passHref>
        <LogoutOutlined className="text-4xl text-gray-700" />
      </Link>
      {/* Дополнительные иконки и элементы */}
    </div>
  );
};

export default ShipmentSidebarDashboard;
