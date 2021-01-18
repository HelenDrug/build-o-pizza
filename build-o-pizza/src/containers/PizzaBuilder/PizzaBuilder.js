import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";
import { BuildControls } from "../../components/Pizza/BuildControls/BuildControls.js";

const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 10,
      cheese: 1,
      mushroom: 10,
      greenPepper: 10,
    },
  });
  return (
    <>
      <Pizza ingredients={pizza.ingredients} />
      <BuildControls />
    </>
  );
};

export default PizzaBuilder;
