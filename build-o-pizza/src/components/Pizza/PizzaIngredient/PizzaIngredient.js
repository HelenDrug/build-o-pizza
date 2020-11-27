import classes from "./PizzaIngredient.css";
import PropTypes from "prop-types";

const PizzaIndregient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "pizza-bottom":
      ingredient = (
        <div className={classes.PizzaBottom}>
          <div className={classes.Sauce}></div>
          <div className={classes.Cheese}></div>
        </div>
      );
      break;
    case "pepperoni":
      ingredient = (
        <>
          <div className={`${classes.Pepperoni} ${classes.PepOne}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepTwo}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepThree}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepFour}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepFive}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepSix}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepSeven}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepEight}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepNine}`}>1</div>;
          <div className={`${classes.Pepperoni} ${classes.PepTen}`}>1</div>;
        </>
      );

      break;
    case "mushroom":
      ingredient = (
        <>
          <div className={`${classes.Mushroom} ${classes.MushroomOne}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomTwo}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomThree}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomFour}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomFive}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomSix}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomSeven}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomEight}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomNine}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
          <div className={`${classes.Mushroom} ${classes.MushroomTen}`}>
            <div className={clesses.Cap}></div>
            <div className={classes.Stem}></div>
          </div>
          ;
        </>
      );
      break;

    case "green-pepper":
      ingredient = (
        <>
          <div className={`${classes.Pepper} ${classes.GreenPepperOne}`}></div>;
          <div className={`${classes.Pepper} ${classes.GreenPepperTwo}`}></div>;
          <div
            className={`${classes.Pepper} ${classes.GreenPepperThree}`}
          ></div>
          ;
          <div className={`${classes.Pepper} ${classes.GreenPepperFour}`}></div>
          ;
          <div className={`${classes.Pepper} ${classes.GreenPepperFive}`}></div>
          ;<div className={`${classes.Pepper} ${classes.GreenPepperSix}`}></div>
          ;
          <div
            className={`${classes.Pepper} ${classes.GreenPepperSeven}`}
          ></div>
          ;
          <div
            className={`${classes.Pepper} ${classes.GreenPepperEight}`}
          ></div>
          ;
          <div className={`${classes.Pepper} ${classes.GreenPepperNine}`}></div>
          ;<div className={`${classes.Pepper} ${classes.GreenPepperTen}`}></div>
          ;
        </>
      );
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

PizzaIndregient.propTypes = {
    type = PropTypes.string.isRequired
}

export default PizzaIndregient;
