import SimpleMushroom from "./SimpleMushroom";
import img from "../../../../img/mushroom_2.png";

const Mushroom = ({ mushroomMargin, mushroomTransform }) => {
  return (
    <SimpleMushroom
      mushroomMargin={mushroomMargin}
      mushroomTransform={mushroomTransform}
    >
      <img src={img} alt="Mushroom" />
    </SimpleMushroom>
  );
};

export default Mushroom;
