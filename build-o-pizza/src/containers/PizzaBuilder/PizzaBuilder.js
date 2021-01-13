import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";

const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 10,
      cheese: 1,
      mushroom: 5,
      greenPepper: 10,
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
