import React from "react";

function Backdrop({ children }) {
  return (
    <div
      className="fixed top-0 left-0 z-1 w-[100%] h-[100%]
  backdrop-brightness-50
   filter blur-sm"
    >
      {/* {children} */}
    </div>
  );
}

export default Backdrop;
