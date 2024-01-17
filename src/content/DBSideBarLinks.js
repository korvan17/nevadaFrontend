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
  },
  {
    href: "/dashboard",
    icon: <ShipmentsIcon />,
  },
  {
    href: "/dashboard/messages",
    icon: <MessagesIcon />,
  },
  {
    href: "/dashboard/shipments",
    icon: <InboundShipmentsIcon />,
  },
];

export default DBSideBarLinks;
