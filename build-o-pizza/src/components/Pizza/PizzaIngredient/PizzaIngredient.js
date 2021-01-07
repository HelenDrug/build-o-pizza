import classes from "./PizzaIngredient.module.css";
import { useState } from "react";
import PizzaBottom from "./PizzaBottom/PizzaBottom";
import Sauce from "./Sauce/Sauce";
import Pepperoni from "./Pepperoni/Pepperoni";

const PizzaIndregient = ({ type, quantity, children }) => {
  const [pepMargin, setPepMargin] = useState([
    "55px 0 0 135px",
    "35px 0 0 260px",
    "135px 0 0 50px",
    "250px 0 0 35px",
    "360px 0 0 75px",
    "85px 0 0 360px",
    "180px 0 0 415px",
    "285px 0 0 400px",
    "400px 0 0 320px",
    "420px 0 0 180px",
  ]);

  const calculateMargins = (quantity) => {
    let MarginsArray = [...pepMargin];
    let newMarginsArray = [];
    for (let i = 0; i < quantity; ++i) {
      newMarginsArray.push(MarginsArray[i]);
    }
    return newMarginsArray;
  };

  let ingredient = null;

  switch (type) {
    case "pizzaBottom":
      ingredient = (
        <PizzaBottom>
          <Sauce>{children}</Sauce>
        </PizzaBottom>
      );
      break;
    case "pepperoni":
      ingredient = (
        <>
          {calculateMargins(quantity).map((margin) => {
            return <Pepperoni pepMargin={margin}>1</Pepperoni>;
          })}
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
