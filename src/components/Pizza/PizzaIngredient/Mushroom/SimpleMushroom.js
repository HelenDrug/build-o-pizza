import styled from "styled-components";

const SimpleMushroom = styled.div`
  position: absolute;
  width: 70px;
  height: 75px;
  margin: ${(props) => props.mushroomMargin};
  transform: rotate(${(props) => props.mushroomTransform});
`;

export default SimpleMushroom;
