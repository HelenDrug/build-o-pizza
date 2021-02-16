import { StyledModal } from "./Modal.styles";
import { OrderSummary } from "../../Pizza/OrderSummary/OrderSummary";
import { BackDrop } from "../Backdrop/Backdrop";
import { useEffect } from "react";

export const Modal = ({
  ingredients,
  show,
  modalClosed,
  orderCancel,
  orderContinue,
  price,
}) => {
  useEffect(() => {
    console.log("[Modal] will update");
  }, [show]);
  return (
    <>
      <BackDrop show={show} clicked={modalClosed} display={show} />
      <StyledModal show={show}>
        <OrderSummary
          ingredients={ingredients}
          orderCancel={orderCancel}
          orderContinue={orderContinue}
          orderPrice={price}
        ></OrderSummary>
      </StyledModal>
    </>
  );
};
