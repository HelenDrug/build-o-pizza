import { ToolBarWrapper } from "./ToolBar.styles";
import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";
import { DrawerToggle } from "../SideDrawer/DrawerToggle/DrawerToggle";

export const ToolBar = () => {
  return (
    <ToolBarWrapper>
      <DrawerToggle />
      <Logo />
      <Nav />
    </ToolBarWrapper>
  );
};
