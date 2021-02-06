import { ToolBarWrapper, Menu, Logo, LogoImg } from "./ToolBar.styles";
import img from "../../../img/pizza_logo.png";
import { Nav } from "../Nav/Nav";

export const ToolBar = () => {
  return (
    <ToolBarWrapper>
      <Menu>Menu</Menu>
      <Logo>
        <LogoImg src={img} alt="Pizza Logo" />
      </Logo>
      <Nav />
    </ToolBarWrapper>
  );
};
