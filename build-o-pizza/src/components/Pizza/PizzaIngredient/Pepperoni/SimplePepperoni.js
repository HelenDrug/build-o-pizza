import styled from "styled-components";

const SimplePepperoni = styled.div`
  position: absolute;
  width: 60px;
  height: 50px;
  margin: ${(props) => props.pepMargin};
`;

export default SimplePepperoni;
