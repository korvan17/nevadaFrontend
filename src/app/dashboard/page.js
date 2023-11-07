import { DBHeader } from "@/components";
import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};

function Dashboard({ children }) {
  return (
    <>
      <DBHeader />
      {children}
    </>
  );
}

export default Dashboard;
