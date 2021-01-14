import { StyledBuildControls } from "./StyledBuildControls";
import {BuildControl} from "./BuildControl/BuildControl";

const controlLabels = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Mushrooms", type: "mushroom" },
  { label: "Green Pepper", type: "greenPepper" },
];

export const BuildControls = () => {
  return (
    <StyledBuildControls>
      {controlLabels.map((label) => {
        return <BuildControl key={label.label} label={label.label} />;
      })}
    </StyledBuildControls>
  );
};
