import StyledBuildControl from "./StyledBuildControl";
import StyledLabel from "./StyledLabel/StyledLabel";
import StyledButton from "./StyledButton/StyledButton"

export const BuildControl = ({ label }) => {
  return (
    <StyledBuildControl>
      <StyledLabel>{label}</StyledLabel>
      <StyledButton>More</StyledButton>
      <StyledButton>Less</StyledButton>
    </StyledBuildControl>
  );
};
