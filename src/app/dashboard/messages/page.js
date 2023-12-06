import Messages from "@/components/Dashboard/Messages/Messages";
import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};

function MessagesPage({ children }) {
  return (
    <>
      <Messages />
      {children}
    </>
  );
}

export default MessagesPage;
