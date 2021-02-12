import styled from "styled-components";

export const StyledBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 500px) {
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

export const BackDrop = ({ show, clicked, display }) => {
  return show ? <StyledBackDrop display={display} onClick={clicked} /> : null;
};
