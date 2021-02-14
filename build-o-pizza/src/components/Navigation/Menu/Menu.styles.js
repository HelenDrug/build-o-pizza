import styled from "styled-components";
import {LogoWrapper} from "../Logo/Logo"

export const MenuWrapper = styled.div``;

export const MenuDropDownWrapper = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  margin-top: 1.4rem;
  z-index: 200;
  background-color: white;
  padding: 1rem 2rem;
  transition: all 0.7s ease;
  transform: ${(props) =>
    props.display ? "translateX(0)" : "translateX(-200vh)"};
`;
export const MenuLogoWrapper = styled(LogoWrapper)`
height: 11%;
display: flex;
justify-content: center;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 3px;
  background-color: white;
  margin: 0.2rem;
`;

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
`;
