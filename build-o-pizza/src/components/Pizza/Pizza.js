import classes from "./Pizza.module.css";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = ({ ingredients }) => {
  let ingredientsArray = Object.keys(ingredients).map((ingredientKey) => {
    {
      return [
        ...Array(ingredients[ingredientKey]).map((element, index) => {
          return (
            <PizzaIngredient key={ingredientKey + index} type={ingredientKey} />
          );
        }),
      ];
    }
  });

  console.log(ingredientsArray);

  return (
    <div className={classes.Pizza}>
      <PizzaIngredient type="pizzaBottom">
        {ingredientsArray}
        <PizzaIngredient type="greenPepper" />
      </PizzaIngredient>
    </div>
  );
};

export default Pizza;
