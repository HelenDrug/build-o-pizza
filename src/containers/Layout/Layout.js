import styled from "styled-components";
import { ToolBar } from "../../components/Navigation/ToolBar/ToolBar";

const Content = styled.main`
  display: flex;
  margin-top: 3rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ToolBar />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
