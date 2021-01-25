import { OrderHeader } from "./OrderHeader";
import { OrderType } from "./OrderType";
import { OrderContent } from "./OrderContent";

export const OrderSummary = ({ ingredients }) => {
  return (
    <>
      <OrderHeader>Order Summary</OrderHeader>
      <OrderType>This is your delicious pizza!</OrderType>
      <OrderContent ingredients={ingredients}>1</OrderContent>
    </>
  );
};
