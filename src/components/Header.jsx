import React from "react";
import Logo from "../asset/img/logo.png";
import { StyledHeader, StyledImg } from "./styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledImg src={Logo} alt="Tetris Logo" />
      <h1>React Tetris</h1>
    </StyledHeader>
  );
};

export default Header;
