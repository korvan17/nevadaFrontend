"use client";

import { UserPanel } from "@/components";
import React, { useState } from "react";

export default function ArrowLeftTabletModal({ closeModal }) {
  return (
    <>
      <div className="hidden md:block lg:hidden">
        <UserPanel />
      </div>
    </>
  );
}
