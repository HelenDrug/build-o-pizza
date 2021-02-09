import styled from "styled-components";

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  width: 100%;
  display: block;
  @media screen and (min-width: 500px) {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    width: auto;
  }
`;

export const NavLink = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 0.5rem;
  :hover,
  :active {
    background-color: #f0e5d8;
  }

  @media screen and (min-width: 500px) {
    color: white;
    text-decoration: none;
    height: 100%;
    width: auto;
    padding: 22px 10px;
    box-sizing: border-box;
    display: block;
    :hover,
    :active {
      background-color: #8f5c2c;
    }
  }
`;
