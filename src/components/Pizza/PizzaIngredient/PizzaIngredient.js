import { useState } from "react";
import PizzaBottom from "./PizzaBottom/PizzaBottom";
import Sauce from "./Sauce/Sauce";
import Cheese from "./Cheese/Cheese";
import Pepperoni from "./Pepperoni/Pepperoni";
import GreenPepper from "./GreenPepper/GreenPepper";
import Mushroom from "./Mushroom/Mushroom";

const PizzaIndregient = ({ type, quantity, children }) => {
  const [pepperoniMargin] = useState([
    "55px 0 0 135px",
    "55px 0 0 230px",
    "115px 0 0 50px",
    "210px 0 0 35px",
    "300px 0 0 75px",
    "105px 0 0 310px",
    "180px 0 0 355px",
    "285px 0 0 330px",
    "330px 0 0 270px",
    "350px 0 0 180px",
  ]);

  const [pepperMargin] = useState([
    { margin: "170px 0 0 100px", transform: "22deg" },
    { margin: "250px 0 0 300px", transform: "-47deg" },
    { margin: "195px 0 0 200px", transform: "115deg" },
    { margin: "130px 0 0 250px", transform: "67deg" },
    { margin: "120px 0 0 150px", transform: "-86deg" },
    { margin: "260px 0 0 180px", transform: "0deg" },
    { margin: "280px 0 0 245px", transform: "-95deg" },
    { margin: "180px 0 0 300px", transform: "115deg" },
    { margin: "250px 0 0 100px", transform: "67deg" },
    { margin: "300px 0 0 150px", transform: "289deg" },
  ]);

  const [mushroomMargin] = useState([
    { margin: "167px 0 0 50px", transform: "22deg" },
    { margin: "80px 0 0 270px", transform: "-47deg" },
    { margin: "67px 0 0 171px", transform: "15deg" },
    { margin: "157px 0 0 335px", transform: "67deg" },
    { margin: "215px 0 0 200px", transform: "-86deg" },
    { margin: "331px 0 0 220px", transform: "0deg" },
    { margin: "267px 0 0 100px", transform: "-101deg" },
    { margin: "147px 0 0 134px", transform: "289deg" },
    { margin: "150px 0 0 231px", transform: "133de" },
    { margin: "220px 0 0 300px", transform: "115deg" },
  ]);

  const [cheeseMargin] = useState([
    { margin: "60px 0 0 10px" },
    { margin: "150px 0 0 -100px" },
    { margin: "150px 0 0 121px" },
    { margin: "250px 0 0 -50px" },
    { margin: "260px 0 0 80px" },
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
        <>
          <PizzaBottom />
          <Sauce>{children}</Sauce>
        </>
      );
      break;
    case "pepperoni":
      ingredient = (
        <>
          {filteredMargin(quantity, pepperoniMargin).map((margin, idx) => {
            return (
              <Pepperoni key={idx} pepMargin={margin}>
                1
              </Pepperoni>
            );
          })}
        </>
      );

      break;
    case "mushroom":
      ingredient = (
        <>
          {filteredMargin(quantity, mushroomMargin).map((margin, idx) => {
            return (
              <Mushroom
                key={idx}
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
          {filteredMargin(quantity, pepperMargin).map((margin, idx) => {
            return (
              <GreenPepper
                key={idx}
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
      ingredient = (
        <>
          {filteredMargin(quantity, cheeseMargin).map((margin, idx) => {
            return (
              <Cheese key={idx} cheeseMargin={margin.margin}>
                1
              </Cheese>
            );
          })}
        </>
      );
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default PizzaIndregient;
