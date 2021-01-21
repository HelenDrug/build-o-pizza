import { StyledBuildControls } from "./StyledBuildControls";
import { BuildControl } from "./BuildControl/BuildControl";
import { StyledPrice } from "./StyledPrice/StyledPrice";
import {OrderButton} from "./OrderButton/OrderButton"

const controlLabels = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Mushrooms", type: "mushroom" },
  { label: "Green Pepper", type: "greenPepper" },
];

export const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
}) => {
  return (
    <StyledBuildControls>
      <StyledPrice>Current price: {price.toFixed(2)}</StyledPrice>
      {controlLabels.map((item) => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            ingredientAdded={() => ingredientAdded(item.type)}
            ingredientRemoved={() => ingredientRemoved(item.type)}
            disabled={disabled[item.type]}
          />
        );
      })}
      <OrderButton>ORDER NOW</OrderButton>
    </StyledBuildControls>
  );
};
