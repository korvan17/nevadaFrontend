import React from "react";

function Container({ children }) {
  return (
    <div className="container w-[100%] pl-[10px] pr-[10px] sm:w-[480px] sm:pl-[30px] sm:pr-[30px] md:w-[768px] md:pl-[50px] md:pr-[50px] lg:w-[1440px] lg:pl-[120px] lg:pr-[120px]">
      {children}
    </div>
  );
}

export default Container;
