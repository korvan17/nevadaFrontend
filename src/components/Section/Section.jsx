import React from "react";

function Section({ top = "[120px]", children }) {
  return <div className={`pt-${top}`}>{children}</div>;
}

export default Section;
