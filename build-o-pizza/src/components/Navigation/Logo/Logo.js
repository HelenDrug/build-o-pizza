import styled from "styled-components";
import img from "../../../img/pizza_logo.png";

export const LogoWrapper = styled.div`
  height: 100%;
  @media screen and (min-width: 850px) {
    margin-right: 5rem;
  }
  @media screen and (min-width: 1000px) {
    margin-right: 15rem;
  }
`;

export const LogoImg = styled.img`
  height: 100%;
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={img} alt="Pizza Logo" />
    </LogoWrapper>
  );
};
