import { StyledModal } from "./StyledModal";
import { OrderSummary } from "../../Pizza/OrderSummary/OrderSummary";

export const Modal = ({ ingredients }) => {
  return (
    <StyledModal>
      <OrderSummary ingredients={ingredients}></OrderSummary>
    </StyledModal>
  );
};
