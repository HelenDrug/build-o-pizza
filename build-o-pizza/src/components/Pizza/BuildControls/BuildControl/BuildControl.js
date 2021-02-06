import {
  BuildControlWrapper,
  Label,
  ButtonAdd,
  ButtonRemove,
} from "./BuildControl.styles";

export const BuildControl = ({
  label,
  ingredientAdded,
  ingredientRemoved,
  disabled,
}) => {
  return (
    <BuildControlWrapper>
      <Label>{label}</Label>
      <ButtonAdd onClick={ingredientAdded}>More</ButtonAdd>
      <ButtonRemove onClick={ingredientRemoved} disabled={disabled}>
        Less
      </ButtonRemove>
    </BuildControlWrapper>
  );
};
