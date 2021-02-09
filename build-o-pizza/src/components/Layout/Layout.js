import styled from "styled-components";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";
import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";

const Content = styled.main`
  display: flex;
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <ToolBar />
      <SideDrawer />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
