import styled from "styled-components";

const SimplePepperoni = styled.div`
  position: absolute;
  width: 60px;
  height: 50px;
  border-radius: 60px;
  background: hsl(26, 96%, 18%);
  z-index: 12;
  font-size: 2em;
  text-align: center;
  padding-top: 10px;
  box-shadow: inset 0 0 85px #711712;
  border: 2px solid #871b15;
  text-indent: -9999px;
  color: #fff;
  margin: ${(props) => props.pepMargin};
`;

export default SimplePepperoni;
