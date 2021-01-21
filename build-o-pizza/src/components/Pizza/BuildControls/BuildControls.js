import { StyledBuildControls } from "./StyledBuildControls";
import { BuildControl } from "./BuildControl/BuildControl";

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
      <p>Current price : {price}</p>
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
    </StyledBuildControls>
  );
};
