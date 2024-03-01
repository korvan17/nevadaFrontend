"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import HomeDashboard from "./HomeDashboard/HomeDashboard";

function Dashboard({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <>
      <HomeDashboard />
    </>
  );
}

export default Dashboard;
