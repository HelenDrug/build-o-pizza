import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #2c061f;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  :disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }
  :hover,
  :active {
    background-color: #99703f;
    color: white;
  }
  :hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;
