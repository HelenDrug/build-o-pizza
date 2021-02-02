import { StyledModal } from "./StyledModal";
import { OrderSummary } from "../../Pizza/OrderSummary/OrderSummary";

export const Modal = ({ ingredients, show}) => {
  return (
    <StyledModal show = {show}>
      <OrderSummary ingredients={ingredients}></OrderSummary>
    </StyledModal>
  );
};
