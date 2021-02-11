import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { SideDrawerLogoWrapper, SideDrawerWrapper } from "./SideDrawer.styles";
import { BackDrop } from "../../UI/Backdrop/Backdrop";

export const SideDrawer = ({ opened, closed }) => {
  const show = opened ? true : false;
  return (
    <>
      <BackDrop show={opened} clicked={closed} display={show} />
      <SideDrawerWrapper show={show}>
        <SideDrawerLogoWrapper>
          <Logo />
        </SideDrawerLogoWrapper>
        <Nav />
      </SideDrawerWrapper>
    </>
  );
};
