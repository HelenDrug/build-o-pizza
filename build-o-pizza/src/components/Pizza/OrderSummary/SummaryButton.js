import styled from "styled-components";
import { StyledButton } from "../BuildControls/BuildControl/StyledButton/StyledButton";

export const SummaryButton = styled(StyledButton)`
  width: 5rem;
  font-size: 0.8rem;
  color: red;
  border-color: #f27b7a;
  :hover,
  :active {
    background-color: #99703f;
    border: 1px solid white;
    color: white;
  }
`;
