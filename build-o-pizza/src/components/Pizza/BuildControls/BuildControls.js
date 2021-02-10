import {
  BuildControlsWrapper,
  Price,
  OrderButton,
} from "./BuildControls.styles";
import { BuildControl } from "./BuildControl/BuildControl";

const controlLabels = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Mushrooms", type: "mushroom" },
  { label: "Green Pepper", type: "greenPepper" },
  { label: "Cheese", type: "cheese" },
];

export const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  canBeBought,
  ordered,
}) => {
  return (
    <BuildControlsWrapper>
      <Price>Current price: {price.toFixed(2)}</Price>
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
      <OrderButton disabled={!canBeBought} onClick={ordered}>
        ORDER NOW
      </OrderButton>
    </BuildControlsWrapper>
  );
};
