import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";

const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 2,
      cheese: 1,
      mushroom: 3,
      greenPepper: 1,
    },
  });
  return (
    <>
      <Pizza ingredients={pizza.ingredients} />
      <div>Build Controls</div>
    </>
  );
};

export default PizzaBuilder;
