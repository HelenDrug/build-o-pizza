import styled from "styled-components";

export const ToolBarWrapper = styled.div`
  height: 66px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  color: white;
  @media screen and (max-width: 499px) {
    display: none;
  }
`;

export const Menu = styled.div``;
