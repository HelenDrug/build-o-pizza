import styled from "styled-components";

const Link = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  display: block;
  :hover,
  :active {
    background-color: #8f5c2c;
  }
`;

export const NavLink = ({link, children}) => {
  return (
      <Link href={link}>{children}</Link>
  )
};
