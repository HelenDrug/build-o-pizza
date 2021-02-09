import { ToolBarWrapper, Menu } from "./ToolBar.styles";
import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";

export const ToolBar = () => {
  return (
    <ToolBarWrapper>
      <Menu>Menu</Menu>
      <Logo />
      <Nav />
    </ToolBarWrapper>
  );
};
