import { OrderHeader } from "./OrderHeader";
import { OrderType } from "./OrderType";
import { OrderContent } from "./OrderContent";
import { CheckOut } from "./CheckOut";

export const OrderSummary = ({ ingredients }) => {
  return (
    <>
      <OrderHeader>Order Summary</OrderHeader>
      <OrderType>This is your delicious pizza!</OrderType>
      <OrderContent ingredients={ingredients}></OrderContent>
      <CheckOut>Continue to CheckOut?</CheckOut>
    </>
  );
};
