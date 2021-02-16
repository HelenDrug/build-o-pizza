import { MenuDropDown } from "./MenuDropDown";
import { MenuWrapper, MenuButton, Line } from "./Menu.styles";
import { useState } from "react";
import { BackDrop } from "../../UI/Backdrop/Backdrop";

export const Menu = () => {
  const [display, setDisplay] = useState(false);

  const toggleClick = () => {
    setDisplay(!display);
  };
  return (
    <MenuWrapper>
      <MenuButton onClick={toggleClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </MenuButton>
      <BackDrop show={display} clicked={toggleClick} />
      <MenuDropDown display={display} />
    </MenuWrapper>
  );
};
