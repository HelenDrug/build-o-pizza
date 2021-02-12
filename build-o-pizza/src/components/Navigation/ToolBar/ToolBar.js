import { ToolBarWrapper } from "./ToolBar.styles";
import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const ToolBar = () => {
  return (
    <ToolBarWrapper>
      <Menu />
      <Logo />
      <Nav />
    </ToolBarWrapper>
  );
};
