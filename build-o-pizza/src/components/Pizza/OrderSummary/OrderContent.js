import styled from "styled-components";

const List = styled.ul``;

export const OrderContent = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <List>
      {Object.keys(ingredients).map((item) => {
        <li>
          Item : {item}: {ingredients[item]};
        </li>;
      })}
    </List>
  );
};
