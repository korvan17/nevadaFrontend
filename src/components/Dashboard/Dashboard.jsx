"use client";
import { DBHeader, UserPanel } from "@/components";
import { CommonBoard } from "@/components/Dashboard/Boards/CommonBoard/CommonBoard";
import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// import ShipmentSidebarDashboard from "./ShipmentSidebarDashboard/ShipmentSidebarDashboard";
import HomeDashboard from "./HomeDashboard/HomeDashboard";

function Dashboard({ children }) {
  const router = useRouter();
  const { status } = useSession();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/");
  //   }
  // }, [status, router]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "authenticated") {
  return (
    <>
      <HomeDashboard />
      {/* <div className="flex gap-3"> */}
      {/* <CreateOrderForm />
          <CommonBoard />  */}
      {/* <div className="flex pt-20">
          <div className="flex-none">
            <ShipmentSidebarDashboard />
          </div>
          <div className="flex-grow">
            <HomeDashboard />
          </div>
          <UserPanel />
        </div> */}
      {/* {children} */}
      {/* </div> */}
    </>
  );
  // }

  // return null;
}

export default Dashboard;
