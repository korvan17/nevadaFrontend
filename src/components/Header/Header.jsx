import Buttons from "../Buttons/Buttons";
import Container from "@/components/Container/Container";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 bg-mainBlack text-mainWhite text-sm[16px] w-[100%] pt-[16px] pb-[16px] ">
      <Container>
        <div className="flex">
          <Navigation />
          <Buttons login={true}>Login</Buttons>
        </div>
      </Container>
    </header>
  );
}
