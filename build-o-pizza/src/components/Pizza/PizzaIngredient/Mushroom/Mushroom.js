import SimpleMushroom from "./SimpleMushroom";
import Cap from "./Cap";
import Stem from "./Stem";

const Mushroom = ({ mushroomMargin, mushroomTransform }) => {
  return (
    <SimpleMushroom
      mushroomMargin={mushroomMargin}
      mushroomTransform={mushroomTransform}
    >
      <Cap></Cap>
      <Stem></Stem>
    </SimpleMushroom>
  );
};

export default Mushroom;
