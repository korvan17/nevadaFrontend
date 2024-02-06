"use client";
import React from "react";
import TabletAbout from "./TabletAbout";
import MobileAbout from "./MobileAbout";
import DesktopAbout from "./DesktopAbout";

function About() {
  return (
    <section>
      <MobileAbout />
      <TabletAbout />
      <DesktopAbout />
    </section>
  );
}

export default About;
