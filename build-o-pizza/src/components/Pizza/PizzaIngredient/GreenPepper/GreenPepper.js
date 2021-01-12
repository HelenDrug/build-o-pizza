import SimplePepper from "./SimplePepper";

const GreenPepper = ({ pepperMargin, pepperTransform }) => {
  console.log(pepperMargin);
  return (
    <SimplePepper
      pepperMargin={pepperMargin}
      pepperTransform={pepperTransform}
    ></SimplePepper>
  );
};

export default GreenPepper;
