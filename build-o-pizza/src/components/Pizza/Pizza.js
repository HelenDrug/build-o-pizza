import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import styled from "styled-components";

const Pizza = ({ ingredients }) => {
  let ingredientsArray = Object.keys(ingredients).map((item) => {
    return [ingredients[item]].map((elem, index) => {
      return <PizzaIngredient key={item + index} type={item} quantity={elem} />;
    });
  });

  const StyledPizza = styled.div`
    width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}
@media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
}
@media (min-width: 500px) and (min-height: 400px) {
    width: 450px;
    height: 400px;`;

  return (
    <StyledPizza>
      <PizzaIngredient type="pizzaBottom">{ingredientsArray}</PizzaIngredient>
    </StyledPizza>
  );
};

export default Pizza;
