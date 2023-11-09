import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import React from "react";

export const metadata = {
  title: "PPC | Test",
  description: "Test",
};

function Test({ children }) {
  return (
    <>
      <CreateOrderForm />
      {children}
    </>
  );
}

export default Test;
