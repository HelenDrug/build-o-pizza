import { StyledBuildControl } from "./StyledBuildControl";
import { StyledLabel } from "./StyledLabel/StyledLabel";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";
import { ButtonRemove } from "./ButtonRemove/ButtonRemove";

export const BuildControl = ({ label }) => {
  return (
    <StyledBuildControl>
      <StyledLabel>{label}</StyledLabel>
      <ButtonAdd>More</ButtonAdd>
      <ButtonRemove>Less</ButtonRemove>
    </StyledBuildControl>
  );
};
