"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";

function Loading() {
  console.log("Loading");
  return (
    <div className="fixed bottom-[20px] right-[20px] z-50">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#1478CE"
        ariaLabel="triangle-loading"
      />
    </div>
  );
}

export default Loading;
