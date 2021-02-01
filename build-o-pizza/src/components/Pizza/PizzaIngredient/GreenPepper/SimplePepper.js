import styled from "styled-components";

const SimplePepper = styled.div`
  position: absolute;
  margin: ${(props) => props.pepperMargin};
  transform: rotate(${(props) => props.pepperTransform});
`;

export default SimplePepper;
