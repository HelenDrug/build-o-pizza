import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";
import { BuildControls } from "../../components/Pizza/BuildControls/BuildControls.js";
import { Modal } from "../../components/UI/Modal/Modal";

const INGREDIENT_PRICE = {
  pepperoni: 1,
  cheese: 0.5,
  mushroom: 0.3,
  greenPepper: 0.3,
};
const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 0,
      cheese: 0,
      mushroom: 0,
      greenPepper: 0,
    },
    totalPrice: 0,
    canBeBought: false,
  });

  const updateBoughtState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el;
    }, 0);
    return sum > 0;
  };

  const calculatePrice = (ingredientType, action) => {
    switch (action) {
      case "ADD":
        // Here we take the price for ingredient and add it to total price of pizza
        return pizza.totalPrice + INGREDIENT_PRICE[ingredientType];

      case "REMOVE":
        return pizza.totalPrice - INGREDIENT_PRICE[ingredientType];
    }
  };

  const addIngredient = (type) => {
    if (pizza.ingredients[type] >= 10) return;
    const updatedCount = pizza.ingredients[type] + 1; // we take old count and add 1 to it
    const updatedIngredients = { ...pizza.ingredients };
    updatedIngredients[type] = updatedCount;

    setPizza({
      ingredients: updatedIngredients,
      totalPrice: calculatePrice(type, "ADD"),
      canBeBought: updateBoughtState(updatedIngredients),
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
      canBeBought: updateBoughtState(updatedIngredients),
    });
  };

  const disabledInfo = { ...pizza.ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <>
      <Modal />
      <Pizza ingredients={pizza.ingredients} />
      <BuildControls
        ingredientAdded={addIngredient}
        ingredientRemoved={removeIngredient}
        disabled={disabledInfo}
        price={pizza.totalPrice}
        canBeBought={pizza.canBeBought}
      />
    </>
  );
};

export default PizzaBuilder;
