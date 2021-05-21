import React from "react";
import { StyledBackdrop } from "./styles/StyledBackdrop";

const Backdrop = ({ show, clicked }) => {
  return show ? <StyledBackdrop onClick={clicked}></StyledBackdrop> : null;
};

export default Backdrop;
