import { StyledModal } from "./StyledModal";
import { OrderSummary } from "../../Pizza/OrderSummary/OrderSummary";
import { BackDrop } from "../Backdrop/Backdrop";

export const Modal = ({ ingredients, show, modalClosed, orderCancel, orderContinue}) => {
  return (
    <>
      <BackDrop show={show} clicked={modalClosed} />
      <StyledModal show={show}>
        <OrderSummary
          ingredients={ingredients}
          orderCancel={orderCancel}
          orderContinue={orderContinue}
        ></OrderSummary>
      </StyledModal>
    </>
  );
};
