import styled from "styled-components";

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
`;
