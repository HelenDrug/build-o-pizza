import styled from "styled-components";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";
// import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";
// import { useState } from "react";

const Content = styled.main`
  display: flex;
  margin-top: 3rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Layout = ({ children }) => {
  // const [showSideDrawer, setShowSideDrawer] = useState(true);

  /* const closeSideDrawer = () => {
    setShowSideDrawer(false);
  };

  const toggleSideDrawer = () => {
    console.log("i have been toggled");
    showSideDrawer ? setShowSideDrawer(false) : setShowSideDrawer(true);
  }; */
  return (
    <>
      <ToolBar />
      {/* <SideDrawer opened={showSideDrawer} closed={closeSideDrawer} /> */}
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
