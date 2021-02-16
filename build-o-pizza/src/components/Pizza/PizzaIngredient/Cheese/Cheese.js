import SimpleCheese from "./SimpleCheese";
import img from "../../../../img/cheese_sliced_1.png";

const Cheese = ({ cheeseMargin }) => {
  return <SimpleCheese margin={cheeseMargin}>{<img src={img} />}</SimpleCheese>;
};

export default Cheese;
