import { UserIcon, HomeIcon } from "@/components/Icons";

const navLinks = [
  {
    icon: <UserIcon />,
    title: "User page",
    href: "/dashboard/account",
  },
  {
    icon: <HomeIcon />,
    title: "Home page",
    href: "/dashboard",
  },
];

export default navLinks;
