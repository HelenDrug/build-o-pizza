
import { Logo } from "../Logo/Logo";
import { MenuDropDownWrapper, MenuLogoWrapper } from "./Menu.styles";
import { MenuNav } from "./MenuNav";

export const MenuDropDown = ({ display }) => {
  return (
    <MenuDropDownWrapper display={display}>
      <MenuLogoWrapper>
        <Logo />
      </MenuLogoWrapper>
      <MenuNav />
    </MenuDropDownWrapper>
  );
};
