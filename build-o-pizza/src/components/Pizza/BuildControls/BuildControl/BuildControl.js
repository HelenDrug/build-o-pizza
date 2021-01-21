import { StyledBuildControl } from "./StyledBuildControl";
import { StyledLabel } from "./StyledLabel/StyledLabel";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";
import { ButtonRemove } from "./ButtonRemove/ButtonRemove";

export const BuildControl = ({
  label,
  ingredientAdded,
  ingredientRemoved,
  disabled,
}) => {
  return (
    <StyledBuildControl>
      <StyledLabel>{label}</StyledLabel>
      <ButtonAdd onClick={ingredientAdded}>More</ButtonAdd>
      <ButtonRemove onClick={ingredientRemoved} disabled={disabled}>
        Less
      </ButtonRemove>
    </StyledBuildControl>
  );
};
