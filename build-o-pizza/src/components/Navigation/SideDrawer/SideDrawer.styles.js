import styled from "styled-components";
import { LogoWrapper } from "../Logo/Logo";

export const SideDrawerWrapper = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 1rem 2rem;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100)")};

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const SideDrawerLogoWrapper = styled(LogoWrapper)`
  height: 11%;
  display: flex;
  justify-content: center;
`;
