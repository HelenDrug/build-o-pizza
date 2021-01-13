import styled from "styled-components";

const SimpleMushroom = styled.div`
  position: absolute;
  width: 70px;
  height: 75px;
  z-index: 20;
  margin: ${(props) => props.mushroomMargin};
  text-indent: -9999px;
  transform: rotate(${(props) => props.mushroomTransform});
`;

export default SimpleMushroom;
