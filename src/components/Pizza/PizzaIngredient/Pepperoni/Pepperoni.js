import SimplePepperoni from "./SimplePepperoni";
import img from "../../../../img/pepperoni_1.png";

const Pepperoni = ({ pepMargin }) => {
  return (
    <SimplePepperoni pepMargin={pepMargin}>
      <img src={img} alt="Pepperoni" />
    </SimplePepperoni>
  );
};

export default Pepperoni;
