"use client";
import React from "react";
import { ThreeCircles, Triangle } from "react-loader-spinner";

function Loading() {
  return (
    <div className="fixed top-[50%] left-[50%] z-50 origin-center translate-x-[50%]  translate-y-[50%] ">
      {/* <Triangle
        visible={true}
        height="80"
        width="80"
        color="#1478CE"
        ariaLabel="triangle-loading"
      /> */}
      <ThreeCircles
        visible={true}
        height="150"
        width="150"
        color="#1478CE"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
