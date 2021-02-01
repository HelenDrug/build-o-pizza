import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import styled from "styled-components";

const StyledPizza = styled.div`
  width: 32rem;
  height: 32rem;
  margin: 0 2rem 0 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
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
      <PizzaIngredient type="pizzaBottom">
        {ingredientsArray}
      </PizzaIngredient>
    </StyledPizza>
  );
};

export default Pizza;
