import classes from "./PizzaIngredient.module.css";
import PropTypes from "prop-types";

const PizzaIndregient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "pizzaBottom":
      ingredient = (
        <div className={classes.PizzaBottom}>
          <div className={classes.Sauce}>{props.children}</div>
        </div>
      );
      break;
    case "pepperoni":
      ingredient = (
        <>
          <div className={`${classes.Pepperoni} ${classes.PepOne}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepTwo}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepThree}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepFour}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepFive}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepSix}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepSeven}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepEight}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepNine}`}>1</div>
          <div className={`${classes.Pepperoni} ${classes.PepTen}`}>1</div>
        </>
      );

      break;
    case "mushroom":
      ingredient = (
        <>
          <div className={`${classes.Mushroom} ${classes.MushroomOne}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          <div className={`${classes.Mushroom} ${classes.MushroomTwo}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomThree}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomFour}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomFive}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomSix}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomSeven}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomEight}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomNine}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>

          <div className={`${classes.Mushroom} ${classes.MushroomTen}`}>
            <div className={classes.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
        </>
      );
      break;

    case "greenPepper":
      ingredient = (
        <>
          <div className={`${classes.Pepper} ${classes.GreenPepperOne}`}></div>
          <div className={`${classes.Pepper} ${classes.GreenPepperTwo}`}></div>
          <div
            className={`${classes.Pepper} ${classes.GreenPepperThree}`}
          ></div>

          <div className={`${classes.Pepper} ${classes.GreenPepperFour}`}></div>

          <div className={`${classes.Pepper} ${classes.GreenPepperFive}`}></div>
          <div className={`${classes.Pepper} ${classes.GreenPepperSix}`}></div>

          <div
            className={`${classes.Pepper} ${classes.GreenPepperSeven}`}
          ></div>

          <div
            className={`${classes.Pepper} ${classes.GreenPepperEight}`}
          ></div>

          <div className={`${classes.Pepper} ${classes.GreenPepperNine}`}></div>
          <div className={`${classes.Pepper} ${classes.GreenPepperTen}`}></div>
        </>
      );
      break;

    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default PizzaIndregient;
