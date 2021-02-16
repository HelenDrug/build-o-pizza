import styled from "styled-components";

export const BuildControlsWrapper = styled.div`
  width: 60%;
  border-radius: 40px;
  background-color: #ffb26b;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
  margin: 5rem;
  @media screen and (min-width: 800px) {
    margin-left: 0;
  }
  @media screen and (min-width: 850px) {
    margin-left: 3rem;
  }
  @media screen and (min-width: 1000px) {
    margin-left: 7rem;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 1rem;
`;

export const OrderButton = styled.button`
  background-color: #ffd56b;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  border-radius: 10px;
  color: #966909;
  font-family: inherit;
  font-size: 1em;
  padding: 10px 25px;
  box-shadow: 2px 2px 2px #966909;
  margin: 1rem;
  :hover,
  :active {
    background-color: #ff7b54;
    border: 1px solid #966909;
    color: #ffffff;
  }
  :disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }
  :not(:disabled) {
    animation: enable 0.3s linear;
  }
  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
