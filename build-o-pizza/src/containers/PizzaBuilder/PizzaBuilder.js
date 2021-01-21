import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";
import { BuildControls } from "../../components/Pizza/BuildControls/BuildControls.js";

const INGREDIENT_PRICE = {
  pepperoni: 1,
  cheese: 0.5,
  mushroom: 0.3,
  greenPepper: 0.3,
};
const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 1,
      cheese: 1,
      mushroom: 1,
      greenPepper: 1,
    },
    totalPrice: 4,
  });

  const calculatePrice = (ingredientType, action) => {
    console.log(ingredientType, action);
    switch (action) {
      case "ADD":
        // Here we take the price for ingredient and add it to total price of pizza
        return pizza.totalPrice + INGREDIENT_PRICE[ingredientType];

      case "REMOVE":
        return pizza.totalPrice - INGREDIENT_PRICE[ingredientType];
    }
  };

  const addIngredient = (type) => {
    const updatedCount = pizza.ingredients[type] + 1; // we take old count and add 1 to it
    const updatedIngredients = { ...pizza.ingredients };
    updatedIngredients[type] = updatedCount;
    setPizza({
      ingredients: updatedIngredients,
      totalPrice: calculatePrice(type, "ADD"),
    });
  };

  const removeIngredient = (type) => {
    if (pizza.ingredients[type] <= 0) return;
    const updatedCount = pizza.ingredients[type] - 1;
    const updatedIngredients = { ...pizza.ingredients };
    updatedIngredients[type] = updatedCount;
    setPizza({
      ingredients: updatedIngredients,
      totalPrice: calculatePrice(type, "REMOVE"),
    });
  };
  return (
    <>
      <Pizza ingredients={pizza.ingredients} />
      <BuildControls
        ingredientAdded={addIngredient}
        ingredientRemoved={removeIngredient}
      />
    </>
  );
};

export default PizzaBuilder;
