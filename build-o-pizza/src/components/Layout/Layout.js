import styled from "styled-components";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";

const Content = styled.main`
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <>
      <ToolBar />
      <div style={{ marginTop: "4rem", marginLeft: "1rem" }}>Sides</div>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
