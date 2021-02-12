import { SideDrawerLogoWrapper } from "../SideDrawer/SideDrawer.styles";
import { Logo } from "../Logo/Logo";
import { MenuDropDownWrapper } from "./Menu.styles";
import { MenuNav } from "./MenuNav";

export const MenuDropDown = ({ display }) => {
  return (
    <MenuDropDownWrapper display={display}>
      <SideDrawerLogoWrapper>
        <Logo />
      </SideDrawerLogoWrapper>
      <MenuNav />
    </MenuDropDownWrapper>
  );
};
