//global imports
//local imports
import Container from "@/components/Container/Container";
import { FooterLinks } from "./FooterLinks";
import { FooterHeader } from "./FooterHeader";

export default function Footer() {
  return (
    <div className="bg-mainBlack text-mainWhite">
      <Container>
        <FooterHeader />
        <FooterLinks />
        <div className="flex items-center justify-center py-[28px] flex-wrap flex-col text-center">
          <h3 className="mb-[24px]">Prime Preparation Center</h3>
          <p className="flex flex-col text-[15px]">
            <span>All rights reserved</span>
            <span>Copyright (2022 - 2023) - PPC™</span>
          </p>
        </div>
      </Container>
    </div>
  );
}
