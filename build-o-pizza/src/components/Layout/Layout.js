import styled from "styled-components";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";

const Content = styled.main`
  margin-bottom: 16px;
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <>
      <ToolBar />
      <div>Sides</div>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
