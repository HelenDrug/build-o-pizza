import styled from "styled-components";

export const LogoWrapper = styled.div`
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

  @media screen and (min-width: 500px) {
      display: none;
  }
`;
