import { StyledModal } from "./StyledModal";
import { OrderSummary } from "../../Pizza/OrderSummary/OrderSummary";
import { BackDrop } from "../Backdrop/Backdrop";

export const Modal = ({ ingredients, show, modalClosed }) => {
  return (
    <>
      <BackDrop show={show} clicked={modalClosed} />
      <StyledModal show={show}>
        <OrderSummary ingredients={ingredients}></OrderSummary>
      </StyledModal>
    </>
  );
};
