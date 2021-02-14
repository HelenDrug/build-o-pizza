import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 30%;
  background-color: #fff;
  width: 30%;
  border-radius: 40px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
  z-index: 500;
  padding: 10px;
  margin-left: -20%;
  box-sizing: border-box;
  transition: all 0.7s ease;
  cursor: pointer;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-200vh)"};

  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    background-color: #a4a8a7;
    color: #fff;
  }

  @media screen and (min-width: 300px) {
    left: 45%;
    width: 50%;
  }
`;
