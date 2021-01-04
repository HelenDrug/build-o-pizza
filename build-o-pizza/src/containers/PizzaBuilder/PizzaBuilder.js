import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";

const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pizzaBotom: 1,
      pepperoni: 1,
      cheese: 1,
      mushroom: 1,
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
