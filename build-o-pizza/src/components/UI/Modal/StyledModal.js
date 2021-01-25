import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 50%;
  border: 1px solid #ccc;
  box-shadow: 1px 0px 5px #58391c;
  padding: 16px;
  left: 55%;
  top: 60%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 10px);
  }
`;
