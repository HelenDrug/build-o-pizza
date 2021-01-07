import classes from "./Pizza.module.css";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = ({ ingredients }) => {
 
  let ingredientsArray = Object.keys(ingredients).map((item) => {
    return [ingredients[item]].map((elem, index) => {
      return <PizzaIngredient key={item + index} type={item} />;
    });
  });

  return (
    <div className={classes.Pizza}>
      <PizzaIngredient type="pizzaBottom">
        {ingredientsArray}
      </PizzaIngredient>
    </div>
  );
};

export default Pizza;
