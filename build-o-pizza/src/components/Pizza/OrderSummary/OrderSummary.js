export const OrderSummary = ({ingredients}) => {
  return (<>
    <OrderHeader></OrderHeader>
    <OrderType></OrderType>
    <OrderContent ingredients={ingredients}></OrderContent>
  </>);
};
