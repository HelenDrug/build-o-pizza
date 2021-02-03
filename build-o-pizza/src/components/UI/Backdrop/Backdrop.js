import styled from "styled-components";

const StyledBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BackDrop = ({ show, clicked }) => {
  console.log(show);
  return show ? <StyledBackDrop onClick={clicked} /> : null;
};
