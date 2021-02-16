import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import styled from "styled-components";

const StyledPizza = styled.div`
  width: 32rem;
  height: 32rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 2.5rem 0 0 2.5rem;
  @media screen and (max-width: 500px) {
    margin: 2.5rem 0;
  }
`;

const Pizza = ({ ingredients }) => {
  let ingredientsArray = Object.keys(ingredients)
    .map((item) => {
      return [ingredients[item]].map((elem, index) => {
        return (
          <PizzaIngredient key={item + index} type={item} quantity={elem} />
        );
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  //checking that ingredients array is not empty
  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start adding ingredients!</p>;
  }

  return (
    <StyledPizza>
      <PizzaIngredient type="pizzaBottom">{ingredientsArray}</PizzaIngredient>
    </StyledPizza>
  );
};

export default Pizza;
