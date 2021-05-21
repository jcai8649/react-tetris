import React from "react";
import { StyledLoaderContainer, StyledLoader } from "./styles/StyledLoader";
import svgLoader from "../asset/svg/loader.svg";

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoader src={svgLoader} alt="loading" />
    </StyledLoaderContainer>
  );
};

export default Loader;
