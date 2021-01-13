import classes from "./PizzaIngredient.module.css";
import { useState } from "react";
import PizzaBottom from "./PizzaBottom/PizzaBottom";
import Sauce from "./Sauce/Sauce";
import Cheese from "./Cheese/Cheese";
import Pepperoni from "./Pepperoni/Pepperoni";
import GreenPepper from "./GreenPepper/GreenPepper";
import Mushroom from "./Mushroom/Mushroom";

const PizzaIndregient = ({ type, quantity, children }) => {
  const [pepperoniMargin, setPepperoniMargin] = useState([
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

  const [pepperMargin, setPepperMargin] = useState([
    { margin: "200px 0 0 100px", transform: "22deg" },
    { margin: "250px 0 0 300px", transform: "-47deg" },
    { margin: "195px 0 0 200px", transform: "115deg" },
    { margin: "90px 0 0 300px", transform: "67deg" },
    { margin: "120px 0 0 150px", transform: "-86deg" },
    { margin: "300px 0 0 200px", transform: "0deg" },
    { margin: "340px 0 0 295px", transform: "-47deg" },
    { margin: "200px 0 0 380px", transform: "115deg" },
    { margin: "300px 0 0 100px", transform: "67deg" },
    { margin: "400px 0 0 200px", transform: "289deg" },
  ]);

  const [mushroomMargin, setMushroomMargin] = useState([
    { margin: "167px 0 0 122px", transform: "22deg" },
    { margin: "100px 0 0 230px", transform: "-47deg" },
    { margin: "357px 0 0 201px", transform: "15deg" },
    { margin: "157px 0 0 335px", transform: "67deg" },
    { margin: "215px 0 0 340px", transform: "-86deg" },
  ]);

  const filteredMargin = (quantity, array) => {
    let MarginsArray = [...array];
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
          {filteredMargin(quantity, pepperoniMargin).map((margin) => {
            return <Pepperoni pepMargin={margin}>1</Pepperoni>;
          })}
        </>
      );

      break;
    case "mushroom":
      ingredient = (
        <>
          {filteredMargin(quantity, mushroomMargin).map((margin) => {
            return (
              <Mushroom
                mushroomMargin={margin.margin}
                mushroomTransform={margin.transform}
              >
                1
              </Mushroom>
            );
          })}
        </>
      );
      break;

    case "greenPepper":
      ingredient = (
        <>
          {filteredMargin(quantity, pepperMargin).map((margin) => {
            return (
              <GreenPepper
                pepperMargin={margin.margin}
                pepperTransform={margin.transform}
              >
                1
              </GreenPepper>
            );
          })}
        </>
      );
      break;

    case "cheese":
      ingredient = <Cheese></Cheese>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default PizzaIndregient;
