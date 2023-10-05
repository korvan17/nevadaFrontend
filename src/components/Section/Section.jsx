import React from "react";

function Section({ sectionName, children }) {
  switch (sectionName) {
    case "hero":
      return (
        <div className="pt-[78px] pb-[151px] md:pt-[47px] md:pb-[0px] lg:pt-[139px] lg:pb-[0px]">
          {children}
        </div>
      );
    case "about":
      return (
        <div className="pt-[19px] pb-[36px] md:pb-[19px] md:pt-[80px] lg:pt-[120px] lg:pb-[0px]">
          {children}
        </div>
      );
    case "services":
      return (
        <div className="lg:pt-[120px]" id="services">
          {children}
        </div>
      );
    case "pricing":
      return (
        <div
          id="pricing"
          className="pt-[80px] pb-[70px] mg:pt-[120px] mg:pb-[0px]"
        >
          {children}
        </div>
      );
    case "faq":
      return (
        <div id="faq" className="lg:py-[120px]">
          {children}
        </div>
      );

    default:
      break;
  }
}

export default Section;
