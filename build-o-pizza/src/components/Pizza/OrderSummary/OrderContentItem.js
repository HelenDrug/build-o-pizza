import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

const OrderContentItemIcon = styled(BiCheck)`
  font-size: 1rem;
  color: #e38b06;
  margin-right: 0.5rem;
`;

const OrderContentItemList = styled.li`
  padding-bottom: 0.5rem;
`;

export const OrderContentItem = ({ children }) => {
  return (
    <>
      <OrderContentItemList>
        <OrderContentItemIcon />
        {children}
      </OrderContentItemList>
    </>
  );
};
