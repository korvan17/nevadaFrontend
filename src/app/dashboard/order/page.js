import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import React from "react";

export const metadata = {
  title: "PPC | Dashboard",
  description: "Dashboard client page",
};

function OrderPage({ children }) {
  return (
    <>
      <CreateOrderForm />
      {children}
    </>
  );
}

export default OrderPage;
