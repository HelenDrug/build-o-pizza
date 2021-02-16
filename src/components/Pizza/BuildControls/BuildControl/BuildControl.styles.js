import styled from "styled-components";

export const BuildControlWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 0px 10px 0px 10px;
`;

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 130px;
`;

export const Button = styled.button`
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

export const ButtonAdd = styled(Button)`
  background-color: #8f5e1e;
  color: white;
  :hover,
  :active {
    background-color: #99703f;
    color: white;
  }
`;

export const ButtonRemove = styled(Button)`
  background-color: #d39952;
  color: white;
  :hover,
  :active {
    background-color: #daa972;
    color: white;
  }
`;
