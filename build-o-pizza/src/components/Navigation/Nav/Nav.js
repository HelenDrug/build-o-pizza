import { NavList, NavItem, NavLink } from "./Nav.styles";

export const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
      </NavItem>
    </NavList>
  );
};
