import SimpleCheese from "./SimpleCheese";
import img from "../../../../img/cheese_sliced_1.png";

const Cheese = () => {
  return (
    <SimpleCheese>
      <img src={img} />
      {console.log("Cheese from Cheese component")}
    </SimpleCheese>
  );
};

export default Cheese;
