"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Backdrop from "@/components/Backdrop/Backdrop";
import { LogoutIcon } from "@/components/Icons";
import { usePathname } from "next/navigation";
import { DBSideBarLinks } from "@/content";

const Sidebar = ({ toggleSideBar }) => {
  const pathName = usePathname();

  return (
    <>
      <div className="md:hidden">
        <Backdrop toggleSideBar={toggleSideBar} />
      </div>
      <motion.ul
        className="fixed z-50 top-[40px] bottom-[40px] left-0
          shadow-custom-deep flex-shrink-0 bg-mainWhite flex flex-col items-center
     md:hidden"
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
        {DBSideBarLinks.map(({ href, icon }) => {
          const isActive = pathName === href;
          return (
            <li
              key={href}
              className={`${
                isActive ? "bg-dbActiveLink" : "bg-mainWhite"
              } py-[16px] px-[32px] md:px-[41px] md:py-[12px]`}
            >
              <Link
                className="block w-full h-full"
                href={href}
                onClick={toggleSideBar}
                passHref
              >
                {icon}
              </Link>
            </li>
          );
        })}

        <li className="absolute bottom-[32px] md:top-[210px]">
          <Link href="/" onClick={toggleSideBar} passHref>
            <LogoutIcon />
          </Link>
        </li>
      </motion.ul>

      <ul className="hidden md:flex h-full w-[106px] shadow-custom-deep flex-shrink-0 bg-mainWhite  flex-col items-center">
        {DBSideBarLinks.map((link, index) => {
          const { href, icon } = link;
          const isActive = pathName === href;
          if (index > 0) {
            return (
              <li
                key={href}
                className={`${
                  isActive ? "bg-dbActiveLink" : "bg-mainWhite"
                } py-[16px] px-[32px] md:px-[41px] md:py-[12px]`}
              >
                <Link className="block w-full h-full" href={href} passHref>
                  {icon}
                </Link>
              </li>
            );
          }
        })}
        <li className="py-[16px] px-[32px] md:px-[41px] md:py-[12px]">
          <Link href="/" onClick={toggleSideBar} passHref>
            <LogoutIcon />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
