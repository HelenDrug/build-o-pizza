import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

const OrderContentItemIcon = styled(BiCheck)`
  font-size: 1rem;
  color: orangered;
  margin-right: 0.5rem;
  :hover {
    color: red;
  }
`;

const OrderContentItemList = styled.li`
  padding-bottom: 0.5rem;
`;

const OrderItemIngredient = styled.span`
  font-weight: bold;
`;

const OrderItemQuantity = styled.span`
  padding-left: 0.3rem;
  color: orangered;
`;

export const OrderContentItem = ({ ingredient, quantity }) => {
  return (
    <>
      <OrderContentItemList>
        <OrderContentItemIcon />
        <OrderItemIngredient>{ingredient}</OrderItemIngredient>:
        <OrderItemQuantity>{quantity}</OrderItemQuantity>
      </OrderContentItemList>
    </>
  );
};
