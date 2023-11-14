import { DBContentContainer, DBHeader, UserPanel } from "@/components";
import { CommonBoard } from "@/components/Dashboard/Boards/CommonBoard/CommonBoard";
import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
// import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";
import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};

function Dashboard({ children }) {
  return (
    <>
      <DBHeader />
      {/* <DBContentContainer />
       */}
      <div className="flex gap-3">
        <CreateOrderForm />
        <CommonBoard />
        <UserPanel />
      </div>
      {/* <CreateOrderButton /> */}
      {/* <CreateOrderForm /> */}
      {/* <CommonBoard title={"Order history"} icon={<HistoryIcon />}></CommonBoard> */}
      {/* <CommonBoard title={"Tracker"} icon={<TrackerIcon />}></CommonBoard> */}
      {children}
    </>
  );
}

export default Dashboard;
