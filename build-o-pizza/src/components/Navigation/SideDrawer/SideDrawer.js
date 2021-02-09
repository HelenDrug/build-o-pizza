import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { SideDrawerLogoWrapper, SideDrawerWrapper } from "./SideDrawer.styles";

export const SideDrawer = () => {
  return (
    <SideDrawerWrapper>
      <SideDrawerLogoWrapper>
        <Logo />
      </SideDrawerLogoWrapper>
      <Nav />
    </SideDrawerWrapper>
  );
};
