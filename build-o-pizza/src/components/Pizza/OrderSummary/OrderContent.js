import styled from "styled-components";

const List = styled.ul`
  text-transform: capitalize;
  list-style-type: none;
`;

export const OrderContent = ({ ingredients }) => {
  return (
    <List>
      {Object.keys(ingredients).map((item) => {
        return (
          <li>
            {item}: {ingredients[item]}
          </li>
        );
      })}
    </List>
  );
};
