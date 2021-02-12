import { MenuDropDown } from "./MenuDropDown";
import { MenuWrapper, MenuButton } from "./Menu.styles";
import { useState } from "react";

export const Menu = () => {
  const [display, setDisplay] = useState(false);

  const menuButtonClick = () => {
    setDisplay(!display);
  };
  return (
    <MenuWrapper>
      <MenuButton onClick={menuButtonClick}>MENU</MenuButton>
      <MenuDropDown display={display} />
    </MenuWrapper>
  );
};
