import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: #fff;
  width: 60%;
  border-radius: 40px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
  padding: 16px;
  margin: 0 0 2rem 5rem;
  box-sizing: border-box;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    background-color: #a4a8a7;
    color: #fff;
  }

  @media (min-width: 600px) {
    left: 58%;
  }
`;
