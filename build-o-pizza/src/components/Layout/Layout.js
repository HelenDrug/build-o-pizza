import classes from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>ToolBar, Sides, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </>
  );
};

export default Layout;
