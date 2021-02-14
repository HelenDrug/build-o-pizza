import { MenuDropDown } from "./MenuDropDown";
import { MenuWrapper, MenuButton, Line } from "./Menu.styles";
import { useState } from "react";

export const Menu = () => {
  const [display, setDisplay] = useState(false);

  const menuButtonClick = () => {
    setDisplay(!display);
  };
  return (
    <MenuWrapper>
      <MenuButton onClick={menuButtonClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </MenuButton>
      <MenuDropDown display={display} />
    </MenuWrapper>
  );
};
