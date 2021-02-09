import { NavList, NavItem, NavLink } from "./Nav.styles";

export const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/">Pizza Builder</NavLink>
        <NavLink href="/">Check Out</NavLink>
      </NavItem>
    </NavList>
  );
};
