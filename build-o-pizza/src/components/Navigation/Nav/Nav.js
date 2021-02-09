import { NavList, NavItem } from "./Nav.styles";
import { NavLink } from "./NavLink/NavLink";

export const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink link="/">Pizza Builder</NavLink>
        <NavLink link="/">Check Out</NavLink>
      </NavItem>
    </NavList>
  );
};
