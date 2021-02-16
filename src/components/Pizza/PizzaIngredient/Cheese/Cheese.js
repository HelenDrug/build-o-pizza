import SimpleCheese from "./SimpleCheese";
import img from "../../../../img/cheese_sliced_1.png";

const Cheese = ({ cheeseMargin }) => {
  return <SimpleCheese margin={cheeseMargin}><img src={img} alt="Cheese"/></SimpleCheese>;
};

export default Cheese;
