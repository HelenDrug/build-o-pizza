import Pizza from "../../components/Pizza/Pizza";
import { useState } from "react";
import { BuildControls } from "../../components/Pizza/BuildControls/BuildControls.js";
import { Modal } from "../../components/UI/Modal/Modal";
import { ControlsWrapper } from "./ControlsWrapper";

const INGREDIENT_PRICE = {
  pepperoni: 0.1,
  cheese: 0.05,
  mushroom: 0.05,
  greenPepper: 0.05,
};
const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    ingredients: {
      pepperoni: 0,
      mushroom: 0,
      greenPepper: 0,
      cheese: 0,
    },
    totalPrice: 0,
    canBeBought: false,
    ordered: false,
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

      default:
        break;
    }
  };

  const addIngredient = (type) => {
    if (type === "cheese" && pizza.ingredients[type] >= 5) return;
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

  const orderHandler = () => {
    setPizza({
      ingredients: pizza.ingredients,
      totalPrice: pizza.totalPrice,
      canBeBought: pizza.canBeBought,
      ordered: true,
    });
  };

  const orderCancelHandler = () => {
    setPizza({
      ingredients: pizza.ingredients,
      totalPrice: pizza.totalPrice,
      canBeBought: pizza.canBeBought,
      ordered: false,
    });
  };

  const orderContinueHandler = () => {
    alert("Lets continue!");
  };

  const disabledInfo = { ...pizza.ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <>
      <Modal
        ingredients={pizza.ingredients}
        show={pizza.ordered}
        modalClosed={orderCancelHandler}
        orderCancel={orderCancelHandler}
        orderContinue={orderContinueHandler}
        price={pizza.totalPrice}
      />
      <Pizza ingredients={pizza.ingredients} />
      <ControlsWrapper>
        <BuildControls
          ingredientAdded={addIngredient}
          ingredientRemoved={removeIngredient}
          disabled={disabledInfo}
          price={pizza.totalPrice}
          canBeBought={pizza.canBeBought}
          ordered={orderHandler}
        />
      </ControlsWrapper>
    </>
  );
};

export default PizzaBuilder;
