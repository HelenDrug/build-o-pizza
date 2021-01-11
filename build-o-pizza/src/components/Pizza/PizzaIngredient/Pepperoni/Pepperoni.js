import classes from "./Pepperoni.module.css";

const Pepperoni = ({ pepMargin, children }) => {
  return (
    <div className={classes.Pepperoni} style={{ margin: `${pepMargin}` }}>
      {children}
    </div>
  );
};
export default Pepperoni;
