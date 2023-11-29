"use client";
import { DBHeader, UserPanel } from "@/components";
import { CommonBoard } from "@/components/Dashboard/Boards/CommonBoard/CommonBoard";
import { CreateOrderForm } from "@/components/Dashboard/Boards/CreateOrderForm/CreateOrderForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <>
        <DBHeader />
        <div className="flex gap-3">
          <CreateOrderForm />
          <CommonBoard />
          <UserPanel />
        </div>
      </>
    );
  }

  return null;
}

export default Dashboard;
