import SimplePepperoni from "./SimplePepperoni";
import img from "../../../../img/pepperoni_1.png";

const Pepperoni = ({ pepMargin }) => {
  return (
    <SimplePepperoni pepMargin={pepMargin}>
      <img src={img} />
    </SimplePepperoni>
  );
};

export default Pepperoni;
