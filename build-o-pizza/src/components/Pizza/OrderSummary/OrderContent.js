import styled from "styled-components";
import { OrderContentItem } from "./OrderContentItem";

const OrderContentList = styled.ul`
  text-transform: capitalize;
  list-style-type: none;
`;

export const OrderContent = ({ ingredients }) => {
  return (
    <OrderContentList>
      {Object.keys(ingredients).map((item) => {
        return (
          <OrderContentItem ingredient={item} quantity={ingredients[item]} />
        );
      })}
    </OrderContentList>
  );
};
