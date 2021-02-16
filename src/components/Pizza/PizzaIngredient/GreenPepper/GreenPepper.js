import SimplePepper from "./SimplePepper";
import img from "../../../../img/green_pepper.png";

const GreenPepper = ({ pepperMargin, pepperTransform }) => {
  return (
    <SimplePepper pepperMargin={pepperMargin} pepperTransform={pepperTransform}>
      <img src={img} alt="Green Pepper"/>
    </SimplePepper>
  );
};

export default GreenPepper;
