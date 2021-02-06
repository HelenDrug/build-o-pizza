import { OrderContent } from "./OrderContent";

import {
  OrderSummaryWrapper,
  OrderHeader,
  OrderText,
  OrderPrice,
  CheckOut,
  ButtonContainer,
  SummaryButton,
} from "./OrderSummary.styles";

export const OrderSummary = ({
  ingredients,
  orderCancel,
  orderContinue,
  orderPrice,
}) => {
  return (
    <OrderSummaryWrapper>
      <OrderHeader>Order Summary</OrderHeader>
      <OrderText>This is your delicious pizza!</OrderText>
      <OrderContent ingredients={ingredients}></OrderContent>
      <OrderPrice>Total price: {orderPrice.toFixed(2)} EUR</OrderPrice>
      <CheckOut>Continue to CheckOut?</CheckOut>
      <ButtonContainer>
        <SummaryButton onClick={orderCancel}>CANCEL</SummaryButton>
        <SummaryButton onClick={orderContinue}>CONTINUE</SummaryButton>
      </ButtonContainer>
    </OrderSummaryWrapper>
  );
};
