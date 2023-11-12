import { DBContentContainer, DBHeader } from "@/components";
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
      <DBContentContainer />
      <CreateOrderButton />
      {/* <CreateOrderForm /> */}
      {/* <CommonBoard title={"Order history"} icon={<HistoryIcon />}></CommonBoard> */}
      {/* <CommonBoard title={"Tracker"} icon={<TrackerIcon />}></CommonBoard> */}
      {children}
    </>
  );
}

export default Dashboard;
