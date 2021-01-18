import styled from "styled-components";

const Content = styled.main`
  margin-bottom: 16px;
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <>
      <div>ToolBar, Sides, Backdrop</div>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
