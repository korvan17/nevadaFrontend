import Backdrop from "@/components/Backdrop/Backdrop";
import React from "react";

function LoadingPage() {
  return (
    <div>
      <Backdrop />
      <h1 className="fixed top-[70px] left-0 text-[50px] text-black z-50">
        LOADING...
      </h1>
    </div>
  );
}

export default LoadingPage;
