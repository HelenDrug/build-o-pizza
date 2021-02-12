import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { SideDrawerLogoWrapper, SideDrawerWrapper } from "./SideDrawer.styles";
import { BackDrop } from "../../UI/Backdrop/Backdrop";

export const SideDrawer = ({ opened, closed }) => {
  return (
    <>
      <BackDrop show={opened} clicked={closed} />
      <SideDrawerWrapper show={opened}>
        <SideDrawerLogoWrapper>
          <Logo />
        </SideDrawerLogoWrapper>
        <Nav />
      </SideDrawerWrapper>
    </>
  );
};
