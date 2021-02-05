import {
  ToolBarWrapper,
  Header,
  Menu,
  Logo,
  MainNav,
  NavList,
} from "./ToolBar.styles";
import img from "../../../img/pizza_logo.png";

export const ToolBar = () => {
  return (
    <ToolBarWrapper>
      <Menu>Menu</Menu>
      <Logo src={img} />
      <MainNav>
        <NavList>...</NavList>
      </MainNav>
    </ToolBarWrapper>
  );
};
