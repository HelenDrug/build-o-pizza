import styled from "styled-components";

const SimplePepper = styled.div`
  position: absolute;
  width: 20px;
  height: 45px;
  background: #2f5e20;
  box-shadow: 2px 2px 2px rgba(66, 132, 45, 0.9);
  margin: 250px 0 0 400px;
  z-index: 30;
  margin: ${(props) => props.pepperMargin};
  transform: rotate(${(props) => props.pepperTransform});
`;

export default SimplePepper;
