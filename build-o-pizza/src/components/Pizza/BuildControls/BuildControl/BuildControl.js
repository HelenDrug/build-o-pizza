import { StyledBuildControl } from "./StyledBuildControl";
import { StyledLabel } from "./StyledLabel/StyledLabel";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";
import { ButtonRemove } from "./ButtonRemove/ButtonRemove";

export const BuildControl = ({ label, ingredientAdded, ingredientRemoved }) => {
  return (
    <StyledBuildControl>
      <StyledLabel>{label}</StyledLabel>
      <ButtonAdd onClick={ingredientAdded}>More</ButtonAdd>
      <ButtonRemove onClick={ingredientRemoved}>Less</ButtonRemove>
    </StyledBuildControl>
  );
};
