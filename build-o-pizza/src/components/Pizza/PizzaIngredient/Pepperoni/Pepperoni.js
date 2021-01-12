import SimplePepperoni from "./SimplePepperoni";

const Pepperoni = ({ pepMargin, children }) => {
  return <SimplePepperoni pepMargin={pepMargin}>{children}</SimplePepperoni>;
};

export default Pepperoni;
