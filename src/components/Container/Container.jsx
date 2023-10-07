import React from "react";

function Container({ children }) {
  return (
    <div className="container w-[100%] px-[16px] sm:w-[480px] md:w-[768px] md:px-[40px] lg:w-[1440px] lg:px-[120px]">
      {children}
    </div>
  );
}

export default Container;
