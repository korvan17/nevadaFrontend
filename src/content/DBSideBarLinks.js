import {
  InboundShipmentsIcon,
  MessagesIcon,
  ShipmentsIcon,
  UserIcon,
} from "@/components/Icons";

const DBSideBarLinks = [
  {
    href: "/dashboard/account",
    icon: <UserIcon />,
    title: "Account",
  },
  {
    href: "/dashboard",
    icon: <ShipmentsIcon />,
    title: "Dashboard home page",
  },
  {
    href: "/dashboard/messages",
    icon: <MessagesIcon />,
    title: "Messages",
  },
  {
    href: "/dashboard/shipments",
    icon: <InboundShipmentsIcon />,
    title: "Shipments",
  },
];

export default DBSideBarLinks;
