import Container from "@/components/Container/Container";
import Navigation from "../Navigation/Navigation";
import UserControls from "../UserControls/UserControls";

function DesktopHeader() {
  return (
    <header className="fixed top-0 bg-mainBlack text-mainWhite text-sm[16px] w-[100%] pt-[39px] pb-[8px]  mg:py-[11px] lg:pt-[46px] lg:pb-[16px]">
      <div className="text-[16px] font-semibold	 w-[100%] absolute top-0 h-[30px] hidden lg:flex items-center justify-center bg-captionBlue text-captionalWhite">
        <a href="tel:+48000000000">+48 000 000 000</a>
      </div>
      <Container>
        <div className="flex">
          <Navigation />
          <UserControls />
        </div>
      </Container>
    </header>
  );
}

export default DesktopHeader;
