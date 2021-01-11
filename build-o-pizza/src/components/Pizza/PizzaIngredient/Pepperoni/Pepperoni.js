import styled from "styled-components";

const Pepperoni = ({ pepMargin, children }) => {
  const StyledPepperoni = styled.div`
    position: absolute;
    width: 80px;
    height: 70px;
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
    margin: ${pepMargin};
  `;
  return <StyledPepperoni>{children}</StyledPepperoni>;
};
export default Pepperoni;
