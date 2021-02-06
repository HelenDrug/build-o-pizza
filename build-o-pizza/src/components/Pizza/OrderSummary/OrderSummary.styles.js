import styled from "styled-components";
import { Button } from "../BuildControls/BuildControl/BuildControl.styles";

export const OrderSummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  @media only screen and (max-width: 500px) {
    align-items: center;
    padding: 0.5rem;
  }
`;

export const OrderHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 0.6rem;
  @media only screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
export const OrderText = styled.p`
  font-size: 1rem;
  padding-bottom: 0.5rem;
  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

export const OrderPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CheckOut = styled.p``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
`;

export const SummaryButton = styled(Button)`
  width: 5rem;
  font-size: 0.8rem;
  color: red;
  border-color: #f27b7a;
  :hover,
  :active {
    background-color: #99703f;
    border: 1px solid white;
    color: white;
  }
`;
