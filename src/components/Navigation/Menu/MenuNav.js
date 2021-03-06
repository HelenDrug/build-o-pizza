import { NavList, NavItem, NavLink } from "./Menu.styles";

export const MenuNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/">Pizza Builder</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Check Out</NavLink>
      </NavItem>
    </NavList>
  );
};
