import { OrderHeader } from "./OrderHeader";
import { OrderText } from "./OrderText";
import { OrderContent } from "./OrderContent";
import { CheckOut } from "./CheckOut";
import styled from "styled-components";
import { SummaryButton } from "./SummaryButton";
import { ButtonContainer } from "./ButtonContainer";
import { OrderPrice } from "./OrderPrice";

const StyledOrderSummary = styled.div`
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

export const OrderSummary = ({
  ingredients,
  orderCancel,
  orderContinue,
  orderPrice,
}) => {
  return (
    <StyledOrderSummary>
      <OrderHeader>Order Summary</OrderHeader>
      <OrderText>This is your delicious pizza!</OrderText>
      <OrderContent ingredients={ingredients}></OrderContent>
      <OrderPrice>Total price: {orderPrice.toFixed(2)} EUR</OrderPrice>
      <CheckOut>Continue to CheckOut?</CheckOut>
      <ButtonContainer>
        <SummaryButton onClick={orderCancel}>CANCEL</SummaryButton>
        <SummaryButton onClick={orderContinue}>CONTINUE</SummaryButton>
      </ButtonContainer>
    </StyledOrderSummary>
  );
};
